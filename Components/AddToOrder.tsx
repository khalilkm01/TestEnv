import { Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import {useState} from 'react'

const AddToOrder = (id: string) => {
    const [count,setCount] = useState(0);
    
    return (
        <View style={styles.root}>
            <View style={styles.main}>
                <Pressable style={styles.btn} onPress={() =>setCount(Math.max(0,count-1))}>
                    <Text style={styles.txt}>-</Text>
                </Pressable>
                <View style={styles.textContainer}>
                    <Text style= {styles.count}>{count}</Text>
                </View>
                <Pressable style={styles.btn} onPress={() => setCount(count+1)}>
                    <Text style={styles.txt}>+</Text>
                </Pressable>
            </View>
            <View style= {styles.order}>
                <Pressable>
                    <Text style= {styles.txt}>
                        x
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default AddToOrder;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        flex: 1,
        marginLeft: 35
    },
    main: {
        flexDirection: 'row',
        height: 50,
        width: 270,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        margin: 5,
        flex: 2,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#02ccf0',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flex: 1,
        fontSize: 18,
        padding: 5,
        alignItems: 'center'
    },
    
    txt: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    count:{
        fontSize: 18,
        fontWeight: '600'
    },
    order: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#02ccf0',
        borderRadius: 5,
        margin: 10
    }
})
