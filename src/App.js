import "./App.css"
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import BookBasket from "./screens/BookBasket";
import FavoriteBooksScreen from "./screens/FavoriteBooksScreen";
import BooksWantToRead from "./screens/BooksWantToRead/BooksWantToRead";
import BrowseBooks from "./screens/BrowseBooks.jsx/BrowseBooks";
import Registration from "./screens/Registration/Registration";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Registration />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path='/books' element={<BookBasket />}/>
        <Route path='/mybooks' element={<FavoriteBooksScreen />} />
        <Route path='/bookList' element={<BooksWantToRead />} />
        <Route path='/browsebooks' element={<BrowseBooks />} />
      </Routes>
  

    </div>
  );
}

export default App;
