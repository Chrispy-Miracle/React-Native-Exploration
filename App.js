// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Counter from './components/Counter';
// import Timer from './components/Timer';
import  { NameToggler } from './components/NameToggler';
import { PomodoroPlus } from './components/PomodoroPlus';
import { MappedList } from './components/MappedList';
import { StatefulForm } from './components/StatefulForm';
import { SectList } from './components/SectionList';


const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pomodoro Plus"
          component={PomodoroPlus}
          />

        <Stack.Screen
          name="Name Toggler/Flat List"
          component={NameToggler}
        />
        <Stack.Screen 
          name="Mapped List With Scroll View"
          component={MappedList}
        />
        <Stack.Screen 
          name="Stateful Form"
          component={StatefulForm}
        />
        <Stack.Screen 
          name="Section List"
          component={SectList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     backgroundColor: '#acbdef'
//   },
//   header: {
//     marginTop: 30,
//     fontSize: 40,
//     color: '#445566',
//     fontWeight: 'bold',
//     textShadowOffset: {
//       height: 2,
//       width: 1,
//     },
//     textShadowRadius: 2,
//     textShadowColor: 'black',
//     backgroundColor: '#6789ab',
//     padding: 20,
//     borderRadius: 10,
//     borderColor: 'black',
//     borderWidth: 1.5,
//   },
// });
