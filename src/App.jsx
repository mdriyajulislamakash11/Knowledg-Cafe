import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/bookMarks/Bookmarks'
import Header from './components/header/Header'
import { FcReadingEbook } from 'react-icons/fc'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingBook, setReadingBook] = useState(0);

  const hanleBookark = blog =>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  const handleReadingBook = time => {
    // setReadingBook(readingBook + time)
    const newReadingTime = readingBook + time;
    setReadingBook(newReadingTime)
  }

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleReadingBook = {handleReadingBook} hanleBookark = {hanleBookark}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingBook={readingBook}></Bookmarks>
     </div>
    </>
  )
}

export default App
