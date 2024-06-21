export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML = "";

  books.forEach((book)=> {
    const buttonElem = document.createElement("button")
    const liElem = document.createElement("li")
    const pElement = document.createElement("p")
    const imgElem = document.createElement("img")

    imgElem.src = `${book.coverUrl}`
    imgElem.alt = `An old cover of ${book.title}`
    pElement.textContent = `Title: ${book.title}`
    buttonElem.textContent = `View ${book.author.name}`
    buttonElem.setAttribute('data-author-url-key', `${book.author.urlKey}`)
    buttonElem.dataset.authorUrlKey = book.author.urlKey

    liElem.append(imgElem, pElement, buttonElem)
    bookListEl.append(liElem)
  })
}

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = "";

    const h2Elem = document.createElement("h2")
    const pElement = document.createElement("p")
    const bioPElement = document.createElement("p")
    const imgElem = document.createElement("img")
    const aElem = document.createElement("a")

    h2Elem.textContent =  `${author.name}`
    imgElem.src = `${author.pictureUrl}`
    imgElem.alt = `A picture of ${author.name}`
    pElement.textContent = `Born: ${author.birthDate}`
    bioPElement.textContent = `${author.bio}`
    aElem.href = `${author.wikipediaUrl}`
    aElem.textContent = "Wikipedia Link"

    authorInfoEl.append(h2Elem, imgElem, pElement, bioPElement, aElem)
  }

export const renderNewUserForm = (newUserFormEl) => {

//   const lab1 = document.createElement("label")
//   const inpu1 = document.createElement("input")
//   const lab2 = document.createElement("label")
//   const inpu2 = document.createElement("input")
//   const lab3 = document.createElement("label")
//   const selElem = document.createElement("select")
//   const buttonElem = document.createElement("button")

//   lab1.for =  `Username`
//   inpu1.type = 'text'
//   inpu1.id = `username`
//   inpu1.name = `username`
//   lab2.textContent = `Is this user cool?`
//   inpu2.id = 'checkbox'
//   inpu2.id = `is-cool`
//   inpu2.name = `isCool`
//   lab3.textContent = `Favorite Language`
//   selElem.id = `favorite-language`
//   selElem.name = `favoriteLanguage`
//   buttonElem.textContent = "Create User"

//   const options = [
//     { text: 'None', value: '' },
//     { text: 'JavaScript', value: 'javascript' },
//     { text: 'Python', value: 'python' },
//     { text: 'Ruby', value: 'ruby' }
// ];

// options.forEach(option => {
//     const optionElement = document.createElement('option');
//     optionElement.textContent = option.text;
//     optionElement.value = option.value;
//     selElem.append(optionElement);
  newUserFormEl.innerHTML = `
    <label for="username">Username</label>
    <input type="text" id="username" name="username">
    
    <label for="is-cool">Is this user cool?</label>
    <input type="checkbox" id="is-cool" name="isCool">
    
    <label for="favorite-language">Favorite Language</label>
    <select id="favorite-language" name="favoriteLanguage">
        <option value="None">None</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Ruby">Ruby</option>
    </select>
    
    <button type="submit">Create User</button>
`;
};

// newUserFormEl.append(lab1, inpu1, lab2, inpu2, lab3, selElem, buttonElem)


export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.innerHTML = "";

    const h2Elem = document.createElement("h2")
    const pElement = document.createElement("p")
    const p2Element = document.createElement("p")
    const ook = newUser.isCool === true ? "The hippest in the house!" : "A real square."

    h2Elem.textContent =  `${newUser.username}`
    h2Elem.setAttribute('data-user-id', `${newUser.id}`)
    h2Elem.dataset.userId = newUser.id
    pElement.textContent = `${ook}`
    p2Element.textContent = `Favorite Language: ${newUser.favoriteLanguage}`

    newUserEl.append(h2Elem, pElement, p2Element)
  }
