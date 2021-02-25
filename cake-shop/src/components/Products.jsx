import Product from './Product'
import { StyledProducts} from './styled/StyledProducts'

const Products = ({ products }) => {

    return (
        <>
            <StyledProducts>
                <div className="row">
                {products.map(product => <Product key={product.id} product={product} />)}
                </div>  
            </StyledProducts>
        </>
    )
}
export default Products 
