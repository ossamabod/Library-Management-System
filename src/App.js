

import { Flex, Text, IconButton } from '@chakra-ui/react'
import Content from './components/Content';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ouvrage from './components/Ouvrage';
import SearchLivre from './components/livres/SearchLivre';


function App() {
  const booksData = [
    { bookName: 'The Great Gatsby', authorName: 'F. Scott Fitzgerald' },
    { bookName: '1984', authorName: 'George Orwell' },
    { bookName: 'To Kill a Mockingbird', authorName: 'Harper Lee' },
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
