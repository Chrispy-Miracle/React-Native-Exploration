import { View, Button, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { ButtonSpacer } from './ButtonSpacer'

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#000',
    width: '100%',
    }
})

export const NavBar = ({navigation}) => {
    const routeName = useRoute().name

    return (
        <View style={styles.container}>
            {routeName != 'Name Toggler/Flat List' && 
            <>
                <ButtonSpacer />
                <Button 
                    title=' FlatList'
                    onPress={() => navigation.navigate('Name Toggler/Flat List')}
                />
                <ButtonSpacer />
            </>
            } 
            {routeName != 'Mapped List With Scroll View' && 
            <>
                <ButtonSpacer />
                <Button 
                    title='MapList'
                    onPress={() => navigation.navigate('Mapped List With Scroll View')}
                />
                <ButtonSpacer />
            </>
            } 
            {routeName != 'Stateful Form' && 
            <>
                <ButtonSpacer />
                <Button 
                    title='Form'
                    onPress={() => navigation.navigate('Stateful Form')} 
                />
                <ButtonSpacer />
            </>
            }
            {routeName != 'Pomodoro Plus' && 
            <>
                <ButtonSpacer /> 
                <Button 
                    title='Pomo'
                    onPress={() => navigation.navigate('Pomodoro Plus')} 
                />
                <ButtonSpacer />
            </>}
            {routeName != 'Section List' && 
            <>
                <ButtonSpacer /> 
                <Button 
                    title='SectList'
                    onPress={() => navigation.navigate('Section List')} 
                />
                <ButtonSpacer />
            </>}   
        </View>
     )
}