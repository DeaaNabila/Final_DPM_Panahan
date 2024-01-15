import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const HalHalLainWajibDiketahuiP = ({ onClose }) => {
  return (
    <View style={styles.halHalLainWajibDiketahuiP}>
      <Text style={styles.halHalLainWajib}>
        Hal-hal Lain Wajib Diketahui Pemanah
      </Text>
      <View
        style={[
          styles.tidakMenarikSertaMelepaskanWrapper,
          styles.tidakWrapperLayout1,
        ]}
      >
        <Text style={[styles.tidakMenarikSerta, styles.tidakTypo]}>
          Tidak menarik serta melepaskan busur apabila tidak ada anak panahnya.
        </Text>
      </View>
      <View
        style={[
          styles.tidakMendekatkanKepalaPadaWrapper,
          styles.tidakWrapperLayout,
        ]}
      >
        <Text
          style={[styles.tidakMendekatkanKepala, styles.tidakTypo]}
        >{`Tidak mendekatkan kepala pada busur khusus-
nya sewaktu sedang ditarik.`}</Text>
      </View>
      <View
        style={[
          styles.tidakSekaliKaliMenembakkanWrapper,
          styles.tidakWrapperLayout,
        ]}
      >
        <Text style={[styles.tidakMenarikSerta, styles.tidakTypo]}>
          Tidak sekali-kali menembakkan anak panah ke udara.
        </Text>
      </View>
      <View
        style={[
          styles.tidakMenembakkanAnakPanahBWrapper,
          styles.tidakWrapperLayout1,
        ]}
      >
        <Text style={[styles.tidakMenarikSerta, styles.tidakTypo]}>
          Tidak menembakkan anak panah bila belum yakin aman untuk diri sendiri
          dan lingkungan sekitar.
        </Text>
      </View>
      <View
        style={[
          styles.tidakMenembakDenganTargetSWrapper,
          styles.tidakWrapperLayout1,
        ]}
      >
        <Text style={[styles.tidakMenembakDengan, styles.tidakTypo]}>
          Tidak menembak dengan target sembarangan, terutama makhluk hidup
          sebagai sasaran, seperti manusia, hewan dan tanaman.
        </Text>
      </View>
      <View
        style={[
          styles.tidakMelakukanPenembakanDiWrapper,
          styles.tidakWrapperLayout1,
        ]}
      >
        <Text style={[styles.tidakMenarikSerta, styles.tidakTypo]}>
          Tidak melakukan penembakan di dalam rumah.
        </Text>
      </View>
      <View
        style={[
          styles.tidakMenembakMenggunakanAnaWrapper,
          styles.tidakWrapperLayout1,
        ]}
      >
        <Text style={[styles.tidakMenarikSerta, styles.tidakTypo]}>
          Tidak menembak menggunakan anak panah rusak.
        </Text>
      </View>
      <View
        style={[styles.tidakMenembakJarakJauhSebeWrapper, styles.wrapperLayout]}
      >
        <Text style={[styles.tidakMenarikSerta, styles.tidakTypo]}>
          Tidak menembak jarak jauh sebelum jarak dekat dikuasai dengan baik.
        </Text>
      </View>
      <View
        style={[
          styles.wajibBerfokusUntukMendahuluWrapper,
          styles.wrapperLayout,
        ]}
      >
        <Text style={[styles.tidakMenarikSerta, styles.tidakTypo]}>
          Wajib berfokus untuk mendahulukan keselamatan diri sendiri berikut
          juga orang lain.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tidakWrapperLayout1: {
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  tidakTypo: {
    height: 56,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_4xs,
    left: 19,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  tidakWrapperLayout: {
    height: 39,
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  wrapperLayout: {
    height: 37,
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  halHalLainWajib: {
    top: 16,
    left: 31,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  tidakMenarikSerta: {
    width: 228,
    height: 56,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_4xs,
    left: 19,
    top: 5,
  },
  tidakMenarikSertaMelepaskanWrapper: {
    top: 48,
    height: 38,
  },
  tidakMendekatkanKepala: {
    width: 241,
    height: 56,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_4xs,
    left: 19,
    top: 5,
  },
  tidakMendekatkanKepalaPadaWrapper: {
    top: 92,
  },
  tidakSekaliKaliMenembakkanWrapper: {
    top: 137,
  },
  tidakMenembakkanAnakPanahBWrapper: {
    top: 182,
    height: 51,
  },
  tidakMenembakDengan: {
    top: 7,
    width: 228,
    height: 56,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_4xs,
    left: 19,
  },
  tidakMenembakDenganTargetSWrapper: {
    top: 354,
    height: 55,
  },
  tidakMelakukanPenembakanDiWrapper: {
    top: 239,
    height: 25,
  },
  tidakMenembakMenggunakanAnaWrapper: {
    top: 270,
    height: 35,
  },
  tidakMenembakJarakJauhSebeWrapper: {
    top: 311,
  },
  wajibBerfokusUntukMendahuluWrapper: {
    top: 415,
  },
  halHalLainWajibDiketahuiP: {
    backgroundColor: Color.colorGreen,
    width: 292,
    height: 468,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default HalHalLainWajibDiketahuiP;
