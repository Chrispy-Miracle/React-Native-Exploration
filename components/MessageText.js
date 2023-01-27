import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    message: {
        fontSize: 18,
        color: '#fff',
        alignSelf:'flex-end',
        padding: 8,
        textAlign: 'center',
        backgroundColor:'#3366ff',
        maxWidth: 230,
        borderRadius: 20,
        marginBottom: 10
    },
    response: {
        fontSize: 18,
        color: '#000',
        alignSelf:'flex-start',
        padding: 8,
        textAlign:'center',
        backgroundColor:'#ddd',
        maxWidth: 200,
        borderRadius: 20,
        marginBottom: 10 
    }
})

export const MessageText = (props) => {
    return (
        <Text style={props.messageType === 'message' ? styles.message : styles.response}>{props.content}</Text>        
    )
}