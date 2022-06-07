import React, {useState, useRef} from 'react';
import Colors from '../../assets/theme/colors';
import Camera from '../../assets/images/camera.png';
import Cafe from '../../assets/images/cafe.png';
import Qwanak from '../../assets/images/qwanak.svg';
import BookmarkIcon from '../../assets/images/icon/bookmark.svg';
import TopButton from '../../assets/images/icon/topButton.svg';
import ListItem from './ListItem';
import {
  StatusBar,
  ScrollView,
  View,
  Image,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Typography, Button} from '../../components/common';

function Home(props) {
  const {navigation} = props;

  const scrollView = useRef();

  const [page, setPage] = useState(0);

  const handleScrollToTop = (x = 0, y = 0, animated = true) => {
    scrollView.current.scrollTo({x, y, animated});
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView ref={scrollView}>
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

        <View style={{marginBottom: 43}}>
          <FlatList
            data={[
              {
                title: '똥손인 나도\n여기서 찍으면 인생샷!',
                color: Colors.green_800,
                image: Camera,
              },
              {
                title: '댕댕이를 위한\n베스트 산책 코스',
                color: Colors.system_tint_yellow,
              },
              {
                title: '나만 알고 싶은\n공부하기 좋은 카페',
                color: Colors.system_tint_indigo,
                image: Cafe,
              },
              {
                title: '직접 가보면\n을씨년스러운 장소',
                color: Colors.system_tint_orange,
              },
            ]}
            renderItem={({item}) => (
              <View
                style={{
                  position: 'relative',
                  height: 363,
                  marginLeft: 6,
                  marginRight: 6,
                }}>
                <View
                  style={{
                    width: 281,
                    height: 308,
                    backgroundColor: item.color,
                    borderRadius: 8,
                    padding: 24,
                    overflow: 'hidden',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingBottom: 6,
                    }}>
                    <Typography variant="title3" color={Colors.base_white} bold>
                      {item.title}
                    </Typography>
                    <BookmarkIcon />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Typography variant="body" color={Colors.base_white}>
                      34명의 소시민들
                    </Typography>
                    <Typography variant="body" color={Colors.base_white}>
                      |
                    </Typography>
                    <Typography variant="body" color={Colors.base_white}>
                      50개의 순간
                    </Typography>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      left: -6,
                      bottom: -48,
                      width: 298,
                      height: 149,
                      backgroundColor: '#00000014',
                      borderRadius: 298,
                    }}
                  />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    left: 17,
                    bottom: 0,
                  }}>
                  <Image
                    source={item.image}
                    style={[styles.gif, {width: 247, height: 255}]}
                  />
                </View>
              </View>
            )}
            onScroll={e => {
              const currentPage = Math.round(
                e.nativeEvent.contentOffset.x / (281 + 12),
              );
              setPage(currentPage);
            }}
            contentContainerStyle={{
              paddingHorizontal: 47 + 12 / 6,
            }}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            snapToInterval={293}
            snapToAlignment="start"
            pagingEnabled
            horizontal
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {[
              {color: Colors.green_800},
              {color: Colors.system_tint_yellow},
              {color: Colors.system_tint_indigo},
              {color: Colors.system_tint_orange},
            ].map((data, i) =>
              i === page ? (
                <Pressable
                  style={{
                    width: 24,
                    height: 6,
                    borderRadius: 30,
                    backgroundColor: data.color,
                    marginRight: 8,
                  }}
                  onPress={() => setPage(i)}
                />
              ) : (
                <Pressable
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 6,
                    backgroundColor: Colors.system_grey_6,
                    marginRight: 8,
                  }}
                  onPress={() => setPage(i)}
                />
              ),
            )}
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
            {[
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
            ].map((data, i) => (
              <ListItem key={i} data={data} />
            ))}
          </View>

          <View style={styles.sodosiContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24,
              }}>
              <Typography variant="headline">내 관심 소도시 👍</Typography>
              <Pressable
                onPress={() => navigation.navigate('InterestedSodosi')}>
                <Typography variant="subheadline" color={Colors.text_secondary}>
                  전체 보기
                </Typography>
              </Pressable>
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
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>

          <View style={styles.sodosiContent}>
            <Typography variant="headline" customStyles={styles.title}>
              지금 HOT한 소도시 🔥
            </Typography>
            {[
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
            ].map((data, i) => (
              <ListItem
                index={i}
                data={data}
                isShowRank={true}
                isShowBookmark={true}
              />
            ))}
            <Button type="outlined" customStyles={{marginTop: 8}}>
              더보기
            </Button>
          </View>

          <View style={[styles.sodosiContent, {marginBottom: 0}]}>
            <Typography variant="headline" customStyles={styles.title}>
              새롭게 추천하는 소도시 👋
            </Typography>
            {[
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
            ].map((data, i) => (
              <ListItem key={i} data={data} isShowBookmark={true} />
            ))}
            <Button type="outlined" customStyles={{marginTop: 8}}>
              더보기
            </Button>
          </View>
        </View>

        <View style={styles.footer}>
          <Qwanak style={styles.team} />
          <Pressable
            style={styles.topButton}
            onPress={() => handleScrollToTop(0, 0, true)}>
            <TopButton />
          </Pressable>
          <View style={styles.linkWrap}>
            <Typography
              color={Colors.text_secondary}
              customStyles={styles.link}
              semiBold>
              블로그
            </Typography>
            <Typography
              color={Colors.text_secondary}
              customStyles={styles.link}
              semiBold>
              인스타그램
            </Typography>
            <Typography
              color={Colors.text_secondary}
              customStyles={styles.link}
              semiBold>
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
    position: 'relative',
    backgroundColor: Colors.system_bg_tertiary,
    paddingTop: 32,
    padding: 20,
  },
  team: {
    marginBottom: 24,
  },
  topButton: {
    position: 'absolute',
    top: 26,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 52,
    backgroundColor: Colors.base_white,
    borderRadius: 52,
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

export default Home;
