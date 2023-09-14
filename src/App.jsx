
import './App.css'
import Home from './components/Home/Home'
import  { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
     <h1 className='text-5xl text-black'>Course Registration</h1>

    
    <Home></Home>   
    <Toaster position='top-right'/>

    </>
  )
}

export default App
