// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { StackNavigator } from './components/StackNavigator';
import { Messages } from './components/Messages';
import { NewScreen } from './components/NewScreen';

const Tab = createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarStyle: {
            marginTop: 20,
          },
        tabBarLabelStyle: {
          fontSize: 18,
          color: '#4488ff'
        }
        }}
      >
        <Tab.Screen name="Main" component={StackNavigator} />
        <Tab.Screen name="???" component={NewScreen}/>
        <Tab.Screen name="Chat" component={Messages}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

