import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React from "react";
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

const ImageSection = () => (
  <View style={styles.imageCon}>
    <Text style={styles.image}>Image</Text>
  </View>
);

const BrandSection = () => (
  <View style={styles.brandCon}>
    <Text style={styles.brand}>브랜드</Text>
    <View style={styles.btnGroup}>
      {["패션", "뷰티", "액세서리", "라이프"].map((title) => (
        <View style={styles.btnWrapper} key={title}>
          <Button title={title} color="#000000" />
        </View>
      ))}
    </View>
  </View>
);

const FeedSection = () => (
  <ScrollView horizontal pagingEnabled style={styles.feed}>
    <View style={styles.feedInner}>
      <Text style={styles.feedName}>모아보기</Text>
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
);

const BottomNav = ({ navigation }) => {  // navigation을 props로 받습니다
  return (
    <View style={styles.bottomNav}>
      {[
        { icon: "🏠", route: "Home" },
        { icon: "🔍", route: "Search" },
        { icon: "❤️", route: "Favorites" },
        { icon: "👤", route: "Profile" },
      ].map((item, index) => (
        <View style={styles.navItem} key={index}>
          <Button title={item.icon} onPress={() => navigation.navigate(item.route)} />
        </View>
      ))}
    </View>
  );
};

export {BottomNav};

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageSection />
      <BrandSection />
      <FeedSection />
      <BottomNav navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

// 스타일
const styles = StyleSheet.create({
  container: {
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
  btnGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },
  btnWrapper: {
    margin: 5,
  },
  feed: {
    flex: 2,
    width: "100%",
  },
  feedInner: {},
  feedName: {
    fontSize: 20,
    marginBottom: 10,
  },
  feedBtnGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  bottomNav: {
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
  navItem: {
    flex: 1,
    alignItems: "center",
  },
});