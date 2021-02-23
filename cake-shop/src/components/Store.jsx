import { useEffect, useState } from "react"
import { getAllProducts } from "../service"
import Products from "./Products"

const Store = () => {
  const [products, setProducts] = useState([])
  const [inputSearch, setInputSearch] = useState('')
  const [allProducts, setAllProducts] = useState([])
 
  useEffect(() => {
    getAllProducts().then((res) => {
      setAllProducts(res.data);
      setProducts(res.data)
    });


  }, []);

  return (
    <>
      <div>
        <div>
          <h1>Our<span>Store</span></h1>
        </div>
        <div>
          <button onClick={() => {
            let tmp = [...allProducts]
            setProducts(tmp)
            console.log(tmp);
          }}>All</button>

          <button onClick={() => {
            setInputSearch('')
            let tmp = [...allProducts]
            setProducts(tmp.filter(product => product.name.toLowerCase().includes('cake item')))
          }}>CAKES</button>

          <button onClick={() => {
            setInputSearch('')
            let tmp = [...allProducts]
            setProducts(tmp.filter(product => product.name.toLowerCase().includes('cupcake item')))
          }}>CUPCAKES</button>

          <button onClick={() => {
            setInputSearch('')
            let tmp = [...allProducts]
            setProducts(tmp.filter(product => product.name.toLowerCase().includes('sweet item')))
          }} >SWEETS</button>

          <button onClick={() => {
            setInputSearch('')
            let tmp = [...allProducts]
            setProducts(tmp.filter(product => product.name.toLowerCase().includes('dougnut item')))
          }}>DOUGHNUTS</button>

        </div>
        <div>
          <input value={inputSearch} type="search" placeholder="item..." onChange={(e) => { setInputSearch(e.target.value) }} />
        </div>

      </div>

      <Products products={products.filter(product => product.name.toLowerCase().includes(inputSearch.toLowerCase()))} />
    </>
  )
}

export default Store