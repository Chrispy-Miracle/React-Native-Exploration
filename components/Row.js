import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        padding: 20
    },
    flexRow: {
        flexDirection: 'row',
        padding: 7,
    },
    text: {
        fontSize: 16
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

const Row = props => (
    <View style={styles.flexRow}>
        <Text style={styles.nameText}>{props.name}  </Text>
        <Text style={styles.text}>  {props.phone}</Text>
    </View>
)

export default Row;