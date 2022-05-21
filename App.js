import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Logo from './assets/images/logo.svg';
import AddIcon from './assets/images/icon/add.svg';
import NavigationIcon from './assets/images/icon/navigation.svg';
import UserIcon from './assets/images/icon/user.svg';
import BackArrow from './assets/images/icon/backArrow.svg';
import {View, Pressable, StyleSheet} from 'react-native';
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
  HomeScreen,
  AllSodosiScreen,
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

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              headerTitle: '',
              headerLeft: () => <Logo />,
              headerRight: () => {
                return (
                  <View style={styles.iconWrap}>
                    <AddIcon style={styles.icon} />
                    <Pressable onPress={() => navigation.navigate('AllSodosi')}>
                      <NavigationIcon style={styles.icon} />
                    </Pressable>
                    <UserIcon />
                  </View>
                );
              },
              headerShadowVisible: false,
              gestureEnabled: false,
            })}
          />
          <Stack.Screen
            name="AllSodosi"
            component={AllSodosiScreen}
            options={({navigation}) => ({
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <BackArrow />
                </Pressable>
              ),
              headerTitle: '전체 소도시',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  iconWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
  },
});

export default App;
