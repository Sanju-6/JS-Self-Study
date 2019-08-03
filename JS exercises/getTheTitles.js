const getTheTitles = function(books) {
  const result = books.map(book => book.title);
  return result;
}

module.exports = getTheTitles;
