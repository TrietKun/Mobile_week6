import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Screen4a from './Screen/Screen4a';
import Screen4b from './Screen/Screen4b';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screen/Screen4b.js';


export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  function MyTabs() {
    return (
        <View style={styles.container}>
          <Tab.Navigator screenOptions={{headerShown:false}}      tabBarOptions={{
          activeBackgroundColor: '#1BA9FF', 
          inactiveBackgroundColor: '#1BA9FF', 
          showLabel: false, 
        }}   >
              <Tab.Screen name='a' component={Screen4a} options={{
                tabBarIcon: () => (
                    <Image source={
                        require('./assets/Group 10.png')
                      } 
                        style= {styles.icon}/>
                ),
            }}/>
              <Tab.Screen name= 'b' component={Screen4b} options={{
                tabBarIcon: () => (
                    <Image source={
                        require('./assets/Vector-2.png')
                      } 
                      style= {styles.icon}/>
                ),
            }}/>
              <Tab.Screen name='c' component={Home} options={{
                tabBarIcon: () => (
                    <Image source={
                        require('./assets/Vector 1 (Stroke).png')
                      } 
                      style= {styles.icon}/>
                ),
            }}/>
        </Tab.Navigator>
        </View>
        
    );
  }
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Main" component={MyTabs}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
    width: '100%',
    height: '100%',
  },
});
