import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const location = useLocation()
  const togglePlaying = () => setPlaying(!playing);

  return (
    <div className="audiomain">
      <img src={location.state.Data.image} width="100%" height={640}/>
     <div className="headerSet"></div>
     <div className="headerDetail">
            <p>Name:{location.state.Data.name}</p>
            <p>Discription:{location.state.Data.Decscription}</p>
            <audio className="AudioControl" controls={true} type="audio/mpeg" src={location.state.Data.audio} onPlay={togglePlaying} onPause={togglePlaying} />
        </div>
    </div>
  );
}

export default AudioPlayer;