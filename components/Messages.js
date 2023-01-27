import { View, Text, TextInput, FlatList, Button, Image, KeyboardAvoidingView, Keyboard, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'

import { MessageText } from './MessageText'

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const messages = [
    {type: "message", content: "yo whats up?", timestamp: 'Tues Jan 26, 4:20pm'}, 
    {type: "response", content: "not much, u?", timestamp: 'Tues Jan 26, 4:20pm'},
    {type: "message", content: "nothin really, wanna do things?", timestamp: 'Tues Jan 26, 4:20pm'},
    {type: "response", content: "aw chea!", timestamp: 'Tues Jan 26, 4:20pm'},
    {type: "message", content: "where we going?", timestamp: 'Tues Jan 26, 4:20pm'}
]

const styles = StyleSheet.create({
    userAvatar: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22aabb',
        borderRadius: 50,
        height: 45,
        width: 45,
        margin: 10,
        borderColor: '#999',
        borderWidth: 1,
    },
    responseAvatar: {
        alignSelf: "flex-start",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5533ff',
        borderRadius: 50,
        height: 45,
        width: 45,
        margin: 10,
        borderColor: '#555',
        borderWidth: 2
    },
    messageInput: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: -125,
        borderColor: '#cccccc',
        borderTopWidth: 2,
        borderBottomWidth: 2
    }
})

export const Messages = (props) => {
    const [messageState, setMessageState] = useState(messages);
    const [textInputState, setTextInputState] = useState("")
    
    const renderItem = ({item}) => {
        return (
            <View>
            <View style={{alignItems: 'center'}}>
                <Text styles={{marginTop: 10}}>{`${item.timestamp}`}</Text>
            </View>  
                <View style={{AlignSelf: 'flex-start', flexDirection: 'row', justifyContent: `${item.type === 'message' ? 'flex-end' : 'flex-start'}`}}>
                    {item.type === 'response' && <View style={styles.responseAvatar}><Text style={{color: '#fff'}}>Them</Text>
                    </View>}
                    <MessageText messageType={item.type} content={item.content} /> 
                    {item.type === 'message' && <Image style={styles.userAvatar} source={require('../assets/VC-logoTrans.png')} />}                 
                              
            </View>   

            </View>
        )
    }
    const handleTextChange = (inputVal) => {
        setTextInputState(inputVal)
    }    


    const handleSendMessage = () => {
        const date = new Date
        const timeStamp = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:${date.getMinutes()}${date.getHours() > 12 ? 'pm' : 'am'}`
        textInputState && setMessageState([...messageState, {type: 'message', content: `${textInputState}`, timestamp: `${timeStamp}`}, {type: 'response', content: "And a quick response!", timestamp: `${timeStamp}`}])
        setTextInputState('')
    }

    useEffect(() => Keyboard.dismiss, [messageState])

    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text style={{fontSize: 25, textAlign:'center', marginBottom: 15, paddingBottom: 5, borderBottomColor: '#888', borderBottomWidth: 2}}>Chrispy's Message Machine</Text>
        <FlatList
            style={{height: '80%'}}
            inverted
            data={[...messageState].reverse()}
            renderItem={renderItem}
        />
        <View style={styles.messageInput}>
            <TextInput style={{fontSize: 22, padding: 10, marginBottom: 10, marginRight: 20, textAlign: 'right'}} placeholder='Say something sucka!' onChangeText={handleTextChange} value={textInputState} />
            <Button style={{marginBottom: 30}} title="Send" onPress={handleSendMessage} />
        </View>
      </KeyboardAvoidingView>
    )
  }