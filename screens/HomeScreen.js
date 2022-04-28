import React from 'react';
import Colors from '../assets/theme/colors';
import Qwanak from '../assets/images/qwanak.svg';
import BookmarkIcon from '../assets/images/icon/bookmark.svg';
import {StatusBar, ScrollView, View, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Typography, Button} from '../components/common';

const ListItem = props => {
  const {index, data, isShowRank, isShowBookmark} = props;
  return (
    <View style={styles.sodosiItem}>
      <View style={styles.itemContent}>
        {isShowRank && (
          <Typography
            variant="callout"
            color={Colors.text_tertiary}
            customStyles={styles.rank}
            bold>
            {index + 1}
          </Typography>
        )}
        <View style={styles.img}>
          <Typography>🐥</Typography>
        </View>
        <View>
          <Typography variant="callout" color={Colors.text_primary} bold>
            {data.name}
          </Typography>
          <View style={styles.description}>
            <Typography variant="caption" color={Colors.system_grey_2}>
              {data.people}명의 소시민들 |
            </Typography>
            <Typography variant="caption" color={Colors.system_grey_2}>
              {data.moment}개의 순간
            </Typography>
          </View>
        </View>
      </View>
      {isShowBookmark && (
        <View>
          <BookmarkIcon />
        </View>
      )}
    </View>
  );
};

