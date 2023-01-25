import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Counter from './Counter';
import Timer from './Timer';
import { NavBar } from './Navigation';

export const PomodoroPlus = ({navigation}) => {
    return (
        <ScrollView>
            <NavBar navigation={navigation}/>
            <View style={styles.container}>
            <Text style={styles.header}>Pomodoro Timer</Text>
            <Text>Mobile App Development with React Native: </Text>
            
            <Timer />
            <Counter />
            
            <StatusBar style="auto" />
            </View>      
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#acbdef',
      height: '100%'
    },
    header: {
      marginTop: 10,
      fontSize: 35,
      color: '#445566',
      fontWeight: 'bold',
      textShadowOffset: {
        height: 2,
        width: 1,
      },
      textShadowRadius: 2,
      textShadowColor: 'black',
      backgroundColor: '#6789ab',
      padding: 20,
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 1.5,
    },
  });