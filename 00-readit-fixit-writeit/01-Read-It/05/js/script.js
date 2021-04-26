const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,
];
// Wrapping movies with the list tag //
const wrapMovieTitleWithListTag = (movieTitle, liTag) => {
  return `<${liTag}>${movieTitle}</${liTag}>`;
};

const parseTitle = title => {
  const lowerTitle = title.toLowerCase();
  const wrapped = wrapMovieTitleWithListTag(lowerTitle, `li`);
  document.write(wrapped);
};

document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);
