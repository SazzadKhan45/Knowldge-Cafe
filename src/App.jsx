import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex gap-4 my-3 px-1'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    
    </>
  )
}

export default App
