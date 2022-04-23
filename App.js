import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StartScreen,
  PhoneScreen,
  CertificationNumberScreen,
  PasswordScreen,
  NicknameScreen,
  WelcomeScreen,
} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Phone"
            component={PhoneScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CertificationNumber"
            component={CertificationNumberScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Password"
            component={PasswordScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Nickname"
            component={NicknameScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
