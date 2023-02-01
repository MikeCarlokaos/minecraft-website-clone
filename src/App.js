import { Route, Routes } from "react-router-dom";
import Community from "./pages/Community";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Minecraft from "./pages/Minecraft";
import MinecraftDungeons from "./pages/MinecraftDungeons";
import MinecraftLegends from "./pages/MinecraftLegends";
import NoPage from "./pages/NoPage";
import Redeem from "./pages/Redeem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/minecraft" element={<Minecraft />} />
      <Route path="/minecraft-dungeons" element={<MinecraftDungeons />} />
      <Route path="/minecraft-legends" element={<MinecraftLegends />} />
      <Route path="/community" element={<Community />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/redeem" element={<Redeem />} />
      <Route path="/*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
