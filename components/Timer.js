import { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import TimeBox from './TimeBox';
import {vibrate} from '../utils';

const Timer = () => {
    const [workMinutes, setWorkMinutes] = useState(25);
    const [workSeconds, setWorkSeconds] = useState(0);
    const [breakMinutes, setBreakMinutes] = useState(5);
    const [breakSeconds, setBreakSeconds] = useState(0);
    const [isTimerOn,setIsTimerOn] = useState(false);
    const [workOrBreak, setWorkOrBreak] = useState('work');
 
    const decrement = () => {
        switch(workOrBreak) {
            case "work":
                if (workSeconds > 0) {
                    setWorkSeconds(workSeconds - 1)
                    clearTimeout()
                } else if (workMinutes > 0 && workSeconds === 0) {
                    setWorkMinutes(workMinutes - 1)
                    setWorkSeconds(59)
                    clearTimeout()
                } else if (workMinutes === 0 && workSeconds === 0) {
                    clearTimeout()
                    vibrate()
                    setWorkOrBreak('break')
                    setWorkMinutes(1)
                    setWorkSeconds(0)
                }
                break;
            case "break":
                if (breakSeconds > 0) {
                    setBreakSeconds(breakSeconds - 1)
                    clearTimeout()
                 } else if (breakMinutes > 0 && breakSeconds === 0) {
                    setBreakMinutes(breakMinutes - 1)
                    setBreakSeconds(59)
                    clearTimeout()
                 } else if (breakMinutes === 0 && breakSeconds === 0){
                    clearTimeout()
                    vibrate()
                    setWorkOrBreak('work')
                    setBreakMinutes(1)
                    setBreakSeconds(0)
                 }                
        }
      }
    
    useEffect(() => {
        if (isTimerOn === true) {
            const timeoutId = setTimeout(decrement, 1000)
        }
    }, [breakSeconds, workSeconds, workOrBreak, isTimerOn])
    
    const stopTimer = (timeoutId) => {
        clearTimeout(timeoutId)
        setIsTimerOn(false)
        clearTimeout(timeoutId)
    }
    const startTimer = () => {    
        clearTimeout()
        setIsTimerOn(true)
    }  
    const reset = () => {
        setTimeout(() => {
            setIsTimerOn(false)
            setWorkOrBreak('work')
            setWorkMinutes(25)
            setWorkSeconds(0)
            setBreakMinutes(5)
            setBreakSeconds(0)},
        1000
        )
    }

    const stopAndReset = () => {
        stopTimer()
        reset()
    }

    return (
        <View>
            <Text style={{textAlign: 'center', marginBottom: 10, fontSize: 20}}>Timer Component</Text>
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Button title='Start' onPress={startTimer} style={{marginRight: 10}}/>
                    <View style={{width: 20}}></View>
                    <Button title='Stop' onPress={stopTimer} style={{marginRight: 10}}/>
                    <View style={{width: 20}}></View>
                    <Button title='Reset' onPress={stopAndReset}/>
                </View>
                <TimeBox wOrB='Work' minutes={workMinutes} seconds={workSeconds} workOrBreak={workOrBreak} />
                <TimeBox wOrB='Break' minutes={breakMinutes} seconds={breakSeconds} workOrBreak={workOrBreak}/>   
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View >
                        <Text for="workInput">Set Work Minutes:</Text>
                        <TextInput id="workInput" keyboardType="numeric" style={styles.input} value={workMinutes} onChangeText={setWorkMinutes} />  
                    </View>
                    <View style={{width: 30}}></View>
                    <View>
                        <Text for="breakInput">Set Break Minutes:</Text>
                        <TextInput id="breakInput" keyboardType="numeric" style={styles.input} value={breakMinutes} onChangeText={setBreakMinutes} />  
                    </View>                     
                </View>
                              
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 75,
        backgroundColor: "#eee",
        color: "#444",
        margin: 10,
        borderRadius: 10
    }
})

export default Timer;