import { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

import { NavBar } from './Navigation'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#bbbbcc',
        height: '100%'
    },
    header: {
        fontSize: 30
    },
    textInput: {
        backgroundColor: '#eeeeee',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        width: 200,
        paddingLeft: 10,
        fontSize: 20
    },
    textInputRed: {
        backgroundColor: '#ffeeee',
        borderColor: '#ee3333',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        width: 200,
        paddingLeft: 10,
        fontSize: 20
    },
    submitButton: {
        marginTop: 10
    }
}
)
export const StatefulForm = ({navigation}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [isFormVerified, setIsFormVerified] = useState(false)
    const [nameVerified, setNameVerified] = useState(false)
    const [phoneVerified, setPhoneVerified] = useState(false)
    const [emailVerified, setEmailVerified] = useState(false)
    const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false)

    const handleNameChange = nameInputVal => {
        setName(nameInputVal)
    }

    const handlePhoneChange = phoneInputVal => {
        setPhone(phoneInputVal)
    }

    const handleEmailChange = emailInputVal => {
        setEmail(emailInputVal)
    }

    const verifyName = () => {
        name.length >= 3 ? setNameVerified(true) : setNameVerified(false)
    }

    const verifyPhone = () => {
        +phone >= 0 && +phone && phone.length === 10 ? setPhoneVerified(true) : setPhoneVerified(false)
    }

    const verifyEmail = () => {
        email.includes('@') && email.includes('.') && email.length >= 6 ? setEmailVerified(true) : setEmailVerified(false)
    }

    useEffect(verifyName, [name])
    useEffect(verifyPhone, [phone])
    useEffect(verifyEmail, [email])

    const verifyForm = () => {
        if (nameVerified && phoneVerified && emailVerified
            ) {
            setIsFormVerified(true)
        }
        else {
            setIsFormVerified(false)
        }
    }

    useEffect(verifyForm, [nameVerified, phoneVerified, emailVerified, isFormVerified])

    const handleSubmit = () => {
        setHasAttemptedSubmit(true)
        if (isFormVerified === true) {
            console.log('form verified')
        }
        else if (isFormVerified === false){
            console.log('form unverified')
        }
    }

    return (
        <View style={styles.container}>
            <NavBar navigation={navigation} />
            <Text style={styles.header}>This is a Stateful Form</Text>
            {!nameVerified && !isFormVerified && hasAttemptedSubmit && 
                <Text style={{color: '#bb3333'}}>Name must be at least 3 characters</Text>
            }
            <TextInput 
                style={!nameVerified && !isFormVerified && hasAttemptedSubmit ? styles.textInputRed : styles.textInput}
                placeholder='Name' 
                value={name} 
                onChangeText={handleNameChange} 
            />
            {!phoneVerified && !isFormVerified && hasAttemptedSubmit && 
                <Text style={{color: '#bb3333'}}>Phone must be 10 digits</Text>
            }
            <TextInput 
                style={!phoneVerified && !isFormVerified && hasAttemptedSubmit ? styles.textInputRed : styles.textInput}
                placeholder='Phone' 
                value={phone}
                onChangeText={handlePhoneChange}
                keyboardType='numeric'
            />
            {!emailVerified && !isFormVerified && hasAttemptedSubmit && 
                <Text style={{color: '#bb3333'}}>Minimum of 6 characters, must include "@" and "."</Text>
            }
            <TextInput 
                style={!emailVerified && email.length < 6 && !isFormVerified && hasAttemptedSubmit ? styles.textInputRed : styles.textInput}
                placeholder='Email' 
                value={email}
                onChangeText={handleEmailChange}
                keyboardType='email-address'
            />
            <View style={{height: 10}}></View>
            <Button 
                color={isFormVerified ? '#224422' : '#772222'}
                title='Submit' 
                onPress={handleSubmit}/>
        </View>
    )
}