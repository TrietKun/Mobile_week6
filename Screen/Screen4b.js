import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList,Dimensions } from 'react-native'
import React from 'react'
import ProductDetailComponent from '../component/ProductDetailComponent'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Screen4b() {

  let col = 2;
  if (windowWidth > 500) {
    col = 4;
  }

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/ant-design_arrow-left-outlined.png')} style={{height:30, width: 30}} />
        </TouchableOpacity>

        <View style={styles.seacrh}>
            <TouchableOpacity>
              <Image
                source={require("../assets/whh_magnifier.png")}
                style={{ width: 24, height: 24, marginLeft: 5, marginRight: 5 }}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Dây cáp usb"
              placeholderTextColor={"#7D5B5B"}
              style={{ width: 155 }}
            ></TextInput>
        </View>

        <View style={{ marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../assets/Vector-1.png')}
                        style={{
                            width: 30,
                            height: 30,
                            position: 'absolute',
                        }}
                    />
                    <Image source={require('../assets/Vector.png')}
                        style={{
                            width: 10,
                            height: 10,
                            position: 'absolute',
                        }}
                    />
                </View>
                <Image source={require('../assets/Group 2.png')} style={{height:10, width: 35}}/>

      </View>
      <View style={styles.body}>
                <FlatList style={styles.flatList}
                    data={dataList}
                    renderItem={({ item }) => <ProductDetailComponent option={item} /> }
                    numColumns={col}
                    contentContainerStyle={styles.itemFlatList}
                    scrollEnabled={true}
                />
            </View>
    </View>
  )
}
const dataList = [
  {
      img: require('../assets/giacchuyen 1.png'),
  },
  {
      img: require('../assets/daynguon 1.png'),
  },
  {
      img: require('../assets/dauchuyendoipsps2 1.png'),

  },
  {
      img: require('../assets/dauchuyendoi 1.png'),
  },
  {
      img: require('../assets/carbusbtops2 1.png'),

  },
  {
      img: require('../assets/daucam 1.png'),

  },
]
const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    backgroundColor: "#C4C4C4",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#1BA9FF",
    height: 42,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  seacrh: {
    width: 192,
    height: 30,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  flatList: {
    position: 'sticky', 
    width: '100%',
    top: 150,
    marginBottom: 50, 
    height: 800,
  },
  itemFlatList: { 
    justifyContent: 'space-between', 
    paddingHorizontal: 20 ,
    alignSelf : 'center'
  },
  body : {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
  }
})