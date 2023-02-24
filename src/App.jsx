import { useState } from "react";
import "./App.css";
import AppRoute from "./routes";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return <AppRoute isLogin={isLogin} />;
}

export default App;
