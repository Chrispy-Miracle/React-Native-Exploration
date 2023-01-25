import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Counter from './Counter';
import Timer from './Timer';

export const PomodoroPlus = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
            <Text style={styles.header}>Pomodoro Timer</Text>
            <Text>Mobile App Development with React Native: </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button 
                    title='Go to List Maker'
                    onPress={() => navigation.navigate('Name Toggler/Flat List')}
                />  
                <View style={{width: 10}}></View>          
                <Button 
                title='Go to Mapped List'
                onPress={() => navigation.navigate('Mapped List With Scroll View')}
                />                
            </View>
            <Button title='Stateful Form' onPress={() => navigation.navigate('Stateful Form')} />
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
      backgroundColor: '#acbdef'
    },
    header: {
      marginTop: 30,
      fontSize: 40,
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