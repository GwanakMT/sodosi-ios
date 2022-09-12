import React, {useEffect, useState, useRef, useMemo, useCallback} from 'react';
import Colors from '../../assets/theme/colors';
import WarningIcon from '../../assets/images/icon/warning.svg';
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
} from 'react-native';
import {BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Header,
  Typography,
  Input,
  Button,
  Checkbox,
} from '../../components/common';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const CustomBackdrop = ({animatedIndex, style}) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: Colors.base_black,
        opacity: 0.5,
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  );

  return <View style={containerStyle} />;
};

function Password(props) {
  const {navigation} = props;

  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [values, setValues] = useState({
    all: false,
    service: false,
    personalInfo: false,
    marketing: false,
  });

  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => [350], []);

  useEffect(() => {
    if (
      !values.all &&
      values.service &&
      values.personalInfo &&
      values.marketing
    ) {
      setValues({...values, all: true});
    } else if (
      values.all &&
      (!values.service || !values.personalInfo || !values.marketing)
    ) {
      setValues({...values, all: false});
    }
  }, [values]);

  const handleOnSubmit = () => {
    if (password === rePassword) {
      console.log('비밀번호 유효성 검사 완료');
      setIsError(false);
      handlePresentModalPress();
    } else {
      setIsError(true);
    }
  };

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleOnChangeCheck = (name, value) => {
    if (name === 'all') {
      setValues({
        all: value,
        service: value,
        personalInfo: value,
        marketing: value,
      });
    } else {
      setValues({...values, [name]: value});
    }
  };

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <Header onPress={() => navigation.goBack()} />
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

        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          enableContentPanningGesture={false}
          handleStyle={styles.bottomSheetHandle}
          backdropComponent={backdropProps => (
            <CustomBackdrop {...backdropProps} enableTouchThrough={true} />
          )}>
          <View style={styles.bottomSheetContainer}>
            <View style={[styles.outlined]}>
              <Checkbox
                active={values.all}
                onPress={() => handleOnChangeCheck('all', !values.all)}
              />
              <Typography
                variant="callout"
                color={Colors.base_black}
                customStyles={styles.allAgreeText}
                bold>
                약관 모두 동의
              </Typography>
            </View>
            <View style={styles.checkboxWrap}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  active={values.service}
                  onPress={() =>
                    handleOnChangeCheck('service', !values.service)
                  }
                />
                <Typography
                  variant="subheadline"
                  color={Colors.text_secondary}
                  customStyles={styles.agreeText}>
                  [필수] 서비스 이용약관 동의
                </Typography>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  active={values.personalInfo}
                  onPress={() =>
                    handleOnChangeCheck('personalInfo', !values.personalInfo)
                  }
                />
                <Typography
                  variant="subheadline"
                  color={Colors.text_secondary}
                  customStyles={styles.agreeText}>
                  [필수] 개인정보 처리방침 동의
                </Typography>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  active={values.marketing}
                  onPress={() =>
                    handleOnChangeCheck('marketing', !values.marketing)
                  }
                />
                <Typography
                  variant="subheadline"
                  color={Colors.text_secondary}
                  customStyles={styles.agreeText}>
                  [선택] 마케팅 수신 동의
                </Typography>
              </View>
            </View>
            <Button
              type="primary"
              disabled={!(values.service && values.personalInfo)}
              onPress={() => {
                bottomSheetModalRef.current.close();
                navigation.navigate('Nickname');
              }}>
              확인
            </Button>
          </View>
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
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
  bottomSheetHandle: {
    display: 'none',
  },
  bottomSheetContainer: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  outlined: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.system_grey_5,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 17,
    marginBottom: 20,
  },
  checkboxWrap: {
    paddingHorizontal: 16,
    marginBottom: 28,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  allAgreeText: {
    paddingLeft: 8.51,
  },
  agreeText: {
    color: '#75777B',
    paddingLeft: 10,
    paddingRight: 2,
  },
});

export default Password;
