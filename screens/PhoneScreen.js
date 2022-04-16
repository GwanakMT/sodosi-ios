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

function PhoneScreen({navigation}) {
  const [phone, setPhone] = useState('');
  const [isError, setIsError] = useState(false);

  const handleOnSubmit = () => {
    if (phone.replace(/[^0-9]/g).length === 11) {
      console.log('전화번호 유효성 검사 완료');
      setIsError(false);
      navigation.navigate('Password');
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
              휴대폰 번호를 입력해주세요
            </Typography>
            <View style={styles.inputWrap}>
              <Input
                defaultValue="+82"
                editable={false}
                customStyles={styles.countryCode}
                isError={isError}
              />
              <Input
                value={phone}
                onChangeText={setPhone}
                placeholder="01012345678"
                keyboardType="number-pad"
                customStyles={styles.input}
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
                  올바른 휴대폰번호 양식이 아니에요!
                </Typography>
              </View>
            )}
          </View>
          <View>
            <Typography
              variant="caption"
              align="center"
              color={Colors.text_secondary}
              customStyles={styles.description}>
              안전한 소도시 커뮤니티를 위해 휴대폰 번호로 가입해요
            </Typography>
            <Button
              type="primary"
              disabled={phone.length < 11}
              onPress={handleOnSubmit}>
              다음
            </Button>
          </View>
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
    flexDirection: 'row',
    paddingBottom: 10,
  },
  countryCode: {
    width: 68,
    marginRight: 8,
  },
  input: {
    flex: 1,
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

export default PhoneScreen;
