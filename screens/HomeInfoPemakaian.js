import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const HomeInfoPemakaian = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeInfoPemakaian}>
      <Image
        style={styles.untitledRemovebgPreview3Icon}
        contentFit="cover"
        source={require("../assets/untitledremovebgpreview-31.png")}
      />
      <View
        style={[
          styles.homeInfoPemakaianChild,
          styles.homeInfoPemakaianChildPosition,
        ]}
      />
      <Pressable
        style={styles.bckcbtnRemovebgPreview2}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/bckcbtnremovebgpreview-2.png")}
        />
      </Pressable>
      <Text style={[styles.mars, styles.marsTypo]}>MARS</Text>
      <Text style={[styles.myArcheryScore, styles.marsTypo]}>
        My Archery Score
      </Text>
      <Text style={styles.hiSelamatDatang}>{`Hi, Selamat Datang!
Disini kalian bisa mencatat
skor panahan`}</Text>
      <Text style={[styles.infoPemakaian, styles.infoPemakaianTypo]}>
        Info Pemakaian
      </Text>
      <Text style={[styles.caranyaSangatMudah, styles.infoPemakaianTypo]}>
        Caranya sangat mudah :
      </Text>
      <Text style={[styles.isiNamaDan, styles.isiTypo]}>
        Isi Nama dan Data lainnya
      </Text>
      <Text style={[styles.klikTombolSubmit, styles.isiTypo]}>
        Klik tombol Submit dan Kirim Datanya ke Admin
      </Text>
      <Text style={[styles.selesai, styles.isiTypo]}>Selesai!</Text>
      <Text style={[styles.isiJarakDanContainer, styles.isiTypo]}>
        <Text style={styles.isiJarakDan}>
          Isi Jarak dan Skor yang kalian dapatkan (
        </Text>
        <Text style={styles.janganBohongYa}>jangan bohong ya!</Text>
        <Text style={styles.isiJarakDan}>)</Text>
      </Text>
      <View
        style={[
          styles.ukmPanahanUniversitasIslamWrapper,
          styles.homeInfoPemakaianChildPosition,
        ]}
      >
        <Text style={[styles.ukmPanahanUniversitas, styles.infoPemakaianTypo]}>
          UKM Panahan Universitas Islam Riau
        </Text>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("PengisianSkor")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/frame-47.png")}
        />
      </Pressable>
      <View style={[styles.vectorParent, styles.vectorLayout]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <View style={[styles.frameChild, styles.frameChildPosition1]} />
        <View style={[styles.frameItem, styles.frameChildPosition1]} />
        <View style={[styles.frameInner, styles.frameChildPosition1]} />
        <View style={[styles.rectangleView, styles.frameChildPosition1]} />
        <View style={[styles.frameChild1, styles.frameChildPosition1]} />
        <View style={[styles.frameChild2, styles.frameChildPosition1]} />
        <View style={[styles.lineView, styles.frameChildPosition]} />
        <View style={[styles.frameChild3, styles.frameChildPosition]} />
        <View style={[styles.frameChild4, styles.frameChildPosition]} />
        <View style={[styles.frameChild5, styles.frameChildPosition]} />
        <View style={[styles.frameChild6, styles.frameChildPosition]} />
        <View style={[styles.frameChild7, styles.frameChildPosition]} />
        <Text style={[styles.text1, styles.textTypo1]}>6</Text>
        <Text style={[styles.text2, styles.textTypo1]}>5</Text>
        <Text style={[styles.text3, styles.textTypo1]}>4</Text>
        <Text style={[styles.text4, styles.textTypo]}>3</Text>
        <Text style={[styles.text5, styles.textTypo]}>2</Text>
        <Text style={[styles.text6, styles.textTypo1]}>1</Text>
      </View>
      <View style={[styles.vectorGroup, styles.vectorLayout]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <View style={[styles.frameChild, styles.frameChildPosition1]} />
        <View style={[styles.frameItem, styles.frameChildPosition1]} />
        <View style={[styles.frameInner, styles.frameChildPosition1]} />
        <View style={[styles.rectangleView, styles.frameChildPosition1]} />
        <View style={[styles.frameChild1, styles.frameChildPosition1]} />
        <View style={[styles.frameChild2, styles.frameChildPosition1]} />
        <View style={[styles.lineView, styles.frameChildPosition]} />
        <View style={[styles.frameChild3, styles.frameChildPosition]} />
        <View style={[styles.frameChild4, styles.frameChildPosition]} />
        <View style={[styles.frameChild5, styles.frameChildPosition]} />
        <View style={[styles.frameChild6, styles.frameChildPosition]} />
        <View style={[styles.frameChild7, styles.frameChildPosition]} />
        <Text style={[styles.text1, styles.textTypo1]}>6</Text>
        <Text style={[styles.text2, styles.textTypo1]}>5</Text>
        <Text style={[styles.text3, styles.textTypo1]}>4</Text>
        <Text style={[styles.text4, styles.textTypo]}>3</Text>
        <Text style={[styles.text5, styles.textTypo]}>2</Text>
        <Text style={[styles.text6, styles.textTypo1]}>1</Text>
      </View>
      <View style={styles.submitWrapper}>
        <Text style={[styles.submit, styles.textTypo1]}>Submit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeInfoPemakaianChildPosition: {
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  marsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.prostoOne,
    color: Color.colorBlack,
    position: "absolute",
  },
  infoPemakaianTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  isiTypo: {
    fontSize: FontSize.size_4xs,
    left: 22,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  vectorLayout: {
    height: 58,
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
    left: 30,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  frameChildPosition1: {
    backgroundColor: Color.colorDarkseagreen,
    width: "10.27%",
    bottom: "23.62%",
    top: "32.93%",
    height: "43.45%",
    position: "absolute",
  },
  frameChildPosition: {
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    bottom: "70.17%",
    top: "28.1%",
    width: "10.6%",
    height: "1.72%",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    width: "1.63%",
    fontSize: FontSize.size_3xs,
    top: "10.52%",
    height: "19.66%",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    color: Color.colorBlack,
    position: "absolute",
  },
  untitledRemovebgPreview3Icon: {
    top: 82,
    right: 50,
    width: 181,
    height: 144,
    position: "absolute",
  },
  homeInfoPemakaianChild: {
    top: 0,
    backgroundColor: Color.colorLimegreen,
    height: 31,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  bckcbtnRemovebgPreview2: {
    left: 18,
    top: 91,
    width: 35,
    height: 37,
    position: "absolute",
  },
  mars: {
    top: 179,
    left: 104,
    fontSize: FontSize.size_mid,
    width: 153,
    height: 26,
  },
  myArcheryScore: {
    top: 205,
    left: 76,
    width: 208,
    height: 53,
    fontSize: FontSize.size_sm,
  },
  hiSelamatDatang: {
    top: 248,
    left: 81,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  infoPemakaian: {
    top: 341,
    left: 119,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  caranyaSangatMudah: {
    top: 378,
    left: 27,
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
  },
  isiNamaDan: {
    top: 400,
    color: Color.colorBlack,
  },
  klikTombolSubmit: {
    top: 585,
    color: Color.colorBlack,
  },
  selesai: {
    top: 674,
    color: Color.colorBlack,
  },
  isiJarakDan: {
    color: Color.colorBlack,
  },
  janganBohongYa: {
    color: "#ff0000",
  },
  isiJarakDanContainer: {
    top: 416,
    width: 373,
  },
  ukmPanahanUniversitas: {
    top: 9,
    left: 48,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  ukmPanahanUniversitasIslamWrapper: {
    top: 31,
    backgroundColor: Color.colorGray,
    height: 39,
  },
  icon1: {
    borderRadius: Border.br_xl,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    left: 144,
    top: 720,
    width: 71,
    height: 30,
    position: "absolute",
  },
  vectorIcon: {
    width: "8.37%",
    right: "87.03%",
    left: "4.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "23.62%",
    top: "32.93%",
    height: "43.45%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    right: "72.17%",
    left: "17.57%",
  },
  frameItem: {
    right: "59.47%",
    left: "30.27%",
  },
  frameInner: {
    right: "46.77%",
    left: "42.97%",
  },
  rectangleView: {
    right: "34.07%",
    left: "55.67%",
  },
  frameChild1: {
    right: "21.37%",
    left: "68.37%",
  },
  frameChild2: {
    right: "8.67%",
    left: "81.07%",
  },
  lineView: {
    right: "72%",
    left: "17.4%",
  },
  frameChild3: {
    right: "59.3%",
    left: "30.1%",
  },
  frameChild4: {
    right: "46.6%",
    left: "42.8%",
  },
  frameChild5: {
    right: "33.9%",
    left: "55.5%",
  },
  frameChild6: {
    right: "21.2%",
    left: "68.2%",
  },
  frameChild7: {
    right: "8.5%",
    left: "80.9%",
  },
  text1: {
    left: "85.13%",
    top: "10.52%",
    height: "19.66%",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    width: "1.9%",
  },
  text2: {
    left: "72.43%",
    top: "10.52%",
    height: "19.66%",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    width: "1.9%",
  },
  text3: {
    left: "59.73%",
    top: "10.52%",
    height: "19.66%",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    width: "1.9%",
  },
  text4: {
    left: "47.03%",
  },
  text5: {
    left: "34.33%",
  },
  text6: {
    width: "1.07%",
    left: "21.63%",
    top: "10.52%",
    height: "19.66%",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
  },
  vectorParent: {
    top: 445,
  },
  vectorGroup: {
    top: 512,
  },
  submit: {
    top: 5,
    left: 24,
    color: Color.colorWhite,
  },
  submitWrapper: {
    top: 621,
    left: 36,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDarkgreen,
    width: 85,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  homeInfoPemakaian: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeInfoPemakaian;
