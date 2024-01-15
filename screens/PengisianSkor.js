import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Submit from "../components/Submit";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PengisianSkor = () => {
  const navigation = useNavigation();
  const [frameContainer9Visible, setFrameContainer9Visible] = useState(false);

  const openFrameContainer9 = useCallback(() => {
    setFrameContainer9Visible(true);
  }, []);

  const closeFrameContainer9 = useCallback(() => {
    setFrameContainer9Visible(false);
  }, []);

  return (
    <>
      <View style={styles.pengisianSkor}>
        <View style={[styles.pengisianSkorChild, styles.skorLayout]} />
        <View style={[styles.pencatatanSkorParent, styles.submitWrapperBg]}>
          <Text style={[styles.pencatatanSkor, styles.pencatatanSkorTypo]}>
            Pencatatan Skor
          </Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={styles.targetsAssigned12DistancWrapper}>
          <Text style={[styles.targetsAssigned12, styles.submitTypo]}>
            {" "}
            Target(s) assigned: 12 Distance: 50m-1
          </Text>
        </View>
        <Pressable
          style={styles.bckcbtnRemovebgPreview2}
          onPress={() => navigation.navigate("HomeInfoPemakaian")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/bckcbtnremovebgpreview-2.png")}
          />
        </Pressable>
        <View
          style={[styles.ukmPanahanUniversitasIslamWrapper, styles.skorLayout]}
        >
          <Text
            style={[styles.ukmPanahanUniversitas, styles.pencatatanSkorTypo]}
          >
            UKM Panahan Universitas Islam Riau
          </Text>
        </View>
        <View style={[styles.vectorParent, styles.vectorParentLayout]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector1.png")}
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
          <Text style={[styles.text, styles.textTypo1]}>6</Text>
          <Text style={[styles.text1, styles.textTypo1]}>5</Text>
          <Text style={[styles.text2, styles.textTypo1]}>4</Text>
          <Text style={[styles.text3, styles.textTypo]}>3</Text>
          <Text style={[styles.text4, styles.textTypo]}>2</Text>
          <Text style={[styles.text5, styles.textTypo1]}>1</Text>
        </View>
        <View style={[styles.vectorGroup, styles.vectorParentLayout]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector1.png")}
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
          <Text style={[styles.text, styles.textTypo1]}>6</Text>
          <Text style={[styles.text1, styles.textTypo1]}>5</Text>
          <Text style={[styles.text2, styles.textTypo1]}>4</Text>
          <Text style={[styles.text3, styles.textTypo]}>3</Text>
          <Text style={[styles.text4, styles.textTypo]}>2</Text>
          <Text style={[styles.text5, styles.textTypo1]}>1</Text>
        </View>
        <View style={[styles.vectorContainer, styles.vectorParentLayout]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector2.png")}
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
          <Text style={[styles.text, styles.textTypo1]}>6</Text>
          <Text style={[styles.text1, styles.textTypo1]}>5</Text>
          <Text style={[styles.text2, styles.textTypo1]}>4</Text>
          <Text style={[styles.text3, styles.textTypo]}>3</Text>
          <Text style={[styles.text4, styles.textTypo]}>2</Text>
          <Text style={[styles.text5, styles.textTypo1]}>1</Text>
        </View>
        <View style={[styles.frameView, styles.vectorParentLayout]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector2.png")}
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
          <Text style={[styles.text, styles.textTypo1]}>6</Text>
          <Text style={[styles.text1, styles.textTypo1]}>5</Text>
          <Text style={[styles.text2, styles.textTypo1]}>4</Text>
          <Text style={[styles.text3, styles.textTypo]}>3</Text>
          <Text style={[styles.text4, styles.textTypo]}>2</Text>
          <Text style={[styles.text5, styles.textTypo1]}>1</Text>
        </View>
        <View style={[styles.vectorParent1, styles.vectorParentLayout]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector2.png")}
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
          <Text style={[styles.text, styles.textTypo1]}>6</Text>
          <Text style={[styles.text1, styles.textTypo1]}>5</Text>
          <Text style={[styles.text2, styles.textTypo1]}>4</Text>
          <Text style={[styles.text3, styles.textTypo]}>3</Text>
          <Text style={[styles.text4, styles.textTypo]}>2</Text>
          <Text style={[styles.text5, styles.textTypo1]}>1</Text>
        </View>
        <View style={[styles.vectorParent2, styles.vectorParentLayout]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector2.png")}
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
          <Text style={[styles.text, styles.textTypo1]}>6</Text>
          <Text style={[styles.text1, styles.textTypo1]}>5</Text>
          <Text style={[styles.text2, styles.textTypo1]}>4</Text>
          <Text style={[styles.text3, styles.textTypo]}>3</Text>
          <Text style={[styles.text4, styles.textTypo]}>2</Text>
          <Text style={[styles.text5, styles.textTypo1]}>1</Text>
        </View>
        <Text style={[styles.namaClub, styles.sesiTypo]}>{`Nama             : 

Club               :

No. Bantalan : 

 `}</Text>
        <Text style={[styles.sesi, styles.sesiTypo]}> Sesi :</Text>
        <View style={[styles.pengisianSkorItem, styles.pengisianChildLayout]} />
        <View
          style={[styles.pengisianSkorInner, styles.pengisianChildLayout]}
        />
        <View
          style={[styles.pengisianSkorChild1, styles.pengisianChildLayout]}
        />
        <View
          style={[styles.pengisianSkorChild2, styles.pengisianChildLayout]}
        />
        <Pressable
          style={[styles.submitWrapper, styles.submitWrapperBg]}
          onPress={openFrameContainer9}
        >
          <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer9Visible}>
        <View style={styles.frameContainer9Overlay}>
          <Pressable
            style={styles.frameContainer9Bg}
            onPress={closeFrameContainer9}
          />
          <Submit onClose={closeFrameContainer9} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  skorLayout: {
    width: 360,
    left: 0,
  },
  submitWrapperBg: {
    backgroundColor: Color.colorDarkgreen,
    position: "absolute",
    overflow: "hidden",
  },
  pencatatanSkorTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    left: 5,
    position: "absolute",
  },
  submitTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  vectorParentLayout: {
    height: 58,
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
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
    color: Color.colorBlack,
    top: "10.52%",
    height: "19.66%",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    width: "1.63%",
    color: Color.colorBlack,
    top: "10.52%",
    height: "19.66%",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  sesiTypo: {
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    position: "absolute",
  },
  pengisianChildLayout: {
    width: 168,
    borderWidth: 0.5,
    borderRadius: Border.br_11xs,
    left: 96,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke,
    height: 15,
    position: "absolute",
  },
  pengisianSkorChild: {
    backgroundColor: Color.colorLimegreen,
    height: 13,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  pencatatanSkor: {
    fontSize: FontSize.size_2xs,
    width: 110,
    top: 0,
  },
  vectorIcon: {
    top: 3,
    left: 104,
    width: 11,
    height: 10,
    position: "absolute",
  },
  pencatatanSkorParent: {
    top: 50,
    height: 17,
    width: 360,
    left: 0,
  },
  targetsAssigned12: {
    width: 358,
    left: 5,
    fontSize: FontSize.size_3xs,
    top: 0,
  },
  targetsAssigned12DistancWrapper: {
    top: 67,
    left: -3,
    backgroundColor: "#667065",
    width: 363,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  bckcbtnRemovebgPreview2: {
    left: 18,
    top: 97,
    width: 35,
    height: 37,
    position: "absolute",
  },
  ukmPanahanUniversitas: {
    top: 9,
    fontSize: FontSize.size_sm,
  },
  ukmPanahanUniversitasIslamWrapper: {
    top: 13,
    backgroundColor: Color.colorGray,
    height: 39,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
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
  text: {
    left: "85.13%",
    width: "1.9%",
    color: Color.colorBlack,
    top: "10.52%",
    height: "19.66%",
  },
  text1: {
    left: "72.43%",
    width: "1.9%",
    color: Color.colorBlack,
    top: "10.52%",
    height: "19.66%",
  },
  text2: {
    left: "59.73%",
    width: "1.9%",
    color: Color.colorBlack,
    top: "10.52%",
    height: "19.66%",
  },
  text3: {
    left: "47.03%",
  },
  text4: {
    left: "34.33%",
  },
  text5: {
    width: "1.07%",
    left: "21.63%",
    color: Color.colorBlack,
    top: "10.52%",
    height: "19.66%",
  },
  vectorParent: {
    top: 276,
    left: 27,
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xl,
  },
  vectorGroup: {
    top: 346,
    left: 27,
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xl,
  },
  vectorContainer: {
    top: 416,
    left: 27,
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xl,
  },
  frameView: {
    top: 486,
    left: 27,
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xl,
  },
  vectorParent1: {
    top: 556,
    left: 27,
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_xl,
  },
  vectorParent2: {
    top: 626,
    left: 33,
  },
  namaClub: {
    left: 23,
    top: 146,
  },
  sesi: {
    top: 215,
    left: 21,
    width: 88,
    height: 15,
  },
  pengisianSkorItem: {
    top: 146,
  },
  pengisianSkorInner: {
    top: 170,
  },
  pengisianSkorChild1: {
    top: 194,
  },
  pengisianSkorChild2: {
    top: 216,
  },
  frameContainer9Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer9Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  submit: {
    top: 5,
    left: 24,
  },
  submitWrapper: {
    top: 715,
    left: 137,
    borderRadius: Border.br_7xs,
    width: 85,
    height: 25,
  },
  pengisianSkor: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PengisianSkor;
