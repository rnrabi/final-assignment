import { useLoaderData } from "react-router-dom";


const ShopDetails = () => {
    const singleMedicine = useLoaderData()
    //console.log(singleMedicine)
    return (
        <div>
            <h2>This is shop details page</h2>
        </div>
    );
};

export default ShopDetails;