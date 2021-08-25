import React from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'

const Task = ({ text }) => {
    return (
        <View style={styles.item}>
            <View style={styles.leftItems}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor:"#fff",
        padding:15,
        borderRadius:7,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    leftItems: {
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor:'#FEC400',
        opacity: 0.8,
        borderRadius:5,
        marginRight:15,
    },
    itemText: {
        maxWidth:"80%",
    },
    circular: {
        width: 12,
        height: 12,
        borderColor:'#FEC400',
        borderWidth:2,
        borderRadius:12
    },
})

export default Task
