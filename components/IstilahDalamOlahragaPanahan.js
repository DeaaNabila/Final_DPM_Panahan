import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const IstilahDalamOlahragaPanahan = ({ onClose }) => {
  return (
    <View style={styles.istilahDalamOlahragaPanahan}>
      <Text style={[styles.istilahDalamOlahraga, styles.istilahTypo]}>
        Istilah Dalam Olahraga Panahan
      </Text>
      <View
        style={[
          styles.standStanceIstilahIniMasWrapper,
          styles.istilahWrapperLayout2,
        ]}
      >
        <Text style={[styles.standStanceIstilah, styles.istilahTypo]}>
          Stand-Stance – Istilah ini masih meliputi istilah lainnya, seperti
          oblique stance, close stance, open stance dan square stance.
        </Text>
      </View>
      <View
        style={[
          styles.setUpIstilahIniMengartikWrapper,
          styles.istilahWrapperLayout1,
        ]}
      >
        <Text style={[styles.standStanceIstilah, styles.istilahTypo]}>
          Set up – Istilah ini mengartikan bahwa pemanah harus bersiap.
        </Text>
      </View>
      <View
        style={[
          styles.anchorIstilahIniBerartiPWrapper,
          styles.istilahWrapperLayout1,
        ]}
      >
        <Text style={[styles.standStanceIstilah, styles.istilahTypo]}>
          Anchor – Istilah ini berarti pemanah bisa mulai berancang-ancang.
        </Text>
      </View>
      <View
        style={[
          styles.drawingInilahIstilahBagiWrapper,
          styles.istilahWrapperLayout1,
        ]}
      >
        <Text style={[styles.standStanceIstilah, styles.istilahTypo]}>
          Drawing – Inilah istilah bagi pemanah untuk berposisi menarik string.
        </Text>
      </View>
      <View
        style={[
          styles.aimingIstilahIniDigunakanWrapper,
          styles.istilahWrapperLayout1,
        ]}
      >
        <Text style={[styles.standStanceIstilah, styles.istilahTypo]}>
          Aiming – Istilah ini digunakan ketika pemanah membidik.
        </Text>
      </View>
      <View
        style={[
          styles.holdingIstilahIniAdalahIWrapper,
          styles.istilahWrapperLayout1,
        ]}
      >
        <Text style={[styles.standStanceIstilah, styles.istilahTypo]}>
          Holding – Istilah ini adalah istilah untuk sikap menahan tepat sebelum
          anak panah dilepaskan.
        </Text>
      </View>
      <View
        style={[
          styles.followThroughIstilahIniAWrapper,
          styles.istilahWrapperLayout,
        ]}
      >
        <Text style={[styles.standStanceIstilah, styles.istilahTypo]}>
          Follow through – Istilah ini adalah gerakan pemanah selanjutnya
          sesudah anak panah terlepas.
        </Text>
      </View>
      <View
        style={[
          styles.backTensionIstilahIniAdaWrapper,
          styles.istilahWrapperLayout,
        ]}
      >
        <Text style={[styles.standStanceIstilah, styles.istilahTypo]}>
          Back tension – Istilah ini adalah persiapan pemanah dengan melakukan
          gerakan sebelum rilis anak panah.
        </Text>
      </View>
      <View
        style={[
          styles.releaseIstilahUntukMelepaWrapper,
          styles.istilahWrapperLayout2,
        ]}
      >
        <Text style={[styles.standStanceIstilah, styles.istilahTypo]}>
          Release – Istilah untuk melepaskan anak panah.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  istilahTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  istilahWrapperLayout2: {
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  istilahWrapperLayout1: {
    height: 39,
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  istilahWrapperLayout: {
    height: 54,
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  istilahDalamOlahraga: {
    top: 16,
    left: 49,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  standStanceIstilah: {
    top: 5,
    left: 19,
    fontSize: FontSize.size_4xs,
    color: Color.colorDimgray_100,
    width: 228,
    height: 56,
  },
  standStanceIstilahIniMasWrapper: {
    top: 48,
    height: 53,
  },
  setUpIstilahIniMengartikWrapper: {
    top: 109,
  },
  anchorIstilahIniBerartiPWrapper: {
    top: 156,
  },
  drawingInilahIstilahBagiWrapper: {
    top: 203,
  },
  aimingIstilahIniDigunakanWrapper: {
    top: 250,
  },
  holdingIstilahIniAdalahIWrapper: {
    top: 297,
  },
  followThroughIstilahIniAWrapper: {
    top: 378,
  },
  backTensionIstilahIniAdaWrapper: {
    top: 440,
  },
  releaseIstilahUntukMelepaWrapper: {
    top: 344,
    height: 26,
  },
  istilahDalamOlahragaPanahan: {
    backgroundColor: Color.colorGreen,
    width: 292,
    height: 512,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default IstilahDalamOlahragaPanahan;
