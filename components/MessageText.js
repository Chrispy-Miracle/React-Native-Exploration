import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    message: {
        fontSize: 18,
        color: '#fff',
        alignSelf:'flex-end',
        padding: 10,
        textAlign:'center',
        backgroundColor:'#3366ff',
        maxWidth: 230,
        borderRadius: 50
    },
    response: {
        fontSize: 18,
        color: '#000',
        alignSelf:'flex-start',
        justifyContent: 'center',
        // margin: 10,
        padding: 10,
        textAlign:'center',
        backgroundColor:'#ddd',
        maxWidth: 200,
        borderRadius: 50
    }
})

export const MessageText = (props) => {
    return (
        <Text style={props.messageType === 'message' ? styles.message : styles.response}>{props.content}</Text>        
    )
}