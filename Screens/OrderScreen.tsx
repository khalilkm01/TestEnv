import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const OrderScreen = ({navigation}: any) => {



    return (
        <View style={styles.root}>
            
            <View style = {styles.body}>
                <View style={styles.orderList}>
                    
                </View>
            </View>
            <TouchableOpacity style = {styles.footer} onPress={()=>navigation.replace('Menu')}>
                <Text style={styles.footerText}>Back to Menu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrderScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white'
    },
    body: {
        flex: 11,
        backgroundColor: 'blue'
    },
    orderList: {
        flex: 1,
        margin: 50,
        backgroundColor: 'green'
    },
    footer: {
        flex: 1,
        backgroundColor: '#02ccf0',
        justifyContent: 'center'
    },
    footerText: {
        textAlign: 'center',
        fontSize: 18,
    }
})
