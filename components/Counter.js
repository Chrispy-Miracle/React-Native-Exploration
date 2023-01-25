import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1)
    }
    const decrement = () => {
      setCount(count - 1)
    }


    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20}}>Just a Random Counter</Text>
          <View>
            <Button title="Increment Count" onPress={increment}/>
            <View style={{height: 5}}></View>
            <Button color='#234567' title="Decrement Count" onPress={decrement}/>            
          </View>
          <Text>Increment count in circle with above buttons</Text>
          <View style={styles.circle}>
              <Text style={styles.count}>{count}</Text>
          </View> 
        </View>        
    )

} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cde',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 250,
        padding: 5,
        borderRadius: 20,
        marginTop: 5,
      },
      circle: {
        height: 75,
        width: 75,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2233cc',
        marginTop: 10,
      },
      count: {
        color: 'white',
        fontSize: 30,
      },
})
export default Counter;