import Hero from "../components/hero";

function Home() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
          Profile Card
        </h1>
        <div
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Hero
            profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s"
            profileName="Karthik"
            country="Sri Lanka"
          />
          <Hero
            profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNjkaQHLXfokbl1GiKnXl6v7GNgnG8rb3JA&s"
            profileName="Samual"
            country="India"
          />
          <Hero
            profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s"
            profileName="Keerthi"
            country="United Kingdom"
          />
          <Hero
            profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsG3Ac8-CCLG3PzEvZXAfVoQxmjHleJqjg&s"
            profileName="Anchana"
            country="USA"
          />
          <Hero
            profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFzZ_xi4SXHK6vCWME6nyqmEpJp-1yXm0YVw&s"
            profileName="Ronaaldo"
            country="Portugal"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
