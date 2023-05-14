'use strict';

// Step 1
fetch('https://api.tvmaze.com/search/shows?q=breaking').
    then((response) => response.json()).
    then((data) => console.log(data));

// Step 2

const mainDivElem = document.querySelector('#shows');

async function fnc() {
  const response = await fetch(
      'https://api.tvmaze.com/singlesearch/shows?q=breaking');
  const data = await response.json();

    const divElement = document.createElement('div');
    divElement.classList.add('show');

    const nameElement = document.createElement('h2');
    nameElement.textContent = data.name;

    const linkElement = document.createElement('a');
    linkElement.href = data.url;
    linkElement.target = '_blank';

    const imgElement = document.createElement('img');
    imgElement.src = data.image.medium;

    const summaryElement = document.createElement('p');
    summaryElement.innerHTML = data.summary;

    divElement.append(nameElement, linkElement, imgElement, summaryElement);
    mainDivElem.append(divElement);
}

//fnc();


// Step 3

async function fnc2() {
  // For testing no cover img.
  /*const response = await fetch(
      'https://api.tvmaze.com/search/shows?q=rick%20and%20morty:%20the%20anime');
   */
  const response = await fetch(
      'https://api.tvmaze.com/search/shows?q=breaking');
  const data = await response.json();

  data.forEach(result => {
    const {show} = result;

    const divElement = document.createElement('div');
    divElement.classList.add('show');

    const nameElement = document.createElement('h2');
    nameElement.textContent = show.name;

    const linkElement = document.createElement('a');
    linkElement.href = show.url;
    linkElement.target = '_blank';

    const imgElement = document.createElement('img');
    imgElement.src = show.image?.medium ??
        'https://via.placeholder.com/100x200?text=text+here';

    const summaryElement = document.createElement('p');
    summaryElement.innerHTML = show.summary;

    const genreElement = document.createElement('div');
    const gen = document.createElement('p');
    gen.classList.add('genres');
    let genres = 'Genres: ';
    for (let i = 0; i < 1; i++) {
      show.genres.forEach(genre => {

        genres += genre + ' | ';
      });
      genres = genres.slice(0, -2);
      gen.innerText = genres;
    }
    genreElement.append(gen);

    divElement.append(nameElement, linkElement, imgElement, summaryElement,
        genreElement);
    mainDivElem.append(divElement);
  });
}

fnc2();
