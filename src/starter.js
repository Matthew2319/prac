const data = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    duration: 142, // in minutes
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Crime",
    releaseYear: 1972,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"],
    duration: 175, // in minutes
  },
  {
    id: 3,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page",
      "Tom Hardy",
    ],
    duration: 148, // in minutes
  },
  {
    id: 4,
    title: "Pulp Fiction",
    genre: "Crime",
    releaseYear: 1994,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis"],
    duration: 154, // in minutes
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Maggie Gyllenhaal",
    ],
    duration: 152, // in minutes
  },
  // New Movie Objects
  {
    id: 6,
    title: "Forrest Gump",
    genre: "Drama",
    releaseYear: 1994,
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
    duration: 142, // in minutes
  },
  {
    id: 7,
    title: "The Matrix",
    genre: "Sci-Fi",
    releaseYear: 1999,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    director: "The Wachowskis",
    cast: [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving",
    ],
    duration: 136, // in minutes
  },
  {
    id: 8,
    title: "Schindler's List",
    genre: "Biography",
    releaseYear: 1993,
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Embeth Davidtz"],
    duration: 195, // in minutes
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Adventure",
    releaseYear: 2001,
    description:
      "A young hobbit, Frodo Baggins, embarks on a perilous journey to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen", "Sean Astin"],
    duration: 178, // in minutes
  },
  {
    id: 10,
    title: "Inglourious Basterds",
    genre: "Adventure",
    releaseYear: 2009,
    description:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    director: "Quentin Tarantino",
    cast: [
      "Brad Pitt",
      "Diane Kruger",
      "Christoph Waltz",
      "Michael Fassbender",
    ],
    duration: 153, // in minutes
  },
];

function getMovies(){
  return data;
}

function getMovie(id){
return data.find((n) => n.id ===id);  
}

// const movies = getMovies();
// console.log(movies);

// const movie = getMovie(4);
// const {title, genre, description} =movie;
// console.log(title, genre, description);

// const movie = getMovie(5);
// const {title, genre, duration, cast} =movie;
// console.log(title, genre, duration, cast);

// const movie = getMovie(3);
// const {title, genre, duration, cast} =movie;
// console.log(title, genre, duration, cast);
// const castUpdate = [...cast, "Gab Montano"];
// console.log(castUpdate)

// const movie = getMovie(6);
// const {title, genre, duration, cast} =movie;
// console.log(title, genre, duration, cast);
// const addLanguage = [...'English'];
// console.log(addLanguage)

// const {...movie, language: [" English", "Tagalog"]}
// console.log(update); ...

// const toCaps = (fname, surname) =>{
//   const name = fname+" "+ surname; 
//   return name.toUpperCase()
// };
// console.log(toCaps("gab", "montano"));

//convert this function into arrow function
// function toCaps(fname, surname){
//   const name = fname + surname ;
//   return name.toUpperCase();
// }
// console.log(toCaps("gab"," Montano"));
