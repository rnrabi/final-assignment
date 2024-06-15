// import logo from "../../assets/logo.jpg"
import { Text, View } from "@react-pdf/renderer";



const InvoiceMemo = ({ user, userBook, products, date }) => {

    const myProducts = products?.filter(product => product.email === `${user?.email}`)

    const totalPrice = myProducts?.reduce((sum, items) => sum + items.price, 0);


    return (
        <View>
            <View className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
                <Text className="font-bold text-2xl my-4 text-center text-blue-600 flex justify-center items-center gap-4"> <image src="../../assets/logo1.gif" alt="" /><Text>MediGlam</Text></Text>
                <hr className="mb-2" />
                <View className="mb-6">
                    <Text className="text-lg font-bold">Invoice</Text>
                    <View className="text-gray-700">
                        <View>Date: {date} </View>
                        <View>TransactionID: {userBook?.[0]?.transactionId} </View>
                    </View>
                </View>
                <View className="mb-8">
                    <Text className="text-lg font-bold mb-4">Bill To:</Text>
                    <Text className="text-gray-700 mb-2">{user?.displayName}</Text>
                    <Text className="text-gray-700">{user?.email}</Text>
                </View>
                <table className="w-full mb-8">
                    <thead>
                        <tr>
                            <Text className="text-left font-bold text-gray-700">Description</Text>
                            <Text className="text-right font-bold text-gray-700">Amount</Text>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts?.map(product => <tr key={product._id}>
                                <Text className="text-left text-gray-700">{product.name}</Text>
                                <Text className="text-right text-gray-700">{product.price}</Text>
                            </tr>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <Text className="text-left font-bold text-gray-700">Grand Total</Text>
                            <Text className="text-right font-bold text-gray-700">${totalPrice}</Text>
                        </tr>
                    </tfoot>
                </table>
                <Text className="text-gray-700 mb-2">Thank you for purchase!</Text>
            </View>
        </View>
    );
};

export default InvoiceMemo;