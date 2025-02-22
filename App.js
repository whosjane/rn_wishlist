import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import { TextInput } from "react-native";

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


//검색 스크린
const SearchScreen = ({navigation}) => {
  const [searchText, setSearchText] = React.useState("");
  return (
  <View style={styles.SearchCon}>
    {/* 검색창 영역 */}
    <View style={styles.searchBarCon}>
      <Button title="⇦" color="#000000" 
              onPress={() => navigation.navigate("Home")}/>
      <TextInput
        style={styles.searchInput}
        placeholder="검색어 또는 URL 입력"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="🔍"
              onPress={() => navigation.navigate("Home")}/>
      </View>
      {/* 기록 영역 */}
      <View style={styles.historyCon}>
      <Text style={styles.history}>최근 검색어</Text>
      </View>
  </View>
  );
  };
export {SearchScreen};


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
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
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
    padding: 10,
    marginTop: 60,
  },
  searchBarCon: {
    flexDirection: "row",  
    alignItems: "center",   
    borderWidth: 1,
    borderColor: "#ccc",
    borderBottomColor: "#ddd",
    borderRadius: 50,
    paddingHorizontal: 10,
    width: "100%",
  },
  searchInput: {
    flex: 1,  
    height: 40,
    fontSize: 16,
    marginLeft: 10, 
  },
  historyCon: {
    flex: 1,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    marginTop: 15,
  },
  history: {
    fontSize: 16,
    marginTop: 15,
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