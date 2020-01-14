const addMovieModal = document.getElementById("add-modal");
//const addMovieModal = document.querySelector('#add-modal');//id name
//const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector("header button");
//const startAddMovieButton = document.querySelector('header').lastElementChild; Only if no more element next to header button

const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
//const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
  if (movies.length == 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewMovie = (id, title, imageURL, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageURL}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const cancelMovieDeletion = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovie = movieId => {
  let index = 0;
  for (const movieEle of movies) {
    if (movieEle.id === movieId) {
      break;
    }
    index++;
  }
  movies.splice(index, 1);
  const listRoot = document.getElementById("movie-list");
  //listRoot.children[index].remove();//Alternatively
  listRoot.removeChild(listRoot.children[index]);
  cancelMovieDeletion();
  updateUI();
};

const deleteMovieHandler = movieId => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeletion = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletion = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletion.replaceWith(confirmDeletion.cloneNode(true));
  confirmDeletion = deleteMovieModal.querySelector(".btn--danger");
  cancelDeletion.removeEventListener("click", cancelMovieDeletion);
  cancelDeletion.addEventListener("click", cancelMovieDeletion);

  confirmDeletion.addEventListener(
    "click",
    deleteMovie.bind(null, movieId)
  );

  
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible"); //if it's the class name is there
  toggleBackdrop();
};

const backdropClickHandler = () => {
  closeMovieModal();
  cancelMovieDeletion();
  clearMovieInput();
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const addMovieHandeler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 || //parseInt()
    +ratingValue > 5
  ) {
    alert("please enter valid number here(rating between 1 and 5)");
    return;
  }

  const newMovie = {
    id: Math.random.toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovie(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandeler);
