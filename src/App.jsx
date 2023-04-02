
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'

function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-5xl'>hello from tailwind</h1>
      <PriceList></PriceList>
    </div>
  )
}

export default App
