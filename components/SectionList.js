import { useState } from 'react'
import { View, Text, TextInput, SectionList, Button, StyleSheet, Image } from 'react-native'
import contacts from '../contacts'

import { NavBar } from './Navigation'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        textAlign: 'center',
        fontSize: 25,
        color: "#555555",
        backgroundColor: "#ddeeff",
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: '35%'
    },
    itemContainer: {
        backgroundColor: '#bbbbbb',
        margin: 5,
        width: '85%',
        padding: 5,
        borderRadius: 3
    },
    textInput: {
        textAlign: 'right',
        backgroundColor: '#dddddd',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        paddingRight: 10,
        margin: 5,
        width: 120,
        marginLeft: '55%'
    }
})

export const SectList = ({navigation}) => {
    const [contactState, setContactState] = useState([...contacts])
    const [phone, setPhone] = useState('')
    const[editPhoneOn, setEditPhoneOn] = useState(false)
    
    const contactsByLetter = contactState.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            // clone obj
            ...obj,
            // overide key with that first letter and set it to that array (or an empty array), 
            // plus the new contact that starts with that letter
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {})

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter]
    }))
    //data format:
    // const data = [{title: 'A', data: [{name: 'Bob', phone: '123'}, {name: 'Mary', phone: '345'},{name: 'Sue', phone: '321'},]}]
    // another way to assign props:
    // <Row {...item} />

    const editPhone = () => setEditPhoneOn(editPhoneOn ? false : true)

    const renderItem = ({item}) => (
        <View style={styles.itemContainer}>
            <Text>{item.key}</Text>
            <Text style={{fontSize: 20}}>{item.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{paddingLeft: 45, paddingRight: 20}}>{item.phone}</Text>
                <Button title='Edit Phone' color='#ccddee' onPress={editPhone} />
            </View>
            {editPhoneOn && <TextInput style={styles.textInput} placeholder={item.phone}></TextInput>}
        </View>
    )

    return (
        <View>
            <NavBar navigation={navigation} />
            <Image style={{height: 165, width: 350, marginTop: 20, marginLeft: 3, borderRadius: 15, borderColor: '#666', borderWidth: 3}} source={require("../assets/train.jpg")} />
            <View style={{paddingLeft: 20}}>
                <Text style={{fontSize: 25}}>Section List</Text>
                <SectionList 
                    // sections={[{
                    //     title: 'Title',
                    //     data: contactState
                    // }]}
                    sections={sections}
                    renderItem={renderItem}
                    renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
                />                
            </View>
            <View style={{height: 50}}></View>
        </View>
    )
}