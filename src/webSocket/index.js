import React, { createContext, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  endGame,
  setShootCount,
  setTargetsFromBack,
  setUser,
  startedGame,
} from "../store/slices/logicSlices";
import { createTargets } from "../utils";

const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
  const dispatch = useDispatch();
  let socket = useRef(null);
  let ws = useRef(null);

  const startGameEvent = () => {
    const message = JSON.stringify({
      event: "start",
    });
    socket.current.send(message);
  };

  const sendShootTarget = (data) => {
    const message = JSON.stringify({
      event: "record",
      data
    });
    socket.current.send(message);
  };

  const sendEmail = (data) => {
    const message = JSON.stringify({
      event: "email",
      data
    });
    socket.current.send(message);
    dispatch(setUser(data));
  };

  if (!socket.current) {
    socket.current = new WebSocket("ws://game.discoverystudio.xyz/api/ws");
    socket.current.onmessage = (event) => {
      const { data, message, record } = JSON.parse(event.data);
      switch (message) {
        case "Start": {
          dispatch(startedGame());
          break;
        }
        case "targets": {
          const newTargets = createTargets(data);
          dispatch(setTargetsFromBack(newTargets));
          dispatch(setShootCount(record));
          break;
        }
        case "End": {
          dispatch(endGame());
          break;
        }
        default:
          break;
      }
    };
    ws.current = {
      socket: socket.current,
      sendShootTarget,
      startGameEvent,
      sendEmail,
    };
  }

  return (
    <WebSocketContext.Provider value={ws.current}>
      {children}
    </WebSocketContext.Provider>
  );
};
