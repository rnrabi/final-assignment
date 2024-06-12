import { usePDF, Document, Page, Text } from '@react-pdf/renderer';
import InvoiceMemo from './InvoiceMemo';
import InvoiceDesplay from './InvoiceDesplay';
import { Helmet } from 'react-helmet-async';



const MyDoc = (
    <Document>
        <Page>
            <InvoiceMemo></InvoiceMemo>
        </Page>
    </Document>
);

const Invoice = () => {
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
                <button className='btn'>Download</button>
            </a>
        </>
    );
};

export default Invoice;
