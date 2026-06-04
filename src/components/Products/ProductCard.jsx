import "./ProductCard.css";
import iphone from "../../assets/iphone-14-pro.webp";
import star from "../../assets/white-star.png";
import basket from "../../assets/basket.png";

const ProductCard = () => {
  return (
    <article className="product_card">
      <div className="product_image">
        <a href="prodcut/1">
          <img src={iphone} />
        </a>
      </div>
      <div className="product_details">
        <h3 className="product_price">$999</h3>
        <p className="prodcut_title">iPhone 14 Pro</p>
        <footer className="product_info_footer align_center">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={star} /> 5.0
            </p>
            <p className="product_review_count">120</p>
          </div>
          <button className="add_to_cart">
            <img src={basket} />
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
