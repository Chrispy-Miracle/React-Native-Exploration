import { Image, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  { NameToggler } from './NameToggler';
import { PomodoroPlus } from './PomodoroPlus';
import { MappedList } from './MappedList';
import { StatefulForm } from './StatefulForm';
import { SectList } from './SectionList';

const Stack = createNativeStackNavigator()

export const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Pomodoro Plus"
          component={PomodoroPlus}
        />
        <Stack.Screen
          name="Name Toggler/Flat List"
          component={NameToggler}
        />
        <Stack.Screen 
          name="Mapped List With Scroll View"
          component={MappedList}
        />
        <Stack.Screen 
          name="Stateful Form"
          component={StatefulForm}
        />
        <Stack.Screen 
          name="Section List"
          component={SectList}
          options={{
            headerTintColor: 'teal',
            headerLeft: () => <Image style={{height: 60, width: 80, marginTop: 10, marginRight: 10, marginBottom: 5, borderRadius: 5, borderColor: '#000', borderWidth: 2}} source={require("../assets/meAtComputer.jpg")} />,
            headerStyle: {
              height: 150
            }, 
            headerTitle: 'SectList',
            headerRight: () => <Button title='Press Me!' onPress={() => alert('Pressed it!')}/>
          }}
        />
      </Stack.Navigator>
    )
  }