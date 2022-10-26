import React, { useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { GlobalStyles, Colors } from '../../assets/theme'
import {
  StatusBar,
  ScrollView,
  View,
  Pressable,
  StyleSheet
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Checkbox,
  Input,
  Typography,
  Modal,
  Button,
  Icons
} from '../../components/common'

function CreateSodosi(props) {
  const { navigation } = props

  const [values, setValues] = useState({
    emoji: null,
    sodosiName: '',
    isPublic: true
  })
  const [isExpectOpen, setExpectOpen] = useState(false)
  const [isCelebrationOpen, setCelebrationOpen] = useState(false)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => {
            if (values.emoji !== null || values.sodosiName !== '') {
              setExpectOpen(true)
            } else {
              navigation.goBack()
            }
          }}>
          <Icons id="back-arrow" width={24} height={24} />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable
          disabled={values.emoji === null || values.sodosiName === ''}
          onPress={handleOnSubmit}>
          <Typography
            variant="callout"
            color={
              values.emoji !== null && values.sodosiName !== ''
                ? Colors.text_primary
                : Colors.text_tertiary
            }>
            {' '}
            완료
          </Typography>
        </Pressable>
      )
    })
  }, [values])

  const handleOnSubmit = () => {
    setCelebrationOpen(true)
  }

  const handleClose = (type, isReset = false) => {
    if (type === 'expect') {
      setExpectOpen(false)
    } else if (type === 'celebration') {
      setCelebrationOpen(false)
    }
    if (isReset) {
      navigation.goBack()
      setValues({
        emoji: null,
        sodosiName: '',
        isPublic: true
      })
    }
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View style={[GlobalStyles.centerVertical, styles.createWrap]}>
              <View style={[GlobalStyles.center, styles.circle]}>
                {values.emoji !== null ? (
                  <Typography customStyles={styles.emoji}>
                    {String.fromCodePoint(values.emoji)}
                  </Typography>
                ) : (
                  <Pressable
                    onPress={() => {
                      const min = 128512
                      const max = 128591
                      const emoji = Math.floor(
                        Math.random() * (max - min + 1) + min
                      )
                      setValues({ ...values, emoji: `0x${emoji.toString(16)}` })
                    }}
                    style={[GlobalStyles.center, styles.addWrap]}>
                    <Icons
                      id="smile"
                      width={28}
                      height={28}
                      color={Colors.system_grey_3}
                      customStyles={styles.smileIcon}
                    />
                    <Icons
                      id="add"
                      width={18}
                      height={18}
                      color={Colors.system_grey_3}
                      customStyles={styles.addIcon}
                    />
                  </Pressable>
                )}
              </View>

              <Input
                value={values.sodosiName}
                onChangeText={(value) => {
                  setValues({ ...values, sodosiName: value })
                }}
                placeholder="ex. 선릉역 직장인들의 점심 맛집"
                customStyles={styles.input}
                autoFocus
              />
            </View>

            <View style={styles.separator} />

            <View>
              <Typography
                variant="subheadline"
                color={Colors.base_black}
                customStyles={styles.subheadline}
                bold>
                소도시 공개여부
              </Typography>
              <View
                style={[
                  GlobalStyles.flexRow,
                  GlobalStyles.centerVertical,
                  { marginBottom: 18 }
                ]}>
                <Checkbox
                  active={values.isPublic}
                  onPress={() => setValues({ ...values, isPublic: true })}
                  customStyles={styles.checkbox}
                />
                <View>
                  <Typography variant="body" color={Colors.text_primary} bold>
                    공개
                  </Typography>
                  <Typography variant="caption" color={Colors.text_secondary}>
                    다른 사람과 소도시를 공유할 수 있습니다.
                  </Typography>
                </View>
              </View>

              <View style={[GlobalStyles.flexRow, GlobalStyles.centerVertical]}>
                <Checkbox
                  active={!values.isPublic}
                  onPress={() => setValues({ ...values, isPublic: false })}
                  customStyles={styles.checkbox}
                />
                <View>
                  <Typography variant="body" color={Colors.text_primary} bold>
                    비공개
                  </Typography>
                  <Typography variant="caption" color={Colors.text_secondary}>
                    나만 볼 수 있습니다.
                  </Typography>
                </View>
              </View>
            </View>
          </View>

          <Modal isVisible={isExpectOpen}>
            <View style={styles.expectTitleWrap}>
              <Typography
                variant="headline"
                color={Colors.base_black}
                customStyles={styles.modalTitle}>
                만드실 도시...기대하고 있어요!
              </Typography>
              <Typography variant="body" color={Colors.text_secondary}>
                중단 시 만들고 계신 소도시가 저장되지 않아요.{'\n'}
                정말 나가시겠어요?
              </Typography>
            </View>
            <View style={GlobalStyles.flexRow}>
              <Pressable
                style={[
                  GlobalStyles.flex1,
                  GlobalStyles.centerVertical,
                  styles.expectButton
                ]}
                onPress={() => handleClose('expect', true)}>
                <Typography variant="callout" color={Colors.text_primary} bold>
                  나가기
                </Typography>
              </Pressable>
              <Pressable
                style={[
                  GlobalStyles.flex1,
                  GlobalStyles.centerVertical,
                  styles.expectButton
                ]}
                onPress={() => handleClose('expect')}>
                <Typography variant="callout" color={Colors.green_600} bold>
                  이어하기
                </Typography>
              </Pressable>
            </View>
          </Modal>

          <Modal isVisible={isCelebrationOpen}>
            <View style={styles.celebrationTitleWrap}>
              <Typography
                variant="headline"
                color={Colors.base_black}
                customStyles={styles.modalTitle}>
                첫 소도시 건설을 축하해요!🎉
              </Typography>
              <Typography variant="body" color={Colors.text_secondary}>
                시장님의 취향이 듬뿍 담긴 도시가 완성됐어요!{'\n'}꽤 멋진 도시가
                될 것 같은데요?
              </Typography>
            </View>
            <View style={styles.celebrationButtonWrap}>
              <Button type="primary" height={48}>
                <Typography variant="callout" color={Colors.base_white} bold>
                  장소 추가하기
                </Typography>
              </Button>
              <Pressable
                style={[GlobalStyles.centerVertical, styles.celebrationButton]}
                onPress={() => handleClose('celebration', true)}>
                <Typography variant="callout" color={Colors.text_primary} bold>
                  나중에 하기
                </Typography>
              </Pressable>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.base_white
  },
  avoid: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.base_white,
    paddingHorizontal: 20
  },
  createWrap: {
    paddingTop: 24
  },
  circle: {
    width: 222,
    height: 222,
    borderRadius: 222,
    backgroundColor: Colors.system_bg_tertiary,
    marginBottom: 34
  },
  emoji: {
    fontSize: 70
  },
  addWrap: {
    position: 'relative',
    width: 65,
    height: 65,
    borderRadius: 65,
    backgroundColor: Colors.base_white,
    boxShadow:
      '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)'
  },
  smileIcon: {
    position: 'absolute',
    top: 23.27,
    left: 14.28
  },
  addIcon: {
    position: 'absolute',
    top: 13,
    right: 11
  },
  input: {
    backgroundColor: 'transparent'
  },
  separator: {
    backgroundColor: Colors.system_grey_6,
    height: 1,
    marginVertical: 28
  },
  subheadline: {
    marginBottom: 24
  },
  checkbox: {
    marginRight: 16
  },
  expectTitleWrap: {
    paddingTop: 24,
    paddingHorizontal: 24,
    marginBottom: 8
  },
  expectButton: {
    padding: 24
  },
  celebrationTitleWrap: {
    padding: 24,
    marginBottom: 8
  },
  celebrationButtonWrap: {
    paddingHorizontal: 24,
    paddingBottom: 8
  },
  celebrationButton: {
    paddingVertical: 16
  },
  modalTitle: {
    marginBottom: 12
  }
})

CreateSodosi.defaultProps = {}

CreateSodosi.propTypes = {
  navigation: PropTypes.object
}

export default CreateSodosi