function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.suggestion}>
            <Typography variant="headline" customStyles={{paddingBottom: 8}}>
              🗺 나만의 지도를 만들어보세요
            </Typography>
            <Typography
              variant="caption"
              color={Colors.text_secondary}
              customStyles={{paddingBottom: 20}}>
              언제든지 내 취향을 가득 담은 지도를 만들 수 있어요{'\n'}
              평소에 좋아했던 곳으로 시작하면 어떨까요?
            </Typography>
            <View style={styles.buttonWrap}>
              <Button
                type="primary"
                size="small"
                customStyles={{marginRight: 8}}>
                지금 시작하기
              </Button>
              <Button size="small">일단 구경하기</Button>
            </View>
          </View>
        </View>

        <View style={styles.sodosiContainer}>
          <View
            style={[
              styles.sodosiContent,
              {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingTop: 38,
                padding: 20,
                shadowColor: 'rgb(6, 16, 27)',
                shadowOpacity: 0.07,
                shadowOffset: {width: 0, height: -10},
                shadowRadius: 18,
              },
            ]}>
            <Typography variant="headline" customStyles={styles.title}>
              내가 참여 중인 소도시 🔨
            </Typography>
            <FlatList
              data={[
                {
                  id: 0,
                  name: '힙에 취하고 싶을 때',
                  people: 34,
                  moment: 50,
                },
                {
                  id: 1,
                  name: '동국대 새내기들 필수코스',
                  people: 34,
                  moment: 50,
                },
                {
                  id: 2,
                  name: '비건들아 모여봐라',
                  people: 34,
                  moment: 50,
                },
              ]}
              renderItem={({item}) => <ListItem data={item} />}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>

          <View style={styles.sodosiContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 24,
              }}>
              <Typography variant="headline">내 관심 소도시 👍</Typography>
              <Typography variant="subheadline" color={Colors.text_secondary}>
                전체 보기
              </Typography>
            </View>
            <FlatList
              data={[
                {
                  id: 0,
                  icon: '🦉',
                  title: '올빼미들을 위한 새벽 바이브',
                  moment: 50,
                },
                {
                  id: 1,
                  icon: '🥯',
                  title: '심장이 스콘스콘',
                  moment: 50,
                },
                {
                  id: 2,
                  icon: '🌽',
                  title: '비건들아 모여봐라',
                  moment: 34,
                },
              ]}
              renderItem={({item}) => (
                <View>
                  <View style={styles.saveBox}>
                    <Typography>{item.icon}</Typography>
                  </View>
                  <Typography
                    variant="body"
                    color={Colors.text_primary}
                    customStyle={{paddingBottom: 2}}
                    bold>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color={Colors.text_secondary}>
                    {item.moment}개의 순간
                  </Typography>
                </View>
              )}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{marginRight: 10}} />}
              horizontal
            />
          </View>

          <View style={styles.sodosiContent}>
            <Typography variant="headline" customStyles={styles.title}>
              지금 HOT한 소도시 🔥
            </Typography>
            <FlatList
              data={[
                {
                  id: 0,
                  name: '힙에 취하고 싶을 때',
                  people: 34,
                  moment: 50,
                },
                {
                  id: 1,
                  name: '동국대 새내기들 필수코스',
                  people: 34,
                  moment: 50,
                },
                {
                  id: 2,
                  name: '비건들아 모여봐라',
                  people: 34,
                  moment: 50,
                },
              ]}
              renderItem={({item, index}) => (
                <ListItem
                  index={index}
                  data={item}
                  isShowRank={true}
                  isShowBookmark={true}
                />
              )}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
            <Button customStyles={{marginTop: 8}}>더보기</Button>
          </View>

          <View style={[styles.sodosiContent, {marginBottom: 0}]}>
            <Typography variant="headline" customStyles={styles.title}>
              새롭게 추천하는 소도시 👋
            </Typography>
            <FlatList
              data={[
                {
                  id: 0,
                  name: '힙에 취하고 싶을 때',
                  people: 34,
                  moment: 50,
                },
                {
                  id: 1,
                  name: '동국대 새내기들 필수코스',
                  people: 34,
                  moment: 50,
                },
                {
                  id: 2,
                  name: '비건들아 모여봐라',
                  people: 34,
                  moment: 50,
                },
              ]}
              renderItem={({item}) => (
                <ListItem data={item} isShowBookmark={true} />
              )}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
            <Button customStyles={{marginTop: 8}}>더보기</Button>
          </View>
        </View>

        <View style={styles.footer}>
          <Qwanak style={styles.team} />
          <View style={styles.linkWrap}>
            <Typography
              color={Colors.text_secondary}
              customStyles={styles.link}
              bold>
              블로그
            </Typography>
            <Typography
              color={Colors.text_secondary}
              customStyles={styles.link}
              bold>
              인스타그램
            </Typography>
            <Typography
              color={Colors.text_secondary}
              customStyles={styles.link}
              bold>
              커피 한 잔으로 응원하기
            </Typography>
          </View>
          <View>
            <Typography
              color={Colors.text_tertiary}
              customStyles={styles.copyright}>
              © 2022 소도시 All Rights Reserved
            </Typography>
          </View>
        </View>
      </ScrollView>
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
    justifyContent: 'space-between',
    backgroundColor: Colors.base_white,
    padding: 20,
  },
  suggestion: {
    borderWidth: 1,
    borderColor: Colors.system_grey_5,
    borderRadius: 8,
    padding: 20,
  },
  buttonWrap: {
    flexDirection: 'row',
  },
  sodosiContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.system_bg_tertiary,
  },
  sodosiContent: {
    paddingTop: 28,
    padding: 20,
    marginBottom: 8,
    backgroundColor: Colors.base_white,
  },
  title: {
    marginBottom: 8,
  },
  sodosiItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rank: {
    marginRight: 10,
  },
  img: {
    width: 72,
    height: 72,
    backgroundColor: Colors.system_grey_6,
    borderRadius: 37,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  separator: {
    backgroundColor: Colors.system_grey_6,
    height: 1,
  },
  saveBox: {
    width: 154,
    height: 106,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.system_grey_6,
    marginBottom: 12,
  },
  footer: {
    backgroundColor: Colors.system_bg_tertiary,
    paddingTop: 32,
    padding: 20,
  },
  team: {
    marginBottom: 24,
  },
  linkWrap: {
    marginBottom: 42,
  },
  link: {
    fontSize: 13,
    lineHeight: 13,
    paddingBottom: 14,
  },
  copyright: {
    fontSize: 12,
    lineHeight: 12,
  },
});

export default HomeScreen;
