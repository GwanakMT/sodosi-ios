import React, {useState} from 'react';
import Colors from '../assets/theme/colors';
import BackArrow from '../assets/images/icon/backArrow.svg';
import WarningIcon from '../assets/images/icon/warning.svg';
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Typography, Input, Button} from '../components/common';

function PasswordScreen({navigation}) {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleOnSubmit = () => {
    if (password === rePassword) {
      console.log('비밀번호 유효성 검사 완료');
      setIsError(false);
      navigation.navigate('Nickname');
    } else {
      setIsError(true);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.select({ios: 'padding'})}
        style={styles.avoid}>
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.container}>
          <View>
            <Typography
              variant="title2"
              color={Colors.text_primary}
              customStyles={styles.title}
              bold>
              비밀번호를 입력해주세요
            </Typography>
            <View style={styles.inputWrap}>
              <Input
                value={password}
                onChangeText={setPassword}
                placeholder="8자리 이상 입력해주세요"
                secureTextEntry={true}
                isError={isError}
                customStyles={styles.input}
                autoFocus
              />
              <Input
                value={rePassword}
                onChangeText={setRePassword}
                placeholder="한 번 더 입력해주세요!"
                secureTextEntry={true}
                editable={password.length >= 8}
                isError={isError}
                autoFocus
              />
            </View>
            {isError && (
              <View style={styles.errorWrap}>
                <WarningIcon />
                <Typography
                  variant="caption"
                  color={Colors.system_tint_pink}
                  customStyles={styles.errorText}>
                  비밀번호가 일치하지 않습니다.
                </Typography>
              </View>
            )}
          </View>
          <Button
            type="primary"
            disabled={password.length < 8}
            onPress={handleOnSubmit}>
            다음
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.base_white,
  },
  avoid: {
    flex: 1,
  },
  header: {
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.base_white,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.base_white,
    paddingTop: 36,
    padding: 20,
  },
  title: {
    paddingBottom: 24,
  },
  inputWrap: {
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  errorWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    marginLeft: 6,
  },
  description: {
    paddingBottom: 18,
  },

  buttonWrap: {
    width: '100%',
  },
  gif: {
    width: 260,
    height: 260,
    marginBottom: 32,
  },
  startButton: {
    marginBottom: 14,
  },
});

export default PasswordScreen;
