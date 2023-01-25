import { useState } from 'react'
import { View,Text, SectionList, Button, StyleSheet } from 'react-native'
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
        width: '80%',
        padding: 5,
        borderRadius: 3
    } 
})

export const SectList = ({navigation}) => {
    const [contactState, setContactState] = useState([...contacts])
    const [phone, setPhone] = useState('')
    
    const contactsByLetter = contactState.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            // clone obj
            ...obj,
            // overide key with that first letter and set it to that array, 
            // plus the new contact that starts with that letter
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {})

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter]
    }))
    // const data = [{title: 'A', data: [{name: 'Bob', phone: '123'}, {name: 'Mary', phone: '345'},{name: 'Sue', phone: '321'},]}]
    // <Row {...item} />

    const editPhone = () => console.log("Edit phone pressed")

    const renderItem = ({item}) => (
        <View style={styles.itemContainer}>
            <Text>{item.key}</Text>
            <Text style={{fontSize: 20}}>{item.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{paddingLeft: 40, paddingRight: 20}}>{item.phone}</Text>
            <Button title='Edit Phone' color='#ccddee' onPress={editPhone} />
            </View>
        </View>
    )

    return (
        <View>
            <NavBar navigation={navigation} />
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