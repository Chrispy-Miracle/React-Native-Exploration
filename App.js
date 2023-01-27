// import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { StackNavigator } from './components/StackNavigator';
import { Messages } from './components/Messages';
import { NewScreen } from './components/NewScreen';

const Tab = createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
              screenOptions={({ route, navigation }) => ({
                tabBarLabel: ({ focused, color }) => {
                  let iconName;
      
                  if (route.name === 'Main') {
                    iconName = focused
                      ? 'home'
                      : 'home-outline';
                  } else if (route.name === 'World') {
                    iconName = focused ? 'earth' : 'earth-outline';
                  } else if (route.name === 'Chat') {
                    iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                  }
      
                  // You can return any component that you like here!
                  return (
                    <View style={{alignItems: 'center'}}>
                      <Ionicons name={iconName} size={40} color={color} />
                      <Text style={{color: `${navigation.isFocused() ? '#4488ff' : 'gray'}`}}>{route.name}</Text>
                    </View> );
                },
                tabBarActiveTintColor: '#4488ff',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                  marginTop: 20,
                  backgroundColor: '#dddeef',
                  // size: 40
                  // tabBarActiveTintColor: '#0000ff'
                },
                // tabBarLabelStyle: {
                //   // fontSize: 14,
                //   // width: '100%',
                //   // color: '#4488ff',
                //   // borderColor: '#333333',
                //   // borderWidth: 2          
                // },
                // tabBarIconStyle: {
                //   // color: "#888888"
                //   size: 40
                // },
                tabBarItemStyle: {
                  borderColor: '#888888',
                  borderWidth: 1
                },
              })
            
            }
        // screenOptions={{
          // tabBarStyle: {
          //   marginTop: 20,
          //   backgroundColor: '#dddddf',
          //   tabBarActiveTintColor: '#0000ff'
          // },
          // tabBarLabelStyle: {
          //   // fontSize: 14,
          //   // width: '100%',
          //   color: '#4488ff',
          //   borderColor: '#333333',
          //   borderWidth: 2          
          // },
          // tabBarIconStyle: {
          //   color: "#888888"
          // },
          // tabBarItemStyle: {
          //   borderColor: '#888888',
          //   borderWidth: 1
          // },
          
          

        // }}
        
      >
        <Tab.Screen 
          name="Main" 
          component={StackNavigator} 
          // options={{
          //   tabBarLabel: (focused, color) => <Ionicons 
          //       name='home-outline'
          //       size={40}
          //       // color='#2255aa'
          //       color={color}
          //     />
          // }}
        />
        <Tab.Screen 
          name='World' 
          component={NewScreen}
          // options={{
          //   tabBarLabel: () => <Ionicons 
          //       name='earth'
          //       size={40}
          //       color='#2255aa'
          //     />
          // }}          
        />
        <Tab.Screen
          name="Chat"
          component={Messages}
          // options={{
          //   tabBarLabel: () => <Ionicons 
          //       name='chatbubbles-outline'
          //       size={40}
          //       color='#2255aa'
          //     />
          // }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

