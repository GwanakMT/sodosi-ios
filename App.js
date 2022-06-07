import React, {useEffect, useMemo, useState} from 'react';
import _ from 'lodash';
import Colors from './assets/theme/colors';
import SplashScreen from 'react-native-splash-screen';
import Logo from './assets/images/logo.svg';
import AddIcon from './assets/images/icon/add.svg';
import NavigationIcon from './assets/images/icon/navigation.svg';
import UserIcon from './assets/images/icon/user.svg';
import BackArrow from './assets/images/icon/backArrow.svg';
import Close from './assets/images/icon/close.svg';
import {View, Pressable, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Typography} from './components/common';
import {
  StartScreen,
  PhoneScreen,
  CertificationNumberScreen,
  PasswordScreen,
  NicknameScreen,
  WelcomeScreen,
  HomeScreen,
  AllSodosiScreen,
  InterestedSodosiScreen,
} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  // 관심 소도시
  const [isAdd, setAdd] = useState(false);
  const [isModify, setModify] = useState(false);
  const [interestedSodosiList, setInterestedSodosiList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  const InterestedSodosiHeaderTitle = useMemo(() => {
    let selected = 0;
    interestedSodosiList.map(item => {
      if (item.selected === true) {
        selected++;
      }
    });
    if (isModify && selected > 0) {
      return `관심 소도시 (${selected})`;
    } else {
      return '관심 소도시';
    }
  }, [isModify, interestedSodosiList]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            headerHideShadow: true,
          }}>
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
                    <AddIcon style={styles.icon} color={Colors.base_black} />
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
          <Stack.Screen
            name="InterestedSodosi"
            options={({navigation}) => ({
              headerLeft: () => {
                return isModify ? (
                  <Pressable
                    onPress={() => {
                      const _interestedSodosiList =
                        _.cloneDeep(interestedSodosiList);
                      _interestedSodosiList.map(sodosi => {
                        sodosi.selected = false;
                      });
                      setInterestedSodosiList(_interestedSodosiList);
                      setModify(false);
                    }}>
                    <Close color={Colors.base_black} />
                  </Pressable>
                ) : (
                  <Pressable onPress={() => navigation.goBack()}>
                    <BackArrow />
                  </Pressable>
                );
              },
              headerTitle: InterestedSodosiHeaderTitle,
              headerTitleStyle: {
                fontSize: 16,
                lineHeight: 22,
                letterSpacing: -0.32,
                fontWeight: 'bold',
                color: Colors.text_primary,
              },
              headerRight: () => {
                if (isAdd) {
                  return <></>;
                } else {
                  return !isModify ? (
                    <Pressable onPress={() => setModify(true)}>
                      <Typography variant="callout" color={Colors.text_primary}>
                        편집
                      </Typography>
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => {
                        setModify(false);
                      }}>
                      <Typography variant="callout" color={Colors.text_primary}>
                        완료
                      </Typography>
                    </Pressable>
                  );
                }
              },
              headerShadowVisible: false,
            })}>
            {props => (
              <InterestedSodosiScreen
                isAdd={isAdd}
                setAdd={setAdd}
                isModify={isModify}
                setModify={setModify}
                interestedSodosiList={interestedSodosiList}
                setInterestedSodosiList={setInterestedSodosiList}
              />
            )}
          </Stack.Screen>
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
