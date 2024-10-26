

import { Flex, Text, IconButton } from '@chakra-ui/react'
import Content from './components/Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ouvrage from './components/Ouvrage';
import SearchLivre from './components/livres/SearchLivre';


function App() {
  const booksData = [
    {id:1, bookName: 'The Great Gatsby', authorName: 'F. Scott Fitzgerald', editionDate: '1925-04-10', type: 'ouvrage' ,loanStatus:false},
    {id:2, bookName: '1984', authorName: 'George Orwell', editionDate: '1949-06-08', type: 'ouvrage',loanStatus:true },
    { id:3,bookName: 'To Kill a Mockingbird', authorName: 'Harper Lee', editionDate: '1960-07-11', type: 'ouvrage' ,loanStatus:true},
    {id:4 ,bookName: 'Moby Dick', authorName: 'Herman Melville', editionDate: '1851-11-14', type: 'ouvrage',loanStatus:false },
    {id:5, bookName: 'Pride and Prejudice', authorName: 'Jane Austen', editionDate: '1813-01-28', type: 'ouvrage',loanStatus:true },
    { id:6,bookName: 'War and Peace', authorName: 'Leo Tolstoy', editionDate: '1869-01-01', type: 'ouvrage',loanStatus:false },
    { id:7,bookName: 'The Catcher in the Rye', authorName: 'J.D. Salinger', editionDate: '1951-07-16', type: 'mf',loanStatus:true },
    {id:8, bookName: 'Brave New World', authorName: 'Aldous Huxley', editionDate: '1932-08-18', type: 'ouvrage',loanStatus:false },
    {id:9, bookName: 'Crime and Punishment', authorName: 'Fyodor Dostoevsky', editionDate: '1866-01-01', type: 'ouvrage',loanStatus:false },
    {id:10, bookName: 'The Hobbit', authorName: 'J.R.R. Tolkien', editionDate: '1937-09-21', type: 'mf',loanStatus:true },
    { id:11,bookName: 'The Brothers Karamazov', authorName: 'Fyodor Dostoevsky', editionDate: '1880-01-01', type: 'ouvrage',loanStatus:false },
    { id:12,bookName: 'The Odyssey', authorName: 'Homer', editionDate: '800-01-01', type: 'ouvrage',loanStatus:false },
    { id:13,bookName: 'Ulysses', authorName: 'James Joyce', editionDate: '1922-02-02', type: 'mf' ,loanStatus:true},
    {id:14, bookName: 'Madame Bovary', authorName: 'Gustave Flaubert', editionDate: '1856-04-15', type: 'ouvrage' ,loanStatus:true},
    {id:16, bookName: 'Don Quixote', authorName: 'Miguel de Cervantes', editionDate: '1605-01-16', type: 'ouvrage',loanStatus:false },
    {id:17, bookName: 'Frankenstein', authorName: 'Mary Shelley', editionDate: '1818-01-01', type: 'mf' },
    {id:18, bookName: 'The Divine Comedy', authorName: 'Dante Alighieri', editionDate: '1320-01-01', type: 'ouvrage',loanStatus:true },
    {id:19, bookName: 'Jane Eyre', authorName: 'Charlotte Bronte', editionDate: '1847-10-16', type: 'mf',loanStatus:true },
    {id:20, bookName: 'Wuthering Heights', authorName: 'Emily Bronte', editionDate: '1847-12-01', type: 'ouvrage',loanStatus:false }
];

  return (
    <>
    <Router>
     
      <Content></Content>   
          <Routes>         
              
              <Route path="/ouvrage" element={<Ouvrage/>}/>
              <Route path='/Search' element={<SearchLivre data={booksData}/>}/>
             
                      
       
          </Routes>         
        
      </Router>
   
    </>
     
 
  );
}

export default App;
