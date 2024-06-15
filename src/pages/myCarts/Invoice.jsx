import { usePDF, Document, Page } from '@react-pdf/renderer';
import InvoiceMemo from './InvoiceMemo';
import InvoiceDesplay from './InvoiceDesplay';
import { Helmet } from 'react-helmet-async';
import { FaDownload } from "react-icons/fa6";
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';





const Invoice = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const { data: userBook } = useQuery({
        queryKey: ['userBook', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/booking/${user?.email}`)
            return data;
        }
    })

    const { data: products } = useQuery({
        queryKey: ['products', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/bookingProducts`)
            return data;
        }
    })
    const date = new Date().toLocaleDateString()

    const MyDoc = (
        <Document>
            <Page>
                <InvoiceMemo user={user} userBook={userBook} products={products} date={date}></InvoiceMemo>
            </Page>
        </Document>
    );





    const [instance, updateInstance] = usePDF({ document: MyDoc });

    if (instance.loading) return <div>Loading ...</div>;

    if (instance.error) return <div>Something went wrong: {error}</div>;

    return (
        <>
            <Helmet>
                <title>MediGlam | Invoice</title>
            </Helmet>
            <InvoiceDesplay></InvoiceDesplay>

            <a href={instance.url} download="test.pdf">
                <button className='btn'><FaDownload></FaDownload> Download</button>
            </a>
        </>
    );
};

export default Invoice;
