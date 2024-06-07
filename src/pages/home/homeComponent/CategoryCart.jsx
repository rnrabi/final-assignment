import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import useSpecificCategory from "../../../hooks/useSpecificCategory";


const CategoryCart = ({ category , images}) => {
    const [specificCategory] = useSpecificCategory(category)
    console.log(specificCategory)
    console.log(images)
    
    return (
        <div>
            <Link to={`/${category}`}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={images[0]} alt="Shoes" className="rounded-xl w-96 h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{category}</h2>
                        <p>Number of Medicine :{specificCategory?.length} pis</p>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCart;

CategoryCart.propTypes = {
    category: PropTypes.node.isRequired,
    images: PropTypes.node.isRequired
}