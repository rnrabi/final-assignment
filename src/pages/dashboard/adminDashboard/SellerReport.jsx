import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { FaDownload } from "react-icons/fa6";
import { Document, Page, usePDF } from "@react-pdf/renderer";
import SellerPdf from "./SellerPdf";


const SellerReport = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: products } = useQuery({
        queryKey: [user?.email, 'products'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookingProducts`)
            return res.data;
        }
    })
    const totalPriceProducts = products?.reduce((sum, items) => sum + items.price, 0)

    console.log(products)
    // console.log(totalPriceProducts)

    const MyDoc = (
        <Document>
            <Page>
                <SellerPdf products={products} totalPriceProducts={totalPriceProducts}></SellerPdf>
            </Page>
        </Document>
    );





    const [instance] = usePDF({ document: MyDoc });

    if (instance.loading) return <div>Loading ...</div>;

    if (instance.error) return <div>Something went wrong: {}</div>;


    return (
        <div>
            <Helmet>
                <title>Dashboard | SellerReport</title>
            </Helmet>
            <h2 className="text-center text-bold text-2xl my-6">All Seller Report</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Medicine name</th>
                            <th>Seller Email</th>
                            <th>Buyer Email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, idx) => <tr
                                key={idx}
                                className="bg-base-200">
                                <td>{idx + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.seller?.email}</td>
                                <td>{product.buyer?.email}</td>
                                <td>$ {product.price}</td>
                            </tr>)
                        }


                    </tbody>
                    <div className="text-2xl font-bold my-5">Total Price : {totalPriceProducts}</div>
                </table>
                <a href={instance.url} download="seller.pdf">
                    <button className='btn'><FaDownload></FaDownload> Download</button>
                </a>
            </div>
        </div>
    );
};

export default SellerReport;