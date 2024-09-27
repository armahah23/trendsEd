//conditional rendering
//useState

import { useState } from "react";

function ButtonChange() {

    const [isMuted, setIsMuted] = useState(true);
    const [play, setPlay] = useState(false);

    const handleMute = () => {
        setIsMuted(false);
    }

    const handleUnmute = () => {
        setIsMuted(true);
    }

    const handlePlay = () => {
        setPlay(!play);
    }

    const handleStop = () => {
        setPlay(!play);
    }

  return (
    <>
      <h1 style={{ color: "violet", textTransform: "uppercase" }}>
        Button Change handler
      </h1>
      {isMuted ? 
      <p style={{
        color: "red",
        textTransform: "uppercase",
        fontSize: "20px",
        fontWeight: 700,
        backgroundColor: "yellow",
        width: "100px",
        textAlign: "center",
        padding: "5px",
        borderRadius: "10px",
        border: "1px solid red",
        cursor: "pointer",
      }} onClick={handleMute} >Mute</p> 
      :
      <p style={{
        color: "white",
        textTransform: "uppercase",
        fontSize: "20px",
        fontWeight: 700,
        backgroundColor: "green",
        width: "100px",
        textAlign: "center",
        padding: "5px",
        borderRadius: "10px",
        border: "1px solid green",
        cursor: "pointer",
      }} onClick={handleUnmute} >Unmute</p> } 
      
      {play ? <button style={{
        color: "white",
        textTransform: "uppercase",
        fontSize: "20px",
        fontWeight: 700,
        backgroundColor: "gray",
        width: "100px",
        textAlign: "center",
        padding: "8px",
        borderRadius: "10px",
        border: "1px solid green",
        cursor: "pointer",
      }} onClick={()=>handlePlay()} >P</button>
      :
       <button style={{
        color: "white",
        textTransform: "uppercase",
        fontSize: "20px",
        fontWeight: 700,
        backgroundColor: "red",
        width: "100px",
        textAlign: "center",
        padding: "8px",
        borderRadius: "10px",
        border: "1px solid green",
        cursor: "pointer",
      }} onClick={()=>handleStop()} >||</button>
      }
       
      
    </>
  );
}

export default ButtonChange;
