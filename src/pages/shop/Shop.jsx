import useAllMedicine from "../../hooks/useAllMedicine";


const Shop = () => {
    const [allMedicine] = useAllMedicine()
    console.log(allMedicine)
    return (
        <div>
            <h2 className="text-center text-2xl font-bold my-6">Our All Medicine</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Chose any</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>antacid</td>
                            <td className="flex gap-9">
                               <button className="btn">select</button>
                               <button className="btn">eye</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Shop;