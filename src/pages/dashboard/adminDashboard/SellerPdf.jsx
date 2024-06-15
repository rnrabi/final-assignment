import { Text, View } from "@react-pdf/renderer";


const SellerPdf = ({ products, totalPriceProducts }) => {
    return (
        <View>
            <View>
                <Text className="text-center text-bold text-2xl my-6">All Seller Report</Text>
                <View className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <Text>No</Text>
                                <Text>Medicine name</Text>
                                <Text>Seller Email</Text>
                                <Text>Buyer Email</Text>
                                <Text>Price</Text>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products?.map((product, idx) => <tr
                                    key={idx}
                                    className="bg-base-200">
                                    <Text>{idx + 1}</Text>
                                    <Text>{product.name}</Text>
                                    <Text>{product.seller?.email}</Text>
                                    <Text>{product.buyer?.email}</Text>
                                    <Text>$ {product.price}</Text>
                                </tr>)
                            }


                        </tbody>
                        <View className="text-2xl font-bold my-5">Total Price : {totalPriceProducts}</View>
                    </table>

                </View>
            </View>
        </View>
    );
};

export default SellerPdf;