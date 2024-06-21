export const getFirstThreeFantasyBooks = async() => {
  try{
    const response = await fetch(`https://openlibrary.org/subjects/fantasy.json`)
    if (!response.ok) throw new Error(`Failed to get fantasy books`)
    
    const resData = await response.json()
    console.log(resData)
    const  part = resData.works.slice(0, 3).map((book) => {
      return {
      title: book.title,
      author: {
        name: book.authors[0].name,
        urlKey: book.authors[0].key
      },
      coverUrl: `https://covers.openlibrary.org/a/id/${book.cover_id}-M.jpg`
      } 
    }) 
    console.log(part)
    return part
  } catch (error) { 
    console.warn(error.message)
    return null
  }
};


export const getAuthor = async(urlKey) => {
  try{
    const response = await fetch(`https://openlibrary.org${urlKey}.json`)
    if (!response.ok) throw new Error(`Failed to get author`)

    const author = await response.json();
    
    const data = {
      birthDate: author.birth_date,
      bio: author.bio,
      wikipediaUrl: author.wikipedia,
      name: author.personal_name,
      pictureUrl: `https://covers.openlibrary.org/a/id/${author.photos[0]}-M.jpg`
    }
    return data
  } catch (error) { 
    console.warn(error.message)
    return null
  }
};

export const createNewUser = async(newUserData) => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  try {
    const response = await fetch(url, {
     method: 'POST',
     body: JSON.stringify(newUserData),
     headers: {
        'Content-Type': 'application/json' }
      });
      if (!response.ok) {
          throw new Error('Failed to create new user');
      }

      const data = await response.json();
      // const newUser = { ...data, id: 11 };
      console.log(data)
      return data;
  } catch (error) { 
    console.warn(error.message)
    return null
  }
}