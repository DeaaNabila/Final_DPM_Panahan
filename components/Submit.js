import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const Submit = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.submit, styles.iconLayout]}>
      <Text style={styles.dataBerhasilDi}>Data Berhasil di Submit!</Text>
      <Pressable
        style={styles.bnbRemovebgPreview1}
        onPress={() => navigation.navigate("HomeInfoPemakaian")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/bnbremovebgpreview-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  dataBerhasilDi: {
    height: "35.27%",
    width: "81.18%",
    top: "19.23%",
    left: "9.43%",
    fontSize: 21,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  bnbRemovebgPreview1: {
    left: "41.06%",
    top: "58.18%",
    right: "41.44%",
    bottom: "20.91%",
    width: "17.49%",
    height: "20.91%",
    position: "absolute",
  },
  submit: {
    borderRadius: 50,
    backgroundColor: Color.colorLimegreen,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGreen,
    borderWidth: 1,
    width: 263,
    height: 220,
  },
});

export default Submit;
