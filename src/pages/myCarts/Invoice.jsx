import { usePDF, Document, Page } from '@react-pdf/renderer';

const MyDoc = (
    <Document>
        <Page>
            <p>This is download data</p>
        </Page>
    </Document>
);

const Invoice = () => {
    const [instance, updateInstance] = usePDF({ document: MyDoc });

    if (instance.loading) return <div>Loading ...</div>;

    if (instance.error) return <div>Something went wrong: {error}</div>;

    return (
        <a href={instance.url} download="test.pdf">
            <button className='btn'>Download</button>
        </a>
    );
};

export default Invoice;
