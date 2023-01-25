import { Text, View, ScrollView, Button } from 'react-native';

import contacts from '../contacts';

export const MappedList = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button 
                    title='Go to List Maker'
                    onPress={() => navigation.navigate('Name Toggler/Flat List')}
                />  
                <View style={{width: 10}}></View>          
                <Button 
                title='Go to Pomodoro'
                onPress={() => navigation.navigate('Pomodoro Plus')}
                />                
            </View>
            <Text>Mapped list</Text>
            {contacts.map(item => (
                <View style={{flexDirection: 'row'}} key={item.key}>
                    <Text>{item.name}</Text>
                    <Text style={{margin: 10}}>{item.phone}</Text>
                </View>                          
            ))}
        </ScrollView>
    )
}