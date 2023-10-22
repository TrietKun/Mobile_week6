import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ProductDetailComponent(props) {
    const {option} = props
  return (
    <TouchableOpacity style={styles.container}>
        <Image source={option.img} style={{height: 90, width:155}}/>
        <Text style={{fontSize: 12, fontWeight: 400, width:111}}>Cáp chuyển từ Cổng USB sang PS2...</Text>
        <View style={styles.reviewWrapper}>
                <View style={styles.starWrapper}>
                    <Image style={styles.starImg} source={require('../assets/star.png')} />
                    <Image style={styles.starImg} source={require('../assets/star.png')} />
                    <Image style={styles.starImg} source={require('../assets/star.png')} />
                    <Image style={styles.starImg} source={require('../assets/star.png')} />
                    <Image style={styles.starImg} source={require('../assets/Star 5.png')} />
                </View>
                <Text style={styles.reviewSum}>(15)</Text>
            </View>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 12, fontWeight: 700, width:111}}>69.900 đ</Text>
        <Text style={{fontSize: 12, fontWeight: 400, color: 'gray' }}>-39%</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
        width: 175,
        height: 240,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    reviewWrapper: {
        flexDirection: 'row',
        width: "80%",
        marginTop: 10,
        marginBottom: 10,
    },
    starWrapper: {
        flexDirection: 'row',
    },
    starImg: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
        marginRight: 5,
    },
    reviewSum: {
        marginLeft: 5,
        fontSize: 15,
    },
})