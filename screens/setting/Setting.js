import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GlobalStyles, Colors } from '../../assets/theme'
import {
  StatusBar,
  View,
  SectionList,
  Pressable,
  StyleSheet
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Typography, Modal, Icons } from '../../components/common'

function Setting(props) {
  const { navigation } = props

  const [isQuitOpen, setQuitOpen] = useState(false)

  const SETTING_LIST = [
    {
      title: '계정 설정',
      data: [
        { key: 'phone', label: '전화번호' },
        {
          key: 'password',
          label: '비밀번호 변경',
          callback: () => navigation.navigate('ChangePassword')
        },
        {
          key: 'push',
          label: '앱 알림 설정',
          callback: () => navigation.navigate('PushSetting')
        }
      ]
    },
    {
      title: '약관 및 정책',
      data: [
        { key: '', label: '이용약관' },
        { key: '', label: '개인정보 처리 방침' },
        { key: '', label: '오픈소스 고지' }
      ]
    },
    {
      title: '앱 버전 정보',
      data: [
        { key: 'version', label: '버전 정보' },
        { key: '', label: '소도시를 만든 사람들' }
      ]
    },
    {
      title: null,
      data: [
        { key: '', label: '로그아웃' },
        { key: '', label: '탈퇴하기', callback: () => setQuitOpen(true) }
      ]
    }
  ]

  const handleClose = () => {
    setQuitOpen(false)
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <SectionList
          sections={SETTING_LIST}
          renderSectionHeader={({ section }) => {
            const index = SETTING_LIST.indexOf(section)
            return (
              <View style={index !== 0 && styles.sectionHeader}>
                {section.title !== null ? (
                  <View style={styles.sectionTitle}>
                    <Typography
                      variant="subheadline"
                      color={Colors.text_primary}
                      bold>
                      {section.title}
                    </Typography>
                  </View>
                ) : (
                  <View />
                )}
              </View>
            )
          }}
          renderItem={({ item }) => (
            <Pressable
              onPress={item.callback ? () => item.callback() : () => {}}
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.flexSpaceBetween,
                styles.item
              ]}>
              <Typography variant="subheadline" color={Colors.text_primary}>
                {item.label}
              </Typography>
              <View style={GlobalStyles.flexRow}>
                {item.key === 'phone' && (
                  <Typography
                    variant="subheadline"
                    color={Colors.text_tertiary}
                    customStyles={styles.phone}>
                    01012345678
                  </Typography>
                )}
                {(item.key === 'phone' ||
                  item.key === 'password' ||
                  item.key === 'push') && (
                  <Icons
                    id="right-arrow"
                    width={20}
                    height={20}
                    viewBox="0 0 16 16"
                    color={Colors.system_grey_3}
                  />
                )}
                {item.key === 'version' && (
                  <View
                    style={[GlobalStyles.flexRow, GlobalStyles.centerVertical]}>
                    <View style={styles.symbol} />
                    <Typography
                      variant="subheadline"
                      color={Colors.text_primary}
                      bold>
                      0.1.5
                    </Typography>
                  </View>
                )}
              </View>
            </Pressable>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
        />

        <Modal isVisible={isQuitOpen}>
          <View style={styles.quitTitleWrap}>
            <Typography
              variant="headline"
              color={Colors.base_black}
              customStyles={styles.modalTitle}
              bold>
              떠나신다니 아쉬워요
            </Typography>
            <Typography variant="body" color={Colors.text_secondary}>
              함께 만들었던 모든 기록들이 사라져요.{'\n'}정말 탈퇴하실 건까요?
            </Typography>
          </View>
          <View style={GlobalStyles.flexRow}>
            <Pressable
              style={[
                GlobalStyles.flex1,
                GlobalStyles.centerVertical,
                styles.quitButton
              ]}>
              <Typography variant="callout" color={Colors.text_primary} bold>
                탈퇴하기
              </Typography>
            </Pressable>
            <Pressable
              style={[
                GlobalStyles.flex1,
                GlobalStyles.centerVertical,
                styles.quitButton
              ]}
              onPress={handleClose}>
              <Typography variant="callout" color={Colors.green_600} bold>
                아니오
              </Typography>
            </Pressable>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.base_white
  },
  container: {
    flex: 1,
    backgroundColor: Colors.base_white
  },
  separator: {
    height: 1,
    backgroundColor: Colors.system_grey_6,
    marginHorizontal: 20
  },
  sectionHeader: {
    borderTopWidth: 8,
    borderColor: Colors.system_bg_tertiary,
    marginTop: 6
  },
  sectionTitle: {
    paddingTop: 20,
    marginBottom: 6,
    paddingHorizontal: 20
  },
  item: {
    padding: 20
  },
  phone: {
    marginRight: 4
  },
  symbol: {
    width: 6,
    height: 6,
    borderRadius: 6,
    marginRight: 8,
    backgroundColor: Colors.green_600
  },
  quitTitleWrap: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 8
  },
  quitButton: {
    padding: 24
  },
  modalTitle: {
    marginBottom: 12
  }
})

Setting.defaultProps = {}

Setting.propTypes = {
  navigation: PropTypes.object
}

export default Setting
