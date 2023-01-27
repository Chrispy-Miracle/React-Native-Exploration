import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const NewScreen = () => {
    return (
      <View>
        <Text style={{fontSize: 25, textAlign:'center'}}>World View</Text>
        <Ionicons 
                name="earth-sharp"
                size={200}
                color='#2299dd'
                style={{paddingLeft: '20%'}}
              />
      </View>
    )
  }