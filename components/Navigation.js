import { View, Button } from 'react-native'
import { useRoute } from '@react-navigation/native'

export const NavBar = ({navigation}) => {
    const routeName = useRoute().name
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#000', width: '100%'}}>
            {routeName != 'Name Toggler/Flat List' && 
            <Button 
                title='List Maker'
                onPress={() => navigation.navigate('Name Toggler/Flat List')}
            />} 
            <View style={{width: 5}}></View>
            {routeName != 'Mapped List With Scroll View' && <Button 
                title='Mapped List'
                onPress={() => navigation.navigate('Mapped List With Scroll View')}
            /> }               
            <View style={{width: 5}}></View> 
            {routeName != 'Stateful Form' && <Button 
                title='Form'
                onPress={() => navigation.navigate('Stateful Form')} 
            />}
            {routeName != 'Pomodoro Plus' && 
            <>
            <View style={{width: 5}}></View> 
            <Button 
                title='Pomodoro +'
                onPress={() => navigation.navigate('Pomodoro Plus')} 
            />
            </>}
        </View>
     )
}