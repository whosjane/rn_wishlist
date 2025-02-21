import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"

const Stack = createStackNavigator();

// 홈스크린
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.HomeCon}>
      {/* 이미지영역 */}
      <View style={styles.imageCon}>
        <Text style={styles.image}>Image</Text>
      </View>

      {/* 브랜드 영역 */}
      <View style={styles.brandCon}>
        <Text style={styles.brand}>브랜드</Text>
        <View style={styles.brandBtnGroup}>
          {["패션", "뷰티", "액세서리", "라이프"].map((title) => (
            <View style={styles.btnWrapper} key={title}>
              <Button title={title} color="#000000" />
            </View>
          ))}
        </View>
      </View>

      {/* 피드 영역 */}
      <ScrollView horizontal pagingEnabled style={styles.feedCon}>
        <View style={styles.feedInner}>
          <Text style={styles.feed}>모아보기</Text>
          <View style={styles.feedBtnGroup}>
            {Array(6)
              .fill("피드")
              .map((title, index) => (
                <View style={styles.btnWrapper} key={index}>
                  <Button title={title} color="#000000" />
                </View>
              ))}
          </View>
        </View>
      </ScrollView>

      {/* 하단탭 영역 */}
      <View style={styles.bottomCon}>
      <View style={styles.bottomBtnGroup}>
          {["🏠", "🔍", "❤️", "👤"].map((icon,index) => (
            <View style={styles.btnWrapper} key={icon}>
              <Button title={icon}
               onPress={() => {
                if (index === 0) {
                  navigation.navigate('Home'); // 홈 화면
                } else if (index === 1) {
                  navigation.navigate('Search'); // 검색 화면
                } else if (index === 2) {
                  navigation.navigate('Favorites'); // 즐겨찾기 화면
                } else if (index === 3) {
                  navigation.navigate('Profile'); // 프로필 화면
                }
              }} />
            </View>
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );};
export { HomeScreen };

const SearchScreen = () => (
  <View style={styles.SearchCon}>
    <Text style={styles.search}>검색창</Text>
  </View>
);

const FavoriteScreen = () => (
  <View style={styles.FavoriteCon}>
    <Text style={styles.favorite}>위시리스트창</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.ProfileCon}>
    <Text style={styles.profile}>마이페이지창</Text>
  </View>
);

const NavigationSection = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Favorites" component={FavoriteScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
      <NavigationSection />  
  );
}

// 스타일
const styles = StyleSheet.create({
  HomeCon: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageCon: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    fontSize: 50,
    textAlign: "center",
  },
  brandCon: {
    flex: 0.5,
    width: "100%",
  },
  brand: {
    fontSize: 20,
  },
  brandBtnGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },
  btnWrapper: {
    margin: 5,
  },
  feedCon: {
    flex: 2,
    width: "100%",
  },
  feedInner: {},
  feed: {
    fontSize: 20,
    marginBottom: 10,
  },
  feedBtnGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  bottomCon: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  bottomBtnGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },

  navItem: {
    flex: 1,
    alignItems: "center",
  },
  SearchCon: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  search: {
    fontSize: 50,
    textAlign: "center",
  },
  
  FavoriteCon: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  favorite: {
    fontSize: 50,
    textAlign: "center",
  },
  ProfileCon: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profile: {
    fontSize: 50,
    textAlign: "center",
  },
});