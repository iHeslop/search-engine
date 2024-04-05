# Google Books API Search Engine DUE: APRIL 15th

## Outline

This project will require you to use both React and Asynchronous programming.
The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

## MVP

Create a page that allows users to search for books
Page should include the following:

- Header section introducing the page
- Form containing a text input and a submit / search button

- A grid of books (use either Flexbox or CSS Grid )
  Instructions:

- When the submit button is clicked you need the request books from the Google books API using the input value as your query string
- The books that you receive should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes
- You should have a services file for requesting the data.

Styling (required):

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
Each component should have its own SCSS file - Your palette should use variables

Application Design (required):

- Always use iterators over loops
- Always parametrize and abstract large pieces of duplicate code.
- Components should be as simple as possible, logic should happen elsewhere.
- Give feedback to the user when no book results can be found for the query.

## Bonus (optional, but highly recommended):

- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.
- HINT: You **may** want to make an additional api request when you open the modal for even more information

## Useful Resources:

- [Google Books API no Auth link](https://developers.google.com/books/docs/v1/using#WorkingVolumes)
- [Using Async Await](https://dmitripavlutin.com/javascript-fetch-async-await/)
- [Using Postman to Test APIs](https://www.blazemeter.com/blog/how-use-postman-test-apis)
- [Download Postman](https://www.postman.com/downloads/)
