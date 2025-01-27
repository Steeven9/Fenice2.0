import { GameData, Player } from "@/types/Initiative";
import { Server } from "socket.io";

let initiativeData: GameData = {
  order: [],
  turn: 1,
  shouldTTS: false,
  players: [],
};

export default function SocketHandler(req: Request, res: any) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      // setup
      console.info(
        `Connection accepted (${socket.id}), user ${socket.handshake.auth.email}`
      );
      initiativeData.players = [
        ...initiativeData.players,
        socket.handshake.auth as Player,
      ].toSorted((a, b) => b.nickname.localeCompare(a.nickname));
      socket.emit("update-characters", initiativeData);

      // -- handlers --

      socket.on("characters-change", (data: GameData) => {
        console.info(`Received update request from ${socket.id}`);
        initiativeData = { ...initiativeData, ...data };
        socket.broadcast.emit("update-characters", initiativeData);
      });

      socket.on("force-refresh", () => {
        console.info(`Force refresh from ${socket.id}`);
        socket.broadcast.emit("reload");
      });

      socket.on("disconnect", () => {
        console.info(
          `Connection closed (${socket.id}), user ${socket.handshake.auth.email}`
        );
        initiativeData.players = initiativeData.players.filter(
          (player) => player.email != socket.handshake.auth.email
        );
        socket.broadcast.emit("update-characters", initiativeData);
      });
    });
  }
  res.end();
}
