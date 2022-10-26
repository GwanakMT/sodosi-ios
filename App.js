import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'
import Colors from './assets/theme/colors'
import SplashScreen from 'react-native-splash-screen'
import Logo from './assets/images/logo.svg'
import Toast from 'react-native-toast-message'
import { View, Pressable, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Typography, Icons } from './components/common'
import { Common } from './structure'
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
  ChangeNicknameScreen,
  SettingScreen,
  ChangePasswordScreen,
  PushSettingScreen
} from './screens'

const Stack = createNativeStackNavigator()

function App() {
  const { toastConfig } = Common.toJSON()

  // 관심 소도시
  const [isAdd, setAdd] = useState(false)
  const [isModify, setModify] = useState(false)
  const [interestedSodosiList, setInterestedSodosiList] = useState([])

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

  const InterestedSodosiHeaderTitle = useMemo(() => {
    let selected = 0
    interestedSodosiList.map((item) => {
      if (item.selected === true) {
        selected++
      }
    })
    if (isModify && selected > 0) {
      return `관심 소도시 (${selected})`
    } else {
      return '관심 소도시'
    }
  }, [isModify, interestedSodosiList])

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
              color: Colors.text_primary
            }
          }}>
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Phone"
            component={PhoneScreen}
            options={({ navigation }) => ({
              headerTitle: '',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Icons id="back-arrow" width={24} height={24} />
                </Pressable>
              )
            })}
          />
          <Stack.Screen
            name="CertificationNumber"
            component={CertificationNumberScreen}
            options={({ navigation }) => ({
              headerTitle: '',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Icons id="back-arrow" width={24} height={24} />
                </Pressable>
              )
            })}
          />
          <Stack.Screen
            name="Password"
            component={PasswordScreen}
            options={({ navigation }) => ({
              headerTitle: '',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Icons id="back-arrow" width={24} height={24} />
                </Pressable>
              )
            })}
          />
          <Stack.Screen
            name="Nickname"
            component={NicknameScreen}
            options={({ navigation }) => ({
              headerTitle: '',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Icons id="back-arrow" width={24} height={24} />
                </Pressable>
              )
            })}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
              gestureEnabled: false
            }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerTitle: '',
              headerLeft: () => <Logo />,
              headerRight: () => {
                return (
                  <View style={styles.iconWrap}>
                    <Pressable
                      onPress={() => navigation.navigate('CreateSodosi')}>
                      <Icons
                        id="add"
                        width={24}
                        height={24}
                        color={Colors.base_black}
                        customStyles={styles.icon}
                      />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('AllSodosi')}>
                      <Icons
                        id="navigation"
                        width={24}
                        height={24}
                        color={Colors.base_black}
                        customStyles={styles.icon}
                      />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('MyPage')}>
                      <Icons
                        id="user"
                        width={14}
                        height={17}
                        color={Colors.base_black}
                      />
                    </Pressable>
                  </View>
                )
              },
              gestureEnabled: false
            })}
          />
          <Stack.Screen
            name="AllSodosi"
            component={AllSodosiScreen}
            options={({ navigation }) => ({
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Icons id="back-arrow" width={24} height={24} />
                </Pressable>
              ),
              headerTitle: '전체 소도시'
            })}
          />
          <Stack.Screen
            name="CreateSodosi"
            component={CreateSodosiScreen}
            options={() => ({
              headerTitle: '새로운 소도시'
            })}
          />
          <Stack.Screen
            name="InterestedSodosi"
            options={({ navigation }) => ({
              headerLeft: () => {
                return isModify ? (
                  <Pressable
                    onPress={() => {
                      const _interestedSodosiList =
                        _.cloneDeep(interestedSodosiList)
                      _interestedSodosiList.map((sodosi) => {
                        sodosi.selected = false
                      })
                      setInterestedSodosiList(_interestedSodosiList)
                      setModify(false)
                    }}>
                    <Icons
                      id="close"
                      width={24}
                      height={24}
                      color={Colors.base_black}
                    />
                  </Pressable>
                ) : (
                  <Pressable onPress={() => navigation.goBack()}>
                    <Icons id="back-arrow" width={24} height={24} />
                  </Pressable>
                )
              },
              headerTitle: InterestedSodosiHeaderTitle,
              headerRight: () => {
                if (isAdd) {
                  return <></>
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
                        setModify(false)
                      }}>
                      <Typography variant="callout" color={Colors.text_primary}>
                        완료
                      </Typography>
                    </Pressable>
                  )
                }
              }
            })}>
            {() => (
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
            options={({ navigation }) => ({
              headerTitle: '',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Icons id="back-arrow" width={24} height={24} />
                </Pressable>
              ),
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Setting')}>
                  <Icons
                    id="setting"
                    width={24}
                    height={24}
                    color={Colors.base_black}
                  />
                </Pressable>
              )
            })}
          />
          <Stack.Screen
            name="ChangeNickname"
            component={ChangeNicknameScreen}
            options={({ navigation }) => ({
              headerTitle: '닉네임 설정',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Icons id="back-arrow" width={24} height={24} />
                </Pressable>
              )
            })}
          />

          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={({ navigation }) => ({
              headerTitle: '설정',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Icons id="back-arrow" width={24} height={24} />
                </Pressable>
              )
            })}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
            options={({ navigation }) => ({
              headerTitle: '비밀번호 변경',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Icons id="back-arrow" width={24} height={24} />
                </Pressable>
              )
            })}
          />
          <Stack.Screen
            name="PushSetting"
            component={PushSettingScreen}
            options={({ navigation }) => ({
              headerTitle: '앱 알림 설정',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Icons id="back-arrow" width={24} height={24} />
                </Pressable>
              )
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast position={'bottom'} config={toastConfig} />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  iconWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 20
  }
})

export default App
