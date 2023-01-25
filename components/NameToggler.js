import { View, Text, StyleSheet, Button, Switch, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import contacts, { compareNames } from '../contacts';
import Row from './Row';
import { NavBar } from './Navigation';

// console.log(contacts)
export const NameToggler = ({navigation}) => {
    const [nameToggle, setNameToggle] = useState(true)
    const [contactState, setContactState] = useState(contacts)
    
    const mySort = () => {
        setContactState([...contactState].sort(compareNames))
    }

    const renderItem = obj => <Row {...obj.item} />
    return (
            <View style={styles.container}>
                <NavBar navigation={navigation} />
                <Text style={styles.headerText}>List Maker</Text>

                {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button 
                    title='Go to Pomodoro'
                    onPress={() => navigation.navigate('Pomodoro Plus')}
                />
                <View style={{width: 10}}></View>          
                <Button 
                title='Go to Mapped List'
                onPress={() => navigation.navigate('Mapped List With Scroll View')}
                />                
            </View> */}
                    <View style={styles.flexRow}>
                    <Button color='#557654' title="Toggle Names" onPress={()=> setNameToggle(!nameToggle)}></Button>
                    <View style={{width: 10}}></View>
                    <Button color='#557654' title="Sort" onPress={mySort}></Button>                    
                    <Text style={{marginLeft: 15}}>{nameToggle ? "True" : "False"}</Text>
                    <Switch onValueChange={() => setNameToggle(!nameToggle)} value={nameToggle}></Switch>                    
                </View>
                        <Text style={{fontSize:18}}>Flat List:</Text>
                {nameToggle &&
                        <FlatList
                            renderItem={renderItem}
                            data={contactState}
                        />     
                    }       
            </View>
    ) 
}

const styles = StyleSheet.create({
        container: {
            minHeight: 200,
            width: 300,
            backgroundColor: "#555599",
            margin: 20,
            borderRadius: 10,
            alignItems: 'center'
        },
        headerText: {
            color: '#123456',
            fontSize: 40,
            fontWeight: 'bold',
            letterSpacing: 3,
            textShadowColor: "#bbb",
            textShadowRadius: 2,
            textShadowOffset: {
                height: 1,
                width: 1
            }
        },
        flexRow: {
            flexDirection: 'row',
            alignItems: 'center',          
        },

    })