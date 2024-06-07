import useAllMedicine from "../../hooks/useAllMedicine";
import CategoryCart from "./homeComponent/CategoryCart";
import Slider from "./homeComponent/Slider";


const Home = () => {
    const [allMedicine] = useAllMedicine()
    console.log(allMedicine)
    const categoryList = [...new Set(allMedicine.map(medicine => medicine.category))]
    console.log(categoryList)

    return (
        <div>
            <h2>This is home page</h2>
            {/* slider section */}
            <div className="w-full md:w-11/12 mx-auto">
                <Slider></Slider>
            </div>


            <div>
                <h2 className="text-center text-2xl font-bold mt-12">Our Categories</h2>
                <div className="md:grid grid-cols-3 gap-4">
                    {
                        categoryList.slice(0, 6).map((category, idx) => {
                            const specificCategory = allMedicine.filter(medicine => medicine.category === category);
                            const images = specificCategory.map(medicine => medicine.image);
                            // console.log(images)

                            return <CategoryCart
                                key={idx}
                                images={images}
                                category={category}
                            ></CategoryCart>

                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;