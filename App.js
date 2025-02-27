import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image,  Button, ScrollView, TouchableOpacity, FlatList} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import { TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";




const Stack = createStackNavigator();
const dummyFeed = [
  {
    id: 1,
    user: "user 1",
    profileImage: "https://images.unsplash.com/photo-1601066551508-6d9cb1b9de65?q=80&w=2476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    wishlist: [
      { id: 1, image: "https://images.unsplash.com/photo-1601066551508-6d9cb1b9de65?q=80&w=2476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "아이템 1", price: "₩10,000" },
      { id: 2, image: "https://images.unsplash.com/photo-1601066551508-6d9cb1b9de65?q=80&w=2476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "아이템 2", price: "₩20,000" },
      { id: 3, image: "https://images.unsplash.com/photo-1601066551508-6d9cb1b9de65?q=80&w=2476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "아이템 3", price: "₩30,000" },
      { id: 4, image: "https://images.unsplash.com/photo-1601066551508-6d9cb1b9de65?q=80&w=2476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "아이템 4", price: "₩40,000" },

    ],
    likes: 20,
  },
  {
    id: 2,
    user: "user 2",
    profileImage: "https://images.unsplash.com/photo-1601066551508-6d9cb1b9de65?q=80&w=2476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    wishlist: [
      { id: 1, image: "https://images.unsplash.com/photo-1601066551508-6d9cb1b9de65?q=80&w=2476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "아이템 5", price: "₩50,000" },
    ],
    likes: 15,
  },
];

// 홈스크린
const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const route = useRoute();
  const { userId } = route.params || {};
  const [searchText, setSearchText] = useState("");

  const user = dummyFeed.find((user) => user.id === userId);

  return (
    <View style={styles.HomeCon}>
      {/* 이미지영역 */}
      <View style={styles.imageCon}>
        <Image source={require('./assets/homeImage.jpg')} style={styles.image} />
      </View>

      {/* 브랜드 영역 */}
       <View style={styles.brandCon}>
        <Text style={styles.brand}>브랜드</Text>
        <View style={styles.brandBtnGroup}>
          {["패션", "뷰티", "액세서리", "라이프"].map((title) => (
            <TouchableOpacity
              key={title}
              style={[
                styles.brandButton,
                selectedCategory === title && styles.selectedBrandButton,
              ]}
              onPress={() => setSelectedCategory(title)}
            >
              <Text
                style={[
                  styles.brandButtonText,
                  selectedCategory === title && styles.selectedBrandButtonText,
                ]}
              >
                {title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 피드 영역 */}
      <View style={styles.feedCon}>
  <Text style={styles.feed}>모아보기</Text>
  <FlatList
    data={dummyFeed}
    keyExtractor={(item) => item.id.toString()}
    horizontal
    renderItem={({ item }) => (
      <TouchableOpacity
        style={styles.userBox}
        onPress={() => navigation.navigate("Wishlist", { userId: item.id })}
      >
        {/* 미니 위시리스트 */}
        <View style={styles.userWishlistFeedConMini}>
          <View style={styles.miniItemsRow}>
            {item.wishlist.slice().reverse().map((wishlistItem, index) => (
              <View key={wishlistItem.id}
                    style={styles.miniItemContainer}>
                <Image
                  source={{ uri: wishlistItem.image }}
                  style={styles.miniItemImage}
                />
              </View>
            ))}
          </View>
        </View>
        {/* 유저 정보 */}
        <View style={styles.feedOwnerInfoConMini}>
          <Text style={styles.userName}>@{item.user}</Text>
        </View>

      </TouchableOpacity>
    )}
  />
</View>

       
    

      {/* 하단탭 영역 */}
      <View style={styles.bottomCon}>
      <View style={styles.bottomBtnGroup}>
          {["🏠", "🔍", "❤️", "👤"].map((icon,index) => (
            <View style={styles.btnWrapper} key={icon}>
              <Button title={icon}
               onPress={() => {
                if (index === 0) {
                  navigation.navigate('Home'); 
                } else if (index === 1) {
                  navigation.navigate('Search'); 
                } else if (index === 2) {
                  navigation.navigate('Wishlist'); 
                } else if (index === 3) {
                  navigation.navigate('Profile'); 
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
       {/* 하단탭 영역 */}
      <View style={styles.bottomCon}>
      <View style={styles.bottomBtnGroup}>
          {["🏠", "🔍", "❤️", "👤"].map((icon,index) => (
            <View style={styles.btnWrapper} key={icon}>
              <Button title={icon}
               onPress={() => {
                if (index === 0) {
                  navigation.navigate('Home');
                } else if (index === 1) {
                  navigation.navigate('Search'); 
                } else if (index === 2) {
                  navigation.navigate('Wishlist'); 
                } else if (index === 3) {
                  navigation.navigate('Profile'); 
                }
              }} />
            </View>
          ))}
        </View>
      </View>
   </View>
  );
  };
export {SearchScreen};

//위시리스트 스크린
const WishlistScreen = ({ navigation }) => {
  const route = useRoute();
  const { userId } = route.params || {};
  const [searchText, setSearchText] = useState("");

  const user = dummyFeed.find((user) => user.id === userId);

  return (
    <View style={styles.wishlistCon}>

      {/* 유저 정보 */}
      <View style={styles.feedOwnerInfoCon}>
      <Text style={styles.userName}>@{user?.user}</Text>
      </View>
      
      {/* 유저 위시리스트 레이아웃 */}
      <View style={styles.userWishlistFeedCon}>
       {/* 아이템들이 2개씩 세로로 나열 */}
       <View style={styles.itemsRow}>
         {user?.wishlist.slice().reverse().map((item, index) => (
          <View key={item.id}
                style={[styles.itemContainer,
                      { marginLeft: index % 2 === 0 ? 0 : 10 }, // 두 번째 아이템에만 간격 주기
                      ]}
          >
        {/* 아이템 이미지 */}
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        {/* 아이템 정보 */}
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
        ))}
       </View>
      </View>

      {/* 하단탭 영역 */}
      <View style={styles.bottomCon}>
        <View style={styles.bottomBtnGroup}>
          {["🏠", "🔍", "❤️", "👤"].map((icon, index) => (
            <View style={styles.btnWrapper} key={icon}>
              <Button
                title={icon}
                onPress={() => {
                  if (index === 0) {
                    navigation.navigate("Home");
                  } else if (index === 1) {
                    navigation.navigate("Search");
                  } else if (index === 2) {
                    navigation.navigate("Wishlist");
                  } else if (index === 3) {
                    navigation.navigate("Profile");
                  }
                }}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export { WishlistScreen };


const ProfileScreen = ({ navigation }) => {
  const [searchText, setSearchText] = React.useState("");
  return (
    <View style={styles.profileCon}>

      {/* 하단탭 영역 */}
      <View style={styles.bottomCon}>
        <View style={styles.bottomBtnGroup}>
          {["🏠", "🔍", "❤️", "👤"].map((icon, index) => (
            <View style={styles.btnWrapper} key={icon}>
              <Button
                title={icon}
                onPress={() => {
                  if (index === 0) {
                    navigation.navigate("Home"); 
                  } else if (index === 1) {
                    navigation.navigate("Search"); 
                  } else if (index === 2) {
                    navigation.navigate("Wishlist"); 
                  } else if (index === 3) {
                    navigation.navigate("Profile"); 
                  }
                }}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export { ProfileScreen };

const NavigationSection = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Wishlist" component={WishlistScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
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
    width: "100%",
    height: 200,
    marginTop: 80,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  brandCon: {
    flex: 1,
    width: "100%",
    marginVertical: 20,
  },
  brand: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  brandBtnGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  brandButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, 
    borderColor: "#000",
    backgroundColor: "#f0f0f0",
  },
  selectedBrandButton: {
    borderWidth: 1, 
  },
  brandButtonText: {
    fontSize: 16,
    color: "#696969",
  },
  selectedBrandButtonText: {
    color: "#000"
  },
  btnWrapper: {
    margin: 5,
  },
  feedCon: {
    flex: 3,
    width: "100%",
    marginTop: 20,
  },
  feed: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userBox: {
    width: 150, // 개별 피드 박스 크기
    height: 200,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  userWishlistFeedConMini: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",  // 너비를 100%로 설정
    height: "100%", // 높이를 명확하게 지정
    padding: 0,
    margin: 0,
  },
  userName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  userWishlistFeedConMini: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 0,  // 내부 여백 제거
    margin: 0,
  },
  miniItemsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",  // 너비 지정
    height: "100%", // 높이 지정
    margin: 0,
    padding: 0,
  },
  miniItemContainer: {
    width: 60, // 정확한 픽셀 크기 지정
    height: 60, // 높이도 동일하게 설정
    overflow: "hidden",
    margin: 0,
    padding: 0,
  },
  miniItemImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
  wishlistCon: {
    flex: 1,
    padding: 10,
    marginTop: 60,
  },
  feedOwnerInfoCon: { 
    padding: 20, 
    alignItems: "center",   
    borderColor: "#ccc",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    borderTopColor: "#ddd",
  },
  userName: {
    fontSize: 14,
  },
  userWishlistFeedCon: {
    flex: 3,
    marginTop: 30,
    width: "100%",
  },
  itemsRow: {
    flexDirection: "row",
    flexWrap: "wrap", // 아이템박스 넘칠 경우 자동으로 새로운 줄 배치
    justifyContent: "space-between", // 아이템박스 사이 공간
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "48%", //
    marginVertical: 5, // userInfoFeed 사이 공간
    height: 300, // 박스 높이 고정값
  },
  itemImage: {
    width: "100%", 
    height: "70%",
    marginBottom: 5, 
  },
  itemName: {
    fontSize: 14,
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 12,
    fontWeight: "bold",
    color: "000",
  },
  profileCon: {
    flex: 1,
    padding: 10,
    marginTop: 60,
  },
});