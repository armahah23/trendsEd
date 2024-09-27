// Assignment 1

export default function Hero({ profileImg, profileName, country }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid green",
          borderRadius: "10px",
          width: "200px",
        }}
      >
        <img
          src={profileImg}
          alt="profile-Img"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "10px",
            margin: "5px",
            padding: "10px",
          }}
        />
        <h3
          style={{
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            textTransform: "uppercase",
          }}
        >
          {profileName}
        </h3>
        <p>{country}</p>
      </div>
    </>
  );
}
