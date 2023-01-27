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

const responses = ['ok', 'really?', 'for real', 'dope', 'no way', 'wow!', 'omg', 'wtf?!', 'lol', 'lolz', 'lolmfao', 'thats creepy af', 'for real?', 'damn', 'oh snap!', 'gtfo', 'no cap', 'tldr', 'new phone, who dis?', 'I love you', 'fuck off', 'leave me alone', 'weirdo', 'ok....', '???', "good night", 'whatcha doin?', 'stop copying me', 'I know you are, but what am I?', 'thats great!', 'aw chea!', 'f to the yes!', 'hellz yeah!', 'I think you are misunderstanding me', 'I mean, I guess...', "do you by chance know the air speed velocity of an unladen swallow?", 'blah', 'blah blah blah', 'Do I know you?']

const getRandomResponse = () => {
    const randomNumber = Math.floor(Math.random() * responses.length)
    return responses[randomNumber]
}

const styles = StyleSheet.create({
    userAvatar: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22aabb',
        borderRadius: 50,
        height: 45,
        width: 45,
        marginRight: 10,
        marginLeft: 10,
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
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#555',
        borderWidth: 2
    },
    messageInput: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: -145,
        paddingRight: 15,
        // padding: 3,
        backgroundColor: '#eeeeee',
        borderColor: '#dddddd',
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
            <View style={{alignItems: 'center', marginTop: 10, color: '#555'}}>
                <Text styles={{}}>{`${item.timestamp}`}</Text>
            </View>  
                <View style={{flexDirection: 'row', justifyContent: `${item.type === 'message' ? 'flex-end' : 'flex-start'}`}}>
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
        const timeStamp = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:${date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()}${date.getHours() > 12 ? 'pm' : 'am'}`
        textInputState && setMessageState([...messageState, {type: 'message', content: `${textInputState}`, timestamp: `${timeStamp}`}, {type: 'response', content: getRandomResponse(), timestamp: `${timeStamp}`}])
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
            <TextInput style={{fontSize: 22, marginRight: 20, textAlign: 'right'}} placeholder='Say something sucka!' onChangeText={handleTextChange} value={textInputState} />
            <Button title="Send" onPress={handleSendMessage} />
        </View>
      </KeyboardAvoidingView>
    )
  }