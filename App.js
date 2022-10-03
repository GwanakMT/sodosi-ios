import React, {useEffect, useMemo, useState} from 'react';
import _ from 'lodash';
import Colors from './assets/theme/colors';
import SplashScreen from 'react-native-splash-screen';
import Logo from './assets/images/logo.svg';
import AddIcon from './assets/images/icon/add.svg';
import NavigationIcon from './assets/images/icon/navigation.svg';
import UserIcon from './assets/images/icon/user.svg';
import BackArrow from './assets/images/icon/backArrow.svg';
import SettingIcon from './assets/images/icon/setting.svg';
import Close from './assets/images/icon/close.svg';
import Toast from 'react-native-toast-message';
import {View, Pressable, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Typography} from './components/common';
import {Common} from './structure';
import {
  StartScreen,
  PhoneScreen,
  CertificationNumberScreen,
  PasswordScreen,
  NicknameScreen,
  WelcomeScreen,
  HomeScreen,
  AllSodosiScreen,
  CreateSodosiScreen,
  InterestedSodosiScreen,
  MyPageScreen,
  SettingScreen,
  ChangePasswordScreen,
  PushSettingScreen,
} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  const {toastConfig} = Common.toJSON();

  // 관심 소도시
  const [isAdd, setAdd] = useState(false);
  const [isModify, setModify] = useState(false);
  const [interestedSodosiList, setInterestedSodosiList] = useState([]);

  // 소도시 생성
  const [createSodosiValues, setCreateSodosiValues] = useState({
    emoji: null,
    sodosiName: '',
    isPublic: true,
  });
  const [isExpectOpen, setExpectOpen] = useState(false);
  const [isCelebrationOpen, setCelebrationOpen] = useState(false);

  // 비밀번호 변경
  const [changePasswordValue, setChangePasswordValue] = useState({
    password: '',
    newPassword: '',
    reNewPassword: '',
  });
  const [isChangePasswordError, setChangePasswordError] = useState({
    password: false,
    newPassword: false,
    reNewPassword: false,
  });

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
            headerShadowVisible: false,
            headerTitleStyle: {
              fontFamily: 'Pretendard-Regular',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 22,
              letterSpacing: -0.32,
              color: Colors.text_primary,
            },
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
                    <Pressable
                      onPress={() => navigation.navigate('CreateSodosi')}>
                      <AddIcon style={styles.icon} color={Colors.base_black} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('AllSodosi')}>
                      <NavigationIcon style={styles.icon} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('MyPage')}>
                      <UserIcon color={Colors.base_black} />
                    </Pressable>
                  </View>
                );
              },
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
            name="CreateSodosi"
            options={({navigation}) => ({
              headerLeft: () => (
                <Pressable
                  onPress={() => {
                    if (
                      createSodosiValues.emoji !== null ||
                      createSodosiValues.sodosiName !== ''
                    ) {
                      setExpectOpen(true);
                    } else {
                      navigation.goBack();
                    }
                  }}>
                  <BackArrow />
                </Pressable>
              ),
              headerTitle: '새로운 소도시',
              headerRight: () => (
                <Pressable onPress={() => setCelebrationOpen(true)}>
                  <Typography
                    variant="callout"
                    color={
                      createSodosiValues.emoji !== null &&
                      createSodosiValues.sodosiName !== ''
                        ? Colors.text_primary
                        : Colors.text_tertiary
                    }>
                    완료
                  </Typography>
                </Pressable>
              ),
            })}>
            {props => (
              <CreateSodosiScreen
                values={createSodosiValues}
                setValues={setCreateSodosiValues}
                isExpectOpen={isExpectOpen}
                setExpectOpen={setExpectOpen}
                isCelebrationOpen={isCelebrationOpen}
                setCelebrationOpen={setCelebrationOpen}
                navigation={props.navigation}
              />
            )}
          </Stack.Screen>
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

          <Stack.Screen
            name="MyPage"
            component={MyPageScreen}
            options={({navigation}) => ({
              headerTitle: '',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <BackArrow />
                </Pressable>
              ),
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Setting')}>
                  <SettingIcon />
                </Pressable>
              ),
            })}
          />

          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={({navigation}) => ({
              headerTitle: '설정',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <BackArrow />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="ChangePassword"
            options={({navigation}) => ({
              headerTitle: '비밀번호 변경',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <BackArrow />
                </Pressable>
              ),
              headerRight: () => (
                <Pressable
                  disabled={
                    changePasswordValue.password === '' ||
                    changePasswordValue.newPassword === '' ||
                    changePasswordValue.reNewPassword === ''
                  }
                  onPress={() => {
                    navigation.goBack();
                    setChangePasswordValue({
                      password: '',
                      newPassword: '',
                      reNewPassword: '',
                    });
                    setChangePasswordError({
                      password: false,
                      newPassword: false,
                      reNewPassword: false,
                    });
                    Toast.show({
                      text1: '비밀번호가 변경됐어요.',
                    });
                  }}>
                  <Typography
                    variant="callout"
                    color={
                      changePasswordValue.password !== '' &&
                      changePasswordValue.newPassword !== '' &&
                      changePasswordValue.reNewPassword !== ''
                        ? Colors.text_primary
                        : Colors.text_tertiary
                    }>
                    완료
                  </Typography>
                </Pressable>
              ),
            })}>
            {props => (
              <ChangePasswordScreen
                values={changePasswordValue}
                setValues={setChangePasswordValue}
                isError={isChangePasswordError}
                setError={setChangePasswordError}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="PushSetting"
            component={PushSettingScreen}
            options={({navigation}) => ({
              headerTitle: '앱 알림 설정',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <BackArrow />
                </Pressable>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast position={'bottom'} config={toastConfig} />
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
