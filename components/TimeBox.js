import { StyleSheet, Text, View} from 'react-native';

const TimeBox = (props) => {
    const doesTypeMatch = () => {
        return props.wOrB.toLowerCase() === props.workOrBreak;
    }

    return (
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={doesTypeMatch() ? styles.currentTimer : styles.timerText}>{props.wOrB}:  </Text>
            <Text style={styles.timerText}>{props.minutes > 9 ? props.minutes : `0${props.minutes}`}:{props.seconds > 9 ? props.seconds : `0${props.seconds}`}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    timerText: {
        fontSize: 20,
    },
    currentTimer: {
        fontSize: 25,
        color: "#3333dd",
    }
})
export default TimeBox;