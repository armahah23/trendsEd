import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";

function QR_generator() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    setQr(url);
  };

  return (
    <>
      <h1>QR Generator</h1>
      <input
        type="text"
        placeholder="Enter URL here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        ref={inputRef}
        style={{
          display: "block",
          padding: "20px",
          border: "1px solid #000",
          borderRadius: "5px",
          marginBottom: "20",
        }}
      />
      <button
        onClick={() => handleClick()}
        style={{
          margin: "20px",
          padding: "20px",
          border: "none",
          background: "black",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        GENERATE
      </button>
      <QRCode
        style={{ display: "block", marginLeft: "20", padding: "20" }}
        value={qr}
        size={256}
        bgColor="#00ff00"
        fgColor="#000"
        level="L"
        viewBox="0 0 1024 1024"
      />
    </>
  );
}

export default QR_generator;
