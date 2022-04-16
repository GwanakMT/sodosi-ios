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
import {Typography, Input, Button} from '../components';

function NicknameScreen({navigation}) {
  const [nickname, setNickName] = useState('');
  const [isError, setIsError] = useState(false);

  const handleOnSubmit = () => {
    setIsError(false);
    navigation.navigate('Welcome');
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
              시민님을 뭐라고 부를까요?
            </Typography>
            <View style={styles.inputWrap}>
              <Input
                value={nickname}
                onChangeText={setNickName}
                placeholder="호랑이는 가죽을 남기고..."
                keyboardType="default"
                customStyles={styles.input}
                isError={isError}
                textAlign="center"
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
                  이미 있는 별명이에요!
                </Typography>
              </View>
            )}
          </View>
          <Button
            type="primary"
            disabled={nickname.length < 1}
            onPress={handleOnSubmit}>
            입주하기
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
    flexDirection: 'row',
    paddingBottom: 10,
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
});

export default NicknameScreen;
