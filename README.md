# Google Books API Search Engine

**Live Demo:** https://google-books-se.onrender.com/

## Snippets

- A view of the landing page

  ![alt text](<screenshots/Screenshot 2024-05-15 144131.png>)

- An example of a search term and results

  ![alt text](<screenshots/Screenshot 2024-05-15 144735.png>)

- Example of a book modal displaying book information

  ![alt text](<screenshots/Screenshot 2024-05-15 144753.png>)

---

## Description / Requirements

The Google Books Search Engine is a comprehensive book search application to look for and discover books from within the Google Books Library. This project uses React to provide and create an efficient and aesthetic application for every day use.

With this project, the plan was to practice and implement how to:

- Use of React and Asynchronous programming
- Display of search results with pagination
- Use of a modal for a specific book and information.
- Fetch data smoothly and efficiently, and display on the front end.
- Style efficiently and well, with good overall UI/UX design..

This project will require you to use both React and Asynchronous programming.
The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

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

Styling:

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
Each component should have its own SCSS file - Your palette should use variables

Application Design:

- Always use iterators over loops
- Always parametrize and abstract large pieces of duplicate code.
- Components should be as simple as possible, logic should happen elsewhere.
- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

---

## Build Steps

Clone the repository, and from the directory, run the following commands:

```
npm install
```

```
npm run dev
```

---

## Design Goals / Approach

- The goal of this project was to create an efficient Google Books API search engine, which efficiently asynchronously searches for books and displays them.
- Emphasis on UI/UX design, with simple, smooth and efficient styling.
- Book modals to be seamless and separate calls to the API, so as to not overload on initial search call.
- Include pagination to correctly paginate search results.

---

## Features

- **Search Functionality:** Ability to search for and instantly retrieve information from the Google Books API.
- **Book Gallery Display:** Displays book information clearly and effortlessly, with included pagination to make searching effortless.
- **Book Information:** Detailed book information provided upon selection of a book, including description, published date, publishers, authors and more.
- **Mobile Responsive:** The application is mobile responsive, so it can be used anytime and anywhere.
- **Fetch Functionality:** Full implementation of Get Request functionality provided by the google books API to get book information.
- **Error Handling:** Error handling to provide the user with feedback.

---

### Technologies:

- **React**
- **JavaScript**
- **SCSS**
- **HTML**

---

## Known Issues

- Sometimes the API provides different images depending on the API call, so trying to maintain consistency between the search results and modal was difficult.
- Some images from the API are at a low resolution, which isn't appealing visually.

---

## Future Goals

- Add ability to save books to a personal library or wishlist.
- Filter search results (author, title, year, publisher etc).
- Potential updating of overall styling choices.

---

## Struggles

- Descriptions from the API were transferred as HTML elements rather than as plain text, so they had to be parsed into plain text and displayed in the modal with the correct styling.

---
