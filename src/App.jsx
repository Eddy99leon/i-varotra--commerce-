import { Routes , Route  } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Notif from './components/Notif'


function App() {
  return (
    <div>
      <Notif />
      <Navbar />
      <Routes>
        <Route path='/i-varotra--commerce-/' element={<Home/>} />
        <Route path='/i-varotra--commerce-/product/:id' element={<ProductDetails />} />
      </Routes>
      <Sidebar/>
      <Footer/>
    </div>
  )
}

export default App
