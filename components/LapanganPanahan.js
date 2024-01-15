import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LapanganPanahan = ({ onClose }) => {
  return (
    <View style={styles.lapanganPanahan}>
      <Text style={styles.lapanganPanahan1}>Lapangan Panahan</Text>
      <View
        style={[
          styles.setiapLapanganAdalahWajibUWrapper,
          styles.wrapperLayout1,
        ]}
      >
        <Text style={styles.setiapLapanganAdalah}>
          Setiap lapangan adalah wajib untuk dilengkapi dengan kamera pada tiap
          sudutnya supaya juri bisa secara lebih mudah memberikan penilaian saat
          pertandingan berjalan.
        </Text>
      </View>
      <View
        style={[styles.harusAdaSebuahLajurYangMeWrapper, styles.wrapperLayout1]}
      >
        <Text style={[styles.harusAdaSebuah, styles.harusAdaSebuahTypo]}>
          Harus ada sebuah lajur yang membatasi tempat bagi peserta perempuan
          dan laki-laki. Untuk lajur satu ini pun ukuran lebar telah ditetapkan
          di mana harus kurang lebih 5 meter.
        </Text>
      </View>
      <View
        style={[styles.adanyaTiangPenopangPapanSaWrapper, styles.wrapperLayout]}
      >
        <Text style={[styles.adanyaTiangPenopang, styles.harusAdaSebuahTypo]}>
          Adanya tiang penopang papan sasaran wajib diberi angka pada
          masing-masing tiang. Tak hanya itu, diharapkan setiap tiang perlu
          ditanamkan sampai benar-benar kokoh hingga ke dalam tanah
        </Text>
      </View>
      <View
        style={[styles.harusAda13TargetDiManaIWrapper, styles.wrapperLayout]}
      >
        <Text style={[styles.adanyaTiangPenopang, styles.harusAdaSebuahTypo]}>
          Harus ada 1-3 target di mana ini adalah jumlah minimal target dalam
          satu lapangan. Target tersebut bisa dipasang pada setiap lajurnya di
          mana biasanya 2 yang dipakai. Pemberian tanda perlu dilakukan dengan
          jelas.
        </Text>
      </View>
      <View
        style={[
          styles.aturanDasarMemanahTerutamaWrapper,
          styles.wrapperLayout1,
        ]}
      >
        <Text style={[styles.adanyaTiangPenopang, styles.harusAdaSebuahTypo]}>
          Aturan dasar memanah, terutama soal jarak sasaran pada laki-laki dan
          perempuan tidaklah sama dan urutan jaraknya pun tertentu. 30, 50, 70,
          90 m adalah jarak besar lapangan umum yang digunakan untuk pemanah
          laki-laki, sedangkan, 30, 40, 60, 70 m adalah jarak besar lapangan
          umum yang digunakan untuk pemanah perempuan.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout1: {
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  harusAdaSebuahTypo: {
    height: 70,
    width: 228,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_4xs,
    left: 19,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  wrapperLayout: {
    height: 86,
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  lapanganPanahan1: {
    top: 19,
    left: 86,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  setiapLapanganAdalah: {
    height: 56,
    width: 228,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_4xs,
    left: 19,
    top: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  setiapLapanganAdalahWajibUWrapper: {
    top: 48,
    height: 76,
  },
  harusAdaSebuah: {
    top: 10,
    height: 70,
  },
  harusAdaSebuahLajurYangMeWrapper: {
    top: 131,
    height: 77,
  },
  adanyaTiangPenopang: {
    top: 8,
  },
  adanyaTiangPenopangPapanSaWrapper: {
    top: 215,
  },
  harusAda13TargetDiManaIWrapper: {
    top: 308,
  },
  aturanDasarMemanahTerutamaWrapper: {
    top: 401,
    height: 129,
  },
  lapanganPanahan: {
    backgroundColor: Color.colorGreen,
    width: 292,
    height: 549,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default LapanganPanahan;
