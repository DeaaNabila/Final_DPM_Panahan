import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const PapanSasaranPanahan = ({ onClose }) => {
  return (
    <View style={styles.papanSasaranPanahan}>
      <Text style={[styles.papanSasaranPanahan1, styles.ada2StandarTypo]}>
        Papan Sasaran Panahan
      </Text>
      <View
        style={[styles.ada2StandarDesainBentukLiWrapper, styles.wrapperLayout]}
      >
        <Text style={[styles.ada2Standar, styles.ada2StandarTypo]}>
          Ada 2 standar desain bentuk lingkaran untuk klasifikasi papan sasaran,
          FITA adalah yang pertama menentukan standar desain papan sasaran di
          mana FITA sendiri merupakan organisasi memanah tingkat internasional.
        </Text>
      </View>
      <View
        style={[styles.untukSasaranMemanahYangUkuWrapper, styles.wrapperLayout]}
      >
        <Text style={[styles.ada2Standar, styles.ada2StandarTypo]}>
          Untuk sasaran memanah yang ukuran diameternya 80 cm, 4 cm adalah lebar
          dari area skoringnya dan dilihat secara keseluruhan sasaran dibagi
          menjadi 5 zona warna yang tak sama namun terpusat.
        </Text>
      </View>
      <View
        style={[
          styles.diameterUkuranParameterTargWrapper,
          styles.ukuranWrapperLayout,
        ]}
      >
        <Text style={[styles.ada2Standar, styles.ada2StandarTypo]}>
          Diameter ukuran parameter target panahan adalah 80 cm dan 122 cm di
          mana tiap lingkaran target telah dibagi 10 area scoring di mana target
          pusatnya hanya 1.
        </Text>
      </View>
      <View
        style={[
          styles.ukuranSasaranMemanahSendiriWrapper,
          styles.ukuranWrapperLayout,
        ]}
      >
        <Text style={[styles.ada2Standar, styles.ada2StandarTypo]}>
          Ukuran sasaran memanah sendiri besarnya berdiameter 122 cm dengan area
          skoring 6 cm.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ada2StandarTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  wrapperLayout: {
    height: 90,
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  ukuranWrapperLayout: {
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  papanSasaranPanahan1: {
    top: 17,
    left: 73,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  ada2Standar: {
    top: 10,
    left: 19,
    fontSize: FontSize.size_4xs,
    color: Color.colorDimgray_100,
    width: 233,
    height: 56,
  },
  ada2StandarDesainBentukLiWrapper: {
    top: 48,
  },
  untukSasaranMemanahYangUkuWrapper: {
    top: 288,
  },
  diameterUkuranParameterTargWrapper: {
    top: 145,
    height: 76,
  },
  ukuranSasaranMemanahSendiriWrapper: {
    top: 228,
    height: 53,
  },
  papanSasaranPanahan: {
    backgroundColor: Color.colorGreen,
    width: 292,
    height: 395,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default PapanSasaranPanahan;
