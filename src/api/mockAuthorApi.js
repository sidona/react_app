/**
 * Created by sdonose on 03.04.2017.
 */
import delay from './delay';


const authors=[
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen'
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin'
  }
];

const generateId=(author)=>{
  return author.firstName.toLowerCase()+'-'+author.lastName.toLowerCase();
};

class AuthorApi{
  static getAllAuthors(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(Object.assign([],authors));
      },delay);
    });
  }

  static deleteAuthor(authorId){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        const indexOfAuthorToDelete=authors.findIndex(author=>{
          author.id===authorId;
        });
        authors.splice(indexOfAuthorToDelete,1);
        resolve();
      },delay);
    });
  }
}

export default AuthorApi;
