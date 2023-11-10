import { useEffect, useState } from 'react';
import './App.css';
import BookCard from "./BookCard"

function App() {

const [search_inp, setSearch_inp] = useState("")
let [raw_info, setRaw_info] = useState([])
let [isbook, setIsbook] = useState(false)
let [isLoader, setIsloader] = useState(false)
let [isFirsttime, setIsFirsttime] = useState(true)



const searchBook = () => {
  setIsloader(true)
  fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${search_inp}&key=AIzaSyDSmJVgapAJj8UCcYZuLVqfjb5A__V4Jz0&maxResults=40`) 
  .then((res) => res.json()) 
.then((data) => {
  setRaw_info(data.items)
  setIsbook(true)
  setIsloader(false)
  setIsFirsttime(false)
})

}

const handleChange = (event) => {
  setSearch_inp(event.target.value);
};

{
  return (
    <div className="App">
      <div className="main">

        <div className="box">
          <div className="header">
            <h1>iBooks - Search & Read any Book</h1>

            <div className="input-group mt-3 container">
              <input onChange={handleChange} type="text" className="form-control" placeholder="Search any book" />
              <button onClick={searchBook} className="btn btn-light" type="button" id="button-addon2">Search</button>
            </div>
          </div>

          <div id="bookslist" className="bookslist d-flex flex-wrap">
            { isLoader ? <img id="loader" src="loader.gif" alt="LOADING..." /> : <></>}
            
          { isbook ? (raw_info?.map((item, index) => (

            
            <BookCard img={item?.volumeInfo?.imageLinks?.thumbnail}
                      title={item?.volumeInfo?.title}
                      subtitle={item?.volumeInfo?.subtitle}
                      author={item?.volumeInfo?.authors[0]}
                      publishedDate={item?.volumeInfo?.publishedDate}
                      booklink={item?.volumeInfo?.infoLink}
                      readlink={item?.volumeInfo?.previewLink}
                      />
      ))):( isFirsttime ? <h1>Search a book & start reading !</h1> : <h1 >Sorry, No Books found ! Try Searching other Books !</h1>) }


          </div>

        </div>

      </div>


    </div>
  );
}

}

export default App;
