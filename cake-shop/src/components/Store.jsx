import { useEffect, useState } from "react"
import { getAllProducts } from "../service"
import Products from "./Products"
import { StyledStore } from './styled/StyledStore'
import { FaSearch } from "react-icons/fa";
const Store = () => {
    const [products, setProducts] = useState([])
    const [inputSearch, setInputSearch] = useState('')
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        getAllProducts().then((res) => {
            setAllProducts(res.data);
            setProducts(res.data)
            console.log(res)
        });


    }, []);

    return (
        <>
            <StyledStore>
                <div className="title-holder">
                    <h1>Our<span> Store</span></h1>
                </div>
                <div className="button-holder">
                    <button onClick={() => {
                        let tmp = [...allProducts]
                        setProducts(tmp)
                        console.log(tmp);
                    }}>All</button>

                    <button onClick={() => {
                        setInputSearch('')
                        let tmp = [...allProducts]
                        setProducts(tmp.filter(product => product.name.toLowerCase().startsWith('cake item')))
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
                    }}>SWEETS</button>

                    <button onClick={() => {
                        setInputSearch('')
                        let tmp = [...allProducts]
                        setProducts(tmp.filter(product => product.name.toLowerCase().includes('dougnut item')))
                    }}>DOUGHNUTS</button>
                </div>
                <div className="wrap">
                    <div className="search">
                        <span className="searchButton">
                            <FaSearch />
                        </span>
                        <input className="searchTerm" value={inputSearch} type="search" placeholder="item..." onChange={(e) => { setInputSearch(e.target.value) }} />
                    </div>
                </div>

                <Products products={products.filter(product => product.name.toLowerCase().includes(inputSearch.toLowerCase()))} />
            </StyledStore>
        </>
    )
}

export default Store