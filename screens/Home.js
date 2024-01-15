import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LapanganPanahan from "../components/LapanganPanahan";
import KostumMemanah from "../components/KostumMemanah";
import IstilahDalamOlahragaPanahan from "../components/IstilahDalamOlahragaPanahan";
import Turnamen from "../components/Turnamen";
import Poin from "../components/Poin";
import PapanSasaranPanahan from "../components/PapanSasaranPanahan";
import HalHalLainWajibDiketahuiP from "../components/HalHalLainWajibDiketahuiP";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Home = () => {
  const [
    threeDotsRemovebgPreview1IconVisible,
    setThreeDotsRemovebgPreview1IconVisible,
  ] = useState(false);
  const [
    threeDotsRemovebgPreview1Icon1Visible,
    setThreeDotsRemovebgPreview1Icon1Visible,
  ] = useState(false);
  const [
    threeDotsRemovebgPreview1Icon2Visible,
    setThreeDotsRemovebgPreview1Icon2Visible,
  ] = useState(false);
  const [
    threeDotsRemovebgPreview1Icon3Visible,
    setThreeDotsRemovebgPreview1Icon3Visible,
  ] = useState(false);
  const [
    threeDotsRemovebgPreview1Icon4Visible,
    setThreeDotsRemovebgPreview1Icon4Visible,
  ] = useState(false);
  const [
    threeDotsRemovebgPreview1Icon5Visible,
    setThreeDotsRemovebgPreview1Icon5Visible,
  ] = useState(false);
  const [
    threeDotsRemovebgPreview1Icon6Visible,
    setThreeDotsRemovebgPreview1Icon6Visible,
  ] = useState(false);
  const navigation = useNavigation();

  const openThreeDotsRemovebgPreview1Icon = useCallback(() => {
    setThreeDotsRemovebgPreview1IconVisible(true);
  }, []);

  const closeThreeDotsRemovebgPreview1Icon = useCallback(() => {
    setThreeDotsRemovebgPreview1IconVisible(false);
  }, []);

  const openThreeDotsRemovebgPreview1Icon1 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon1Visible(true);
  }, []);

  const closeThreeDotsRemovebgPreview1Icon1 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon1Visible(false);
  }, []);

  const openThreeDotsRemovebgPreview1Icon2 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon2Visible(true);
  }, []);

  const closeThreeDotsRemovebgPreview1Icon2 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon2Visible(false);
  }, []);

  const openThreeDotsRemovebgPreview1Icon3 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon3Visible(true);
  }, []);

  const closeThreeDotsRemovebgPreview1Icon3 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon3Visible(false);
  }, []);

  const openThreeDotsRemovebgPreview1Icon4 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon4Visible(true);
  }, []);

  const closeThreeDotsRemovebgPreview1Icon4 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon4Visible(false);
  }, []);

  const openThreeDotsRemovebgPreview1Icon5 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon5Visible(true);
  }, []);

  const closeThreeDotsRemovebgPreview1Icon5 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon5Visible(false);
  }, []);

  const openThreeDotsRemovebgPreview1Icon6 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon6Visible(true);
  }, []);

  const closeThreeDotsRemovebgPreview1Icon6 = useCallback(() => {
    setThreeDotsRemovebgPreview1Icon6Visible(false);
  }, []);

  return (
    <>
      <View style={styles.home}>
        <Image
          style={styles.untitledRemovebgPreview3Icon}
          contentFit="cover"
          source={require("../assets/untitledremovebgpreview-31.png")}
        />
        <View style={styles.homeChild} />
        <Pressable
          style={styles.bckcbtnRemovebgPreview2}
          onPress={() => navigation.navigate("FrontPage")}
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
        <Text style={styles.infoPanahan}>Info Panahan</Text>
        <View style={styles.ukmPanahanUniversitasIslamWrapper}>
          <Text style={[styles.ukmPanahanUniversitas, styles.panahanTypo]}>
            UKM Panahan Universitas Islam Riau
          </Text>
        </View>
        <View style={[styles.lapanganPanahanParent, styles.parentLayout]}>
          <Text style={[styles.lapanganPanahan, styles.panahanTypo]}>
            Lapangan Panahan
          </Text>
          <Pressable
            style={styles.threeDotsRemovebgPreview1}
            onPress={openThreeDotsRemovebgPreview1Icon}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/three-dotsremovebgpreview-1.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.kostumMemanahParent, styles.parentLayout]}>
          <Text style={[styles.lapanganPanahan, styles.panahanTypo]}>
            Kostum Memanah
          </Text>
          <Pressable
            style={styles.threeDotsRemovebgPreview1}
            onPress={openThreeDotsRemovebgPreview1Icon1}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/three-dotsremovebgpreview-1.png")}
            />
          </Pressable>
        </View>
        <View
          style={[
            styles.istilahDalamOlahragaPanahanParent,
            styles.parentLayout,
          ]}
        >
          <Text style={[styles.lapanganPanahan, styles.panahanTypo]}>
            Istilah Dalam Olahraga Panahan
          </Text>
          <Pressable
            style={styles.threeDotsRemovebgPreview1}
            onPress={openThreeDotsRemovebgPreview1Icon2}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/three-dotsremovebgpreview-1.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.turnamenParent, styles.parentLayout]}>
          <Text style={[styles.lapanganPanahan, styles.panahanTypo]}>
            Turnamen
          </Text>
          <Pressable
            style={styles.threeDotsRemovebgPreview1}
            onPress={openThreeDotsRemovebgPreview1Icon3}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/three-dotsremovebgpreview-1.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.poinParent, styles.parentLayout]}>
          <Text style={[styles.lapanganPanahan, styles.panahanTypo]}>Poin</Text>
          <Pressable
            style={styles.threeDotsRemovebgPreview1}
            onPress={openThreeDotsRemovebgPreview1Icon4}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/three-dotsremovebgpreview-1.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.papanSasaranPanahanParent, styles.parentLayout]}>
          <Text style={[styles.lapanganPanahan, styles.panahanTypo]}>
            Papan Sasaran panahan
          </Text>
          <Pressable
            style={styles.threeDotsRemovebgPreview1}
            onPress={openThreeDotsRemovebgPreview1Icon5}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/three-dotsremovebgpreview-1.png")}
            />
          </Pressable>
        </View>
        <View
          style={[styles.halHalLainWajibDiketahuiPParent, styles.parentLayout]}
        >
          <Text style={[styles.lapanganPanahan, styles.panahanTypo]}>
            Hal-hal Lain Wajib Diketahui Pemanah
          </Text>
          <Pressable
            style={styles.threeDotsRemovebgPreview1}
            onPress={openThreeDotsRemovebgPreview1Icon6}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/three-dotsremovebgpreview-1.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={styles.lanjutWrapper}
          onPress={() => navigation.navigate("HomeInfoPemakaian")}
        >
          <Text style={styles.lanjut}>Lanjut</Text>
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={threeDotsRemovebgPreview1IconVisible}
      >
        <View style={styles.threeDotsRemovebgPreview1IconOverlay}>
          <Pressable
            style={styles.threeDotsRemovebgPreview1IconBg}
            onPress={closeThreeDotsRemovebgPreview1Icon}
          />
          <LapanganPanahan onClose={closeThreeDotsRemovebgPreview1Icon} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={threeDotsRemovebgPreview1Icon1Visible}
      >
        <View style={styles.threeDotsRemovebgPreview1Icon1Overlay}>
          <Pressable
            style={styles.threeDotsRemovebgPreview1Icon1Bg}
            onPress={closeThreeDotsRemovebgPreview1Icon1}
          />
          <KostumMemanah onClose={closeThreeDotsRemovebgPreview1Icon1} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={threeDotsRemovebgPreview1Icon2Visible}
      >
        <View style={styles.threeDotsRemovebgPreview1Icon2Overlay}>
          <Pressable
            style={styles.threeDotsRemovebgPreview1Icon2Bg}
            onPress={closeThreeDotsRemovebgPreview1Icon2}
          />
          <IstilahDalamOlahragaPanahan
            onClose={closeThreeDotsRemovebgPreview1Icon2}
          />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={threeDotsRemovebgPreview1Icon3Visible}
      >
        <View style={styles.threeDotsRemovebgPreview1Icon3Overlay}>
          <Pressable
            style={styles.threeDotsRemovebgPreview1Icon3Bg}
            onPress={closeThreeDotsRemovebgPreview1Icon3}
          />
          <Turnamen onClose={closeThreeDotsRemovebgPreview1Icon3} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={threeDotsRemovebgPreview1Icon4Visible}
      >
        <View style={styles.threeDotsRemovebgPreview1Icon4Overlay}>
          <Pressable
            style={styles.threeDotsRemovebgPreview1Icon4Bg}
            onPress={closeThreeDotsRemovebgPreview1Icon4}
          />
          <Poin onClose={closeThreeDotsRemovebgPreview1Icon4} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={threeDotsRemovebgPreview1Icon5Visible}
      >
        <View style={styles.threeDotsRemovebgPreview1Icon5Overlay}>
          <Pressable
            style={styles.threeDotsRemovebgPreview1Icon5Bg}
            onPress={closeThreeDotsRemovebgPreview1Icon5}
          />
          <PapanSasaranPanahan onClose={closeThreeDotsRemovebgPreview1Icon5} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={threeDotsRemovebgPreview1Icon6Visible}
      >
        <View style={styles.threeDotsRemovebgPreview1Icon6Overlay}>
          <Pressable
            style={styles.threeDotsRemovebgPreview1Icon6Bg}
            onPress={closeThreeDotsRemovebgPreview1Icon6}
          />
          <HalHalLainWajibDiketahuiP
            onClose={closeThreeDotsRemovebgPreview1Icon6}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  marsTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.prostoOne,
    position: "absolute",
  },
  panahanTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  parentLayout: {
    height: 40,
    width: 332,
    backgroundColor: Color.colorGreen,
    left: 14,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  untitledRemovebgPreview3Icon: {
    right: 50,
    bottom: 524,
    width: 181,
    height: 144,
    position: "absolute",
  },
  homeChild: {
    top: 0,
    backgroundColor: Color.colorLimegreen,
    height: 31,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  bckcbtnRemovebgPreview2: {
    top: 91,
    width: 35,
    height: 37,
    left: 18,
    position: "absolute",
  },
  mars: {
    top: 229,
    left: 104,
    fontSize: FontSize.size_mid,
    width: 153,
    height: 26,
  },
  myArcheryScore: {
    top: 255,
    left: 76,
    width: 208,
    height: 53,
    fontSize: FontSize.size_sm,
  },
  infoPanahan: {
    top: 331,
    left: 129,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  ukmPanahanUniversitas: {
    top: 9,
    left: 48,
    fontSize: FontSize.size_sm,
  },
  ukmPanahanUniversitasIslamWrapper: {
    top: 31,
    height: 39,
    backgroundColor: Color.colorGray,
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  lapanganPanahan: {
    top: 11,
    left: 28,
    fontSize: FontSize.size_xs,
  },
  threeDotsRemovebgPreview1IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  threeDotsRemovebgPreview1IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  threeDotsRemovebgPreview1: {
    left: 292,
    top: 12,
    width: 21,
    height: 16,
    position: "absolute",
  },
  lapanganPanahanParent: {
    top: 380,
  },
  threeDotsRemovebgPreview1Icon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  threeDotsRemovebgPreview1Icon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  kostumMemanahParent: {
    top: 430,
  },
  threeDotsRemovebgPreview1Icon2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  threeDotsRemovebgPreview1Icon2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  istilahDalamOlahragaPanahanParent: {
    top: 480,
  },
  threeDotsRemovebgPreview1Icon3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  threeDotsRemovebgPreview1Icon3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  turnamenParent: {
    top: 530,
  },
  threeDotsRemovebgPreview1Icon4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  threeDotsRemovebgPreview1Icon4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  poinParent: {
    top: 580,
  },
  threeDotsRemovebgPreview1Icon5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  threeDotsRemovebgPreview1Icon5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  papanSasaranPanahanParent: {
    top: 630,
  },
  threeDotsRemovebgPreview1Icon6Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  threeDotsRemovebgPreview1Icon6Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  halHalLainWajibDiketahuiPParent: {
    top: 680,
  },
  lanjut: {
    top: 5,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    textAlign: "center",
    left: 18,
    position: "absolute",
  },
  lanjutWrapper: {
    top: 747,
    left: 256,
    width: 67,
    height: 25,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray,
    position: "absolute",
    overflow: "hidden",
  },
  home: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
