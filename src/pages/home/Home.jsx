import useAllMedicine from "../../hooks/useAllMedicine";
import CategoryCart from "./homeComponent/CategoryCart";


const Home = () => {
    const [allMedicine] = useAllMedicine()
    console.log(allMedicine)
    const categoryList = [...new Set(allMedicine.map(medicine => medicine.category))]
    console.log(categoryList)

    return (
        <div>
            <h2>This is home page</h2>
            <div className="md:grid grid-cols-3 gap-4">
                {
                    categoryList.slice(0 , 6).map((category, idx) => <CategoryCart
                        key={idx}
                        category={category}
                    ></CategoryCart>)
                }
            </div>
        </div>
    );
};

export default Home;