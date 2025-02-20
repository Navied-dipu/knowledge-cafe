
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
 

  return (
    <>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>

      </div>
     
      
    </>
  )
}

export default App
