import { WrapperProduct, ImgProduct } from "./styled/StyledStore"

const Product =({product})=>{

    return(
        <>
        <WrapperProduct>
            <ImgProduct src={product.img} alt={`img of ${product.name}`}/>
            <p>{product.name}<span>{product.price}</span></p>

        </WrapperProduct>
        
        </>
    )
}
 export default Product