import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  renderNewUserForm(newUserFormEl);

  // Fetch the books!
  const books =  await getFirstThreeFantasyBooks()

  // render out the books
  renderBookList(bookListEl, books)


  bookListEl.addEventListener('click', async(e) => {
    const bClick = e.target
    // try{
    if(bClick.tagName === 'BUTTON' && bClick.hasAttribute('data-author-url-key')) {
      const urlKey = bClick.getAttribute('data-author-url-key');
      const author = await getAuthor(urlKey)
      return renderAuthorInfo(authorInfoEl, author) 
    }
  })

  newUserFormEl.addEventListener('submit', async(event) => {
    event.preventDefault()
    const formData = new FormData(newUserFormEl);
    
    const isCooli = formData.get('isCool') === 'on';

    const userData = {
        username: formData.get('username'),
        isCool: isCooli,
        favoriteLanguage: formData.get('favoriteLanguage')
    };
    /*
    FEEDBACK:
    Nice way to get the values in an object! Another way is to use Object.fromEntries(formData).
    This will take the form data and return an object of it! 
    */

  
    console.log(formData);
    console.log(userData);

    try {
        const newUser = await createNewUser(userData);
        renderNewUser(newUserEl, newUser); 

        newUserFormEl.reset;
    } catch (error) {
        console.error('Failed to create new user:', error);
    }
  });
}

