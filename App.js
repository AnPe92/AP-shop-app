import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { useEffect } from 'react';
import { initDb, getTableInfo } from './databas/DatabaseUtils';



const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    initDb()
      .then(res => console.log(res, " res from initDB"))
  })


  return (

    <NavigationContainer >

      <Stack.Navigator >

        <Stack.Screen name='Home' component={Home} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
