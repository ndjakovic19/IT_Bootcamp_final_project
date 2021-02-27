import { StyledProduct } from "./styled/StyledProducts";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ product }) => {
  return (
    <>
    <StyledProduct>
        <div className="card">
            <div className="img-container">
                <img src={product.img} alt={`img of ${product.name}`} />
                <span className="store-item-icon">
                    <FaShoppingCart className="cart-icon" />
                </span>
            </div>

            <div className="card-body">
                <h3>{product.name}</h3>
                <span>{product.price}</span>
            </div>
        </div>
    </StyledProduct>
    </>
  );
};
export default Product;
