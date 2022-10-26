const bookId = document.getElementById('bookId');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const reviewForm = document.getElementById('review-form');

// Helper function that accepts a `review` object, sends a POST request and returns the result
const postBook = (books) =>
  // Fetch accepts a URL and an options object where you can declare the HTTP method, the request body, and any headers.
  fetch('/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(books),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

// Listen for when the form is submitted
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Create a new review object from the input values
  const newBook = {
    id: bookId.value.trim(),
    title: bookTitle.value.trim(),
    author: bookAuthor.value.trim(),
  };

  // Call our postReview method to make a POST request with our `newReview` object.
  postBook(newBook)
    .then((data) => alert(`Review added! Review ID: ${data.body.books_id}`))
    .catch((err) => console.error(err));
});
