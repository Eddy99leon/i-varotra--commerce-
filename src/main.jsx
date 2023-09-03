import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './contexts/ProductContext.jsx'
import SidebarProvider from './contexts/SidebarContext.jsx'
import CartProvider from './contexts/CartContext.jsx'
import NotifProvider from './contexts/NotifContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NotifProvider>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <BrowserRouter basename='/'>
            <App />
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </NotifProvider>
  
)
