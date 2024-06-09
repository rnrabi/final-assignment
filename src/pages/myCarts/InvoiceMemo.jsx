import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        border: '1px solid #e0e0e0',
        borderRadius: 4,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        margin: '10px auto',
        maxWidth: 400,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1e40af',
        margin: '10px 0',
    },
    hr: {
        borderBottom: '1px solid #e0e0e0',
        marginBottom: 10,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    invoiceDetails: {
        fontSize: 12,
        color: '#4a4a4a',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        color: '#4a4a4a',
        marginBottom: 5,
    },
    table: {
        display: 'table',
        width: 'auto',
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableColHeader: {
        width: '50%',
        borderBottom: '1px solid #e0e0e0',
    },
    tableCol: {
        width: '50%',
    },
    tableCellHeader: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#4a4a4a',
        padding: 5,
    },
    tableCell: {
        fontSize: 12,
        color: '#4a4a4a',
        padding: 5,
    },
    footerText: {
        fontSize: 12,
        color: '#4a4a4a',
        marginBottom: 5,
    },
    smallText: {
        fontSize: 10,
        color: '#4a4a4a',
    },
});

const InvoiceMemo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>KRP Services</Text>
            <View style={styles.hr}></View>
            <View style={styles.flexContainer}>
                <Text style={styles.invoiceDetails}>Invoice</Text>
                <View>
                    <Text style={styles.invoiceDetails}>Date: 01/05/2023</Text>
                    <Text style={styles.invoiceDetails}>Invoice #: INV12345</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Bill To:</Text>
                <Text style={styles.text}>John Doe</Text>
                <Text style={styles.text}>123 Main St.</Text>
                <Text style={styles.text}>Anytown, USA 12345</Text>
                <Text style={styles.text}>johndoe@example.com</Text>
            </View>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Description</Text>
                    </View>
                    <View style={styles.tableColHeader}>
                        <Text style={styles.tableCellHeader}>Amount</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Product 1</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>$100.00</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Product 2</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>$50.00</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>Product 3</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCell}>$75.00</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCellHeader}>Total</Text>
                    </View>
                    <View style={styles.tableCol}>
                        <Text style={styles.tableCellHeader}>$225.00</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.footerText}>Thank you for your business!</Text>
            <Text style={styles.smallText}>Please remit payment within 30 days.</Text>
        </View>
    );
};

export default InvoiceMemo;
