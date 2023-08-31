
import {useContext} from "react"
import { ProductContext } from "../contexts/ProductContext"
import Product  from "../components/Product"

const Home = () => {
  const { products } = useContext(ProductContext)
  
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  })

  return (
    <div>
      <section className="max-w-6xl mx-auto px-8 pt-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map( product => {
            return <Product product={product} key={product.id} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Home