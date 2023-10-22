import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
export default function ProductComponent(props) {
    const {option} = props
  return (
    <TouchableOpacity style={styles.container}>
        <Image source={option.img}
        style={{
            width: 74,
            height: 74,
            }}
        />
        <View style={{justifyContent:'flex-start'}}>
            <Text style={{fontSize: 14, fontWeight:'bold', marginBottom: 5}}>{option.name}</Text>
            <Text>shop {option.shop}</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity style={{height: 30, width: 60, backgroundColor:'red', justifyContent:'center', alignItems:'center', margin: 20}}>
                <Text style={{color:'white'}}>Chat</Text>
            </TouchableOpacity>
        </View>

    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container:{
        height: 100,
        width: '100%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }

})