import React, {useState} from 'react';
import Colors from '../../assets/theme/colors';
import GlobalStyles from '../../assets/theme/globalStyles';
import {StatusBar, View, Switch, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Typography} from '../../components/common';

function PushSetting(props) {
  const [isNotification, setNotification] = useState(false);
  const [isRecommend, setRecommend] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.flexSpaceBetween,
            GlobalStyles.centerVertical,
            styles.item,
            styles.border,
          ]}>
          <View>
            <Typography
              variant="subheadline"
              color={Colors.text_primary}
              customStyles={styles.title}>
              소도시, 댓글 알림
            </Typography>
            <Typography variant="caption" color={Colors.text_tertiary}>
              내 소도시 알림, 댓글 등의 알림이 전송돼요.
            </Typography>
          </View>
          <Switch
            trackColor={{false: Colors.system_grey_5, true: Colors.green_600}}
            thumbColor={Colors.base_white}
            ios_backgroundColor={Colors.system_grey_5}
            onValueChange={() => setNotification(!isNotification)}
            value={isNotification}
          />
        </View>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.flexSpaceBetween,
            GlobalStyles.centerVertical,
            styles.item,
          ]}>
          <View>
            <Typography
              variant="subheadline"
              color={Colors.text_primary}
              customStyles={styles.title}>
              소도시 추천
            </Typography>
            <Typography variant="caption" color={Colors.text_tertiary}>
              내 취향을 저격하는 소도시 추천이 전송돼요.
            </Typography>
          </View>
          <Switch
            trackColor={{false: Colors.system_grey_5, true: Colors.green_600}}
            thumbColor={Colors.base_white}
            ios_backgroundColor={Colors.system_grey_5}
            onValueChange={() => setRecommend(!isRecommend)}
            value={isRecommend}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.base_white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.base_white,
    paddingHorizontal: 20,
  },
  item: {
    paddingVertical: 20,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: Colors.system_grey_6,
  },
  title: {
    marginBottom: 4,
  },
});

export default PushSetting;
