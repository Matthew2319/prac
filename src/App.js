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

function NavigationBar({children}){
  return(
    <nav className="container">
    {/* <Logo />
    <Search />
    <NumResult music={music}/> */}

    <Logo />
    <Search />
    {children}
    </nav>
    
  )
}

function Main({music}){
  // const [query, setQuery] = useState("");
  
 return(
  <div className="container">
  {/* <MusicListBox music={music}/>
  <PlaylistBox /> */}
  <Box title = {"Music List"}>
    <Music music={music} />
  </Box>
  <Box title = {"Playlist"}>
    <Playlist music={music}/>
  </Box>
</div>
  )
}

//Main Components
// function MusicListBox ({music}){
//   return( 
//   <div className="container">
//   <h2>Music List</h2>
//   <Music music={music}/>
// </div>
//   )
// }

function Music({music}){
  

return(
<ul>
    {music.map((music) => (
      <li key={music.id}>
        {music.title} by {music.artist} ({music.genre})
        <button>♥️</button>
      </li>
    ))}
  </ul>
  )
}

// function PlaylistBox(){


//     return(
//       <div className="container">
//       <h2>Playlist</h2>
//       <Playlist />
//       </div>
//     )
// }

function Playlist(){
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  };

  return(
   
  <ul>
    {playlist.map((music) => (
      <li key={music.id}>
        {music.title} by {music.artist}
      </li>
    ))}
  </ul>
  )
}

//NavBar Components
function Search(){
  const [query, setQuery] = useState("");
  return(
    <input className="search"
      type="text"
      placeholder="Search music..."
      value={query}
      onChange={(e)=> setQuery(e.target.value)} />
  )
}

function Logo(){
  return <h1 style={{textAlign:"center"}}>Music App</h1>
}

function NumResult({music}){
  return <p>
  Found <strong>{music.length}</strong> results
</p>
}

function Box({children}){
  return<div className="container">
  <h2>Music List</h2>
  {children}
</div>
}

//not reuseable
// function Modal({children}){
// return <div>Message: {children}</div>;
// }

// function Success(){
//   return(
//   <p>Congratumalations</p>
//   )
// }

// function Error(){
//   return <p>Sorry</p>
// }


function App() {
  const [music, setMusic] = useState(tempMusicData);

  return (
    <div>
    {/* <Modal>
      <Success />
    </Modal> */}
      <NavigationBar>
        <NumResult music={music} />
      </NavigationBar>
      <Main music={music}/>
{/* 
  
      {/* <nav>
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
      </nav> */}
     
    </div>
  );
}

export default App;
//stateful components
//stateless components
//structured components


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
