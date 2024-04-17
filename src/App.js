// import logo from './logo.svg';
import './App.css';
// import Menu from './Menu.js'
// import Footer from './Footer.js'
// import Navigation from './Navigation.js'
// import Banner from './Banner.js'
// import Card from './Card.js'
// import Loginform from './Loginform.js'
// import Admin from './Admin.js'
import { useState } from "react";

// function App() {
//   return (
//     <div>
//     <Navigation />
//     <Banner />
//     <Menu />
//     <Card />
    
//     <Footer />
    
//     </div>
//   );
// }

const tempMusicData = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];
const tempPlaylist = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist A",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist B",
    genre: "Rock",
  },
  {
    id: 3,
    title: "Song 3",
    artist: "Artist C",
    genre: "Jazz",
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [musics, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  };
  return (
    <div>
      <nav>
        <h1 style={{ textAlign: "center" }}>Music App</h1>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p>
        Found <strong>X</strong> results
      </p>
      </nav>
      <div className="container">
        <div className="container">
          <h2>Music List</h2>

          <ul>
            {musics.map((music) => (
              <li key={music.id}>
                {music.title} by {music.artist} ({music.genre})
                <button>♥️</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="container">
          <h2>Playlist</h2>
          <ul>
            {playlist.map((music) => (
              <li key={music.id}>
                {music.title} by {music.artist}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
//conditional Statements
// export default function App(){
  // let content;
//   const isLoggedin = false;

//   // if(isLoggedin){
//   //   return (<p>Welcome you are logged in as admin</p>);
//   //  } 
   
//   //  else {
//   //    return (<p>please log in!</p>);
//   //  }

//   // return(
//   //   <div>
//   //     function(){}
//   //   </div>
//   // )
   


//   const renderAuthButton = ()=>{
//       if(isLoggedin){
//    return <button>Login</button>;
//   } else {
//     return <button>Logout</button>;
//   }
// }

//   //ternary operator:
//   return <div>
//   {isLoggedin ? <Admin /> :<Loginform/>}
//   {renderAuthButton()}
//   </div>

// // return isLoggedin && <h1>Hello</h1>;

// };
