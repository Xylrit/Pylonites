import "./index.css";
import SideBar from "./Components/SideBar";
import React from "react";

const audioData = [
  {
    artist: "Taylor Swift",
    album: "Folklore",
    songTitle: "cardigan",
    songCover:
      "https://upload.wikimedia.org/wikipedia/en/5/5b/Taylor_Swift_-_Folklore.png",
    musicData: "https://www.youtube.com/watch?v=ZwWn7b9w8x8",
  },
  {
    artist: "Taylor Swift",
    album: "Folklore",
    songTitle: "august",
    songCover:
      "https://upload.wikimedia.org/wikipedia/en/5/5b/Taylor_Swift_-_Folklore.png",
    musicData: "https://www.youtube.com/watch?v=ZwWn7b9w8x8",
  },
  {
    artist: "Keshi",
    album: "Requim",
    songTitle: "Bodies",
    songCover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a6/a3/20/a6a32054-f43f-12b3-4019-1f201b6c56b2/24UMGIM70300.rgb.jpg/1200x1200bf-60.jpg",
    musicData: "https://www.youtube.com/watch?v=ZwWn7b9w8x8",
  },
];
function App() {
  return (
    <>
      <div className="h-screen w-screen bg-zinc-800">
        <SideBar></SideBar>
      </div>
    </>
  );
}

export default App;
