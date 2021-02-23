import Product from './Product'
import { Container } from './styled/StyledStore'

const Products = ({ products }) => {

    return (
        <>
            <Container>
                {products.map(product => <Product key={product.id} product={product} />)}
            </Container>
        </>
    )
}
export default Products 
