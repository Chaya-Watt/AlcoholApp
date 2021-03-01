import React,{useState,useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator();

const AppStack = () => {

  const [isFirstLaunch,setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      } else{
        setIsFirstLaunch(false);
      }
    })
  },[]);

  if(isFirstLaunch == null){
    return null
  } else if (isFirstLaunch == true){
    routeName = 'Profile'
  } else{
    routeName = 'Home'
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
