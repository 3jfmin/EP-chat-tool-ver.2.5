import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // 必要に応じてスタイルファイルを追加
import "./firebase"; // Firebase設定をインポート

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
