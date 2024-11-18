import React from "react";
import MusicControls from "./MusicControls";

interface MusicCardProps {
  artist: string;
  album: string;
  songTitle: string;
  songCover: string;
}
function MusicCard({ artist, album, songTitle, songCover }: MusicCardProps) {
  return (
    <div>
      <img src={songCover} alt={album + " cover"} />
      <p>{songTitle}</p>
      <p>{artist}</p>
      <MusicControls></MusicControls>
    </div>
  );
}

export default MusicCard;
