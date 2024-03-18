import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableItem = () => {
    const data = [
        { name: 'Item 1', price: 10.99 },
        { name: 'Item 2', price: 20.99 },
    ];

    const [tableData, setTableData] = useState(data);

    return (
        <View>
            <View style={styles.row}>
                <Text style={styles.text}>Size</Text>
                <Text style={styles.text}>Stock</Text>
            </View>
            {tableData.map((item, index) => (
                <View key={index} style={styles.row}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>${item.price.toFixed(2)}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    text: {
        border: '1px solid #D2D2D2',
        fontSize: 20,
    },
});

export default TableItem;