/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concatenaStringhe(str1, str2) {
  const firstTwoCharacters = str1.substring(0, 2);
  const lastThreeCharacters = str2.substring(str2.length - 3);
  const result = firstTwoCharacters + lastThreeCharacters;
  const stringaMaiuscola = result.toUpperCase();

  console.log(stringaMaiuscola); // stringa maiuscola in console
}

const stringOne = "Finisco-la-peperonata-e";
const stringTwo = "scendo";

concatenaStringhe(stringOne, stringTwo);
console.log(stringOne);
console.log(stringTwo);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function ArrayCasuale() {
  const arrayCasual = [];

  for (let i = 0; i < 10; i++) {
    const casualNumber = Math.floor(Math.random() * 101);
    arrayCasual.push(casualNumber);
  }
  return arrayCasual;
}

const arrayDiNumeriRandom = ArrayCasuale();
console.log(arrayDiNumeriRandom);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

function trovaValoriPari(arr) {
  const valoriPari = arr.filter(function (number) {
    return number % 2 === 0;
  });
  return valoriPari;
}

/*const NumberArray = [3, 7, 12, 5, 18, 24, 9, 10];
const valoriPari = trovaPari(NumberArray);
console.log(valoriPari);*/

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaArray(arr) {
  let sum = 0;

  arr.forEach(function (number) {
    sum += number;
  });

  return sum;
}

const array5 = [8, 28, 48, 88];
const sumResult = sommaArray(array5);
console.log("La somma degli elementi dell'array è:", sumResult);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sumArrayyy(arr) {
  const sum = arr.reduce(function (sumSun, number) {
    return sumSun + number;
  }, 0);

  return sum;
}

const array88 = [8, 28, 48, 88];
const sumResult2 = sumArrayyy(array88);
console.log("La somma degli elementi dell'array è:", sumResult2);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function incrementaDiN(array, n) {
  const IncrementArray = array.map(function (number) {
    return number + n;
  });
  return IncrementArray;
}

const array98 = [10, 20, 40, 80];
const n = 25;
const IncrementArray = incrementaDiN(array98, n);
console.log("Array incrementato:", IncrementArray);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function lunghezzeStringhe(strArrs) {
  const lunghezze = strArrs.map(function (string) {
    return string.length;
  });
  return lunghezze;
}

const arrayDiStringhe = ["EPICODE", "is", "great"];
const lunghezze = lunghezzeStringhe(arrayDiStringhe);
console.log("Lunghezze delle stringhe: ", lunghezze);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function valoriDispari() {
  const arrayDispari = [];

  for (let i = 1; i <= 99; i += 2) {
    arrayDispari.push(i);
  }

  return arrayDispari;
}

const arrayDispari = valoriDispari();
console.log(arrayDispari);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
    Scrivi una funzione per trovare il film più vecchio nell'array fornito.
  */

function trovaFilmPiuVecchio(films) {
  let filmPiuVecchio = films[0];

  films.forEach(function (film) {
    if (parseInt(film.Year) < parseInt(filmPiuVecchio.Year)) {
      filmPiuVecchio = film;
    }
  });

  return filmPiuVecchio;
}

const filmPiuVecchio = trovaFilmPiuVecchio(movies);
console.log("Il film più vecchio è:", filmPiuVecchio);

/* ESERCIZIO 10
    Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
  */

function numeroDiFilm(films) {
  return films.length;
}

const numeroFilm = numeroDiFilm(movies);
console.log("Il numero totale di film è:", numeroFilm);

/* ESERCIZIO 11 (map)
    Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
  */

function estraiTitoli(films) {
  const titols = films.map(function (film) {
    return film.Title;
  });

  return titols;
}

const titolsDeiFilmesssss = estraiTitoli(movies);
console.log("I titoli dei film sono:", titolsDeiFilmesssss);

/* ESERCIZIO 12 (filter)
    Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
  */

// NON MI ESCE GIUSTO

/* ESERCIZIO 13 (reduce)
    Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
  */

function sommaAnniDiProduzione(films) {
  const YearsSum = films.reduce(function (sumSun, film) {
    return sumSun + parseInt(film.Year);
  }, 0);

  return YearsSum;
}

const sommaAnniProduzione = sommaAnniDiProduzione(movies);
console.log(
  "La somma degli anni di produzione dei film è:",
  sommaAnniProduzione
);

/* ESERCIZIO 14 (find)
    Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
  */

/* function FindID(films, imdbID) {
        const filmfindatp = films.find(function(film) {
          return film.imdbID === imdbID;
        });
      
        return filmfindatp;
      }*/
// NON MI ESCE GIUSTO

/* ESERCIZIO 15 (findIndex)
    Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
  */
