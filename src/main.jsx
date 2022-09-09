import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./Components/context/AuthContext";
import { ChatContextProvider } from "./Components/context/ChatContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <>
        <App />
      </>
    </ChatContextProvider>
  </AuthContextProvider>
);
