import './App.css';
import { useEffect, useState } from "react";

const CLIENT_ID = "3951b4e181504bbfbef624c13478456c";
const CLIENT_SECRET = "9b038f6447644b8fa29d3bb746e0d68c";

function App() {
  const [music, setMusic] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const addToPlaylist = (track) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, track]);
  };

  const sortMusic = (music) => {
    return [...music].sort((a, b) => a.name.localeCompare(b.name));
  };

  const toggleFilter = () => {
    setIsFiltered((prev) => !prev);
  };

  const removeFromPlaylist = (index) => {
    const updatedPlaylist = [...playlist];
    updatedPlaylist.splice(index, 1);
    setPlaylist(updatedPlaylist);
  };

  return (
    <div className="container">
      <NavigationBar>
        <Search setMusic={setMusic} />
        <NumberResult music={music} />
        <FilterButton toggleFilter={toggleFilter} isFiltered={isFiltered} />
      </NavigationBar>
      <Main>
        <Box title="Music List">
          <Music
            music={isFiltered ? sortMusic(music) : music}
            addToPlaylist={addToPlaylist}
          />
        </Box>
        <Box title="Play List">
          <PlayList
            playlist={playlist}
            removeFromPlaylist={removeFromPlaylist}
          />
        </Box>
      </Main>
    </div>
  );
}

function NavigationBar({ children }) {
  return (
    <nav className="navie">
      <Logo />
      <div className="navie-children">{children}</div>
    </nav>
  );
}

function Logo() {
  return <h1 className="logo">Crimson Beats</h1>;
}

function NumberResult({ music }) {
  return (
    <p className="num-res">
      Found <strong>{music.length}</strong> results
    </p>
  );
}

function Search({ setMusic }) {
  const [query, setQuery] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const authParameter = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParameter).then(
      (result) =>
        result.json().then((data) => setAccessToken(data.access_token))
    );
  }, []);

  async function search() {
    const trackParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    try {
      const result = await fetch(
        "https://api.spotify.com/v1/search?q=" + query + "&type=track&limit=20",
        trackParameters
      );
      const data = await result.json();
      setMusic(data.tracks.items);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <input
      className="sear"
      type="text"
      placeholder="Search songs..."
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          search();
        }
      }}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function FilterButton({ toggleFilter, isFiltered }) {
  return (
    <button className="fil-butt" onClick={toggleFilter}>
      {isFiltered ? "Show Default Order" : "Sort A-Z"}
    </button>
  );
}

function Music({ music, addToPlaylist }) {
  return (
    <ul className="mus-li">
      {music.map((track, index) => (
        <li key={index} className="mus-item">
          <img
            src={track.album.images[0].url}
            alt={track.name}
            className="alb-img"
          />
          <div className="sng-det">
            <span className="sng-nm">{track.name}</span>
            <span className="artist-nm">
              {track.artists && track.artists.length > 0
                ? track.artists[0].name
                : "Unknown Artist"}
            </span>
          </div>
          <button className="ad-butt" onClick={() => addToPlaylist(track)}>
            🎶
          </button>
        </li>
      ))}
    </ul>
  );
}

function Box({ children, title }) {
  return (
    <div className="box">
      <h2 className="box-title">{title}</h2>
      {children}
    </div>
  );
}

function PlayList({ playlist, removeFromPlaylist }) {
  return (
    <ul className="playlist">
      {playlist.map((music, index) => (
        <li key={index} className="playlist-itm">
          <img
            src={music.album.images[0].url}
            alt={music.name}
            className="playlist-item-img"
          />
          <div className="playlist-item-info">
            <span className="playlist-item-name">{music.name}</span>
            <span className="playlist-item-artist">
              {music.artists && music.artists.length > 0
                ? music.artists[0].name
                : "Unknown Artist"}
            </span>
          </div>
          <button
            className="rmv-btn-plyli-item-btn"
            onClick={() => removeFromPlaylist(index)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}

export default App;