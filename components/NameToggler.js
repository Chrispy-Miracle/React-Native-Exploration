import { View, Text, StyleSheet, Button, Switch, FlatList } from 'react-native';
import { useState } from 'react';
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
            backgroundColor: "#555599",
            alignItems: 'center',
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