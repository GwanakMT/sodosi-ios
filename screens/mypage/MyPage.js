import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import UserIcon from '../../assets/images/icon/user.svg'
import CameraIcon from '../../assets/images/icon/camera.svg'
import EditIcon from '../../assets/images/icon/edit.svg'
import RightArrow from '../../assets/images/icon/rightArrow.svg'
import { GlobalStyles, Colors } from '../../assets/theme'
import { StatusBar, View, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { Typography } from '../../components/common'

function MyPage(props) {
  const { navigation } = props

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.userInfo}>
            <View style={[GlobalStyles.flexRow, GlobalStyles.centerVertical]}>
              <View style={styles.profileWrap}>
                <View style={[GlobalStyles.center, styles.profile]}>
                  <UserIcon color={Colors.system_grey_3} />
                </View>
                <View style={[GlobalStyles.center, styles.camera]}>
                  <CameraIcon />
                </View>
              </View>
              <View>
                <View
                  style={[GlobalStyles.flexRow, GlobalStyles.centerVertical]}>
                  <Typography
                    variant="headline"
                    color={Colors.text_primary}
                    customStyles={styles.userName}
                    bold>
                    중구구립도서관
                  </Typography>
                  <Pressable onPress={() => navigation.navigate('ChangeNickname')}>
                    <EditIcon />
                  </Pressable>
                </View>
                <Typography variant="caption" color={Colors.text_secondary}>
                  n시간 전 방문
                </Typography>
              </View>
            </View>
          </View>
          <View
            style={[GlobalStyles.flexRow, GlobalStyles.center, styles.summary]}>
            <Pressable style={GlobalStyles.flex1}>
              <Typography
                variant="callout"
                color={Colors.text_primary}
                align="center"
                bold>
                35
              </Typography>
              <Typography
                variant="caption"
                color={Colors.text_secondary}
                align="center">
                내가 만든 소도시
              </Typography>
            </Pressable>
            <View style={styles.separator} />
            <Pressable style={GlobalStyles.flex1}>
              <Typography
                variant="callout"
                color={Colors.text_primary}
                align="center"
                bold>
                35
              </Typography>
              <Typography
                variant="caption"
                color={Colors.text_secondary}
                align="center">
                참여 중인 소도시
              </Typography>
            </Pressable>
            <View style={styles.separator} />
            <Pressable style={GlobalStyles.flex1}>
              <Typography
                variant="callout"
                color={Colors.text_primary}
                align="center"
                bold>
                35
              </Typography>
              <Typography
                variant="caption"
                color={Colors.text_secondary}
                align="center">
                북마크
              </Typography>
            </Pressable>
          </View>

          <View style={styles.momentWrap}>
            <Typography
              variant="headline"
              color={Colors.text_primary}
              customStyles={styles.title}>
              최근 내가 남긴 순간 💬
            </Typography>
            {_.range(0, 3, 1).map((data, i) => (
              <View style={[styles.moment, i !== 0 && styles.momentBorder]}>
                <Typography
                  variant="subheadline"
                  color={Colors.text_primary}
                  customStyles={styles.placeName}
                  bold>
                  어메이징브루잉컴퍼니
                </Typography>
                <View>
                  <View style={GlobalStyles.flexRow}>
                    <View
                      style={[GlobalStyles.centerVertical, styles.imageWrap]}>
                      <View style={styles.userImage} />
                      <View style={styles.verticalLine} />
                    </View>
                    <View style={GlobalStyles.flex1}>
                      <View
                        style={[
                          GlobalStyles.flexRow,
                          styles.placeUserNameWrap
                        ]}>
                        <Typography
                          variant="caption"
                          customStyles={styles.placeUserName}
                          color={Colors.text_primary}>
                          중구도서관
                        </Typography>
                        <Typography
                          variant="caption"
                          color={Colors.text_tertiary}>
                          1분 전
                        </Typography>
                      </View>
                      <Typography
                        variant="body"
                        color={Colors.text_primary}
                        customStyles={styles.contents}>
                        청춘 무한한 속에서 천하를 인간에 피가 따뜻한 청춘의
                        열락의 운다. 인생에 가는 피고, 생명을 노려버리기...
                      </Typography>
                      <View style={styles.image} />
                    </View>
                  </View>
                  <View
                    style={[
                      GlobalStyles.flexRow,
                      GlobalStyles.centerVertical,
                      styles.sodosiInfo
                    ]}>
                    <View style={styles.sodosiImage} />
                    <Typography
                      variant="caption"
                      color={Colors.text_primary}
                      customStyles={styles.sodosiName}>
                      “우리 동네 힙한 LP바”에서
                    </Typography>
                    <RightArrow />
                  </View>
                </View>
              </View>
            ))}
          </View>
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
  container: {
    flex: 1,
    backgroundColor: Colors.base_white
  },
  userInfo: {
    paddingTop: 14,
    paddingBottom: 22,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: Colors.system_grey_6
  },
  profileWrap: {
    position: 'relative',
    paddingRight: 18
  },
  profile: {
    width: 72,
    height: 72,
    borderWidth: 1,
    borderColor: Colors.system_grey_6,
    borderRadius: 8,
    backgroundColor: Colors.system_bg_tertiary
  },
  camera: {
    position: 'absolute',
    right: 6,
    bottom: -6,
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: Colors.system_grey_6,
    borderRadius: 32,
    backgroundColor: Colors.base_white
  },
  userName: {
    paddingRight: 8
  },
  summary: {
    paddingTop: 19,
    paddingBottom: 20,
    borderBottomWidth: 8,
    borderColor: Colors.system_bg_tertiary
  },
  separator: {
    width: 1,
    height: 32,
    backgroundColor: Colors.system_grey_6
  },
  momentWrap: {
    paddingTop: 26,
    paddingHorizontal: 20
  },
  moment: {
    paddingVertical: 20
  },
  momentBorder: {
    borderTopWidth: 1,
    borderColor: Colors.system_grey_6
  },
  title: {
    marginBottom: 6,
    lineHeight: 24
  },
  placeName: {
    paddingBottom: 10
  },
  imageWrap: {
    marginRight: 10
  },
  userImage: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: Colors.system_grey_6,
    marginTop: 4,
    marginBottom: 8
  },
  verticalLine: {
    width: 2,
    height: 200,
    backgroundColor: Colors.system_grey_6
  },
  placeUserNameWrap: {
    paddingBottom: 6
  },
  placeUserName: {
    paddingRight: 6
  },
  contents: {
    paddingBottom: 12
  },
  image: {
    height: 140,
    borderRadius: 8,
    backgroundColor: Colors.system_grey_6
  },
  sodosiInfo: {
    marginTop: 8
  },
  sodosiImage: {
    width: 24,
    height: 24,
    borderRadius: 40,
    backgroundColor: Colors.system_grey_5,
    marginRight: 10
  },
  sodosiName: {
    paddingRight: 4
  }
})

MyPage.defaultProps = {}

MyPage.propTypes = {
  navigation: PropTypes.object
}

export default MyPage
