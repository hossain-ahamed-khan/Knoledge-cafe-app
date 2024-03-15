
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <div className='w-5/6 mx-auto'>
        <Header></Header>
        <Blogs></Blogs>
      </div>
    </>
  )
}

export default App
