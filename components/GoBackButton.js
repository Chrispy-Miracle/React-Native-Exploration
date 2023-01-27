import { Button, View } from "react-native"
import { useRoute } from "@react-navigation/native"



export const GoBackButton = ({navigation}) => {
    const routeName = useRoute().name
    return (
        <View>
            {routeName != 'Pomodoro Plus' &&
                <Button 
                    title="Go Back"
                    onPress={() => navigation.goBack()}
                />
            }            
        </View>
    )
}