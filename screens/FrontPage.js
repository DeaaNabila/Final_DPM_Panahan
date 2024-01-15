import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FrontPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frontPage}>
      <Image
        style={styles.img202210191703012Icon}
        contentFit="cover"
        source={require("../assets/img20221019170301-2.png")}
      />
      <Pressable
        style={styles.ayoMulaiWrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.ayoMulai}>Ayo Mulai!</Text>
      </Pressable>
      <View style={styles.untitledRemovebgPreview3Parent}>
        <Image
          style={styles.untitledRemovebgPreview3Icon}
          contentFit="cover"
          source={require("../assets/untitledremovebgpreview-3.png")}
        />
        <Text style={[styles.myArcheryScore, styles.marsTypo]}>
          My Archery Score
        </Text>
        <Text style={[styles.mars, styles.marsTypo]}>MARS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marsTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.prostoOne,
    textAlign: "center",
    position: "absolute",
  },
  img202210191703012Icon: {
    top: -93,
    left: -19,
    width: 580,
    height: 949,
    position: "absolute",
  },
  ayoMulai: {
    top: 8,
    left: 26,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  ayoMulaiWrapper: {
    top: 362,
    left: 118,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGreen,
    width: 133,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  untitledRemovebgPreview3Icon: {
    top: 34,
    left: 34,
    width: 332,
    height: 189,
    position: "absolute",
  },
  myArcheryScore: {
    top: 189,
    left: 47,
    fontSize: FontSize.size_sm,
    width: 208,
    height: 53,
  },
  mars: {
    top: 163,
    left: 71,
    fontSize: FontSize.size_mid,
    width: 153,
    height: 26,
  },
  untitledRemovebgPreview3Parent: {
    top: 110,
    left: 33,
    width: 449,
    height: 257,
    position: "absolute",
  },
  frontPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default FrontPage;
