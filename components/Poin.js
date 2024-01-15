import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Poin = ({ onClose }) => {
  return (
    <View style={styles.poin}>
      <Text style={styles.poin1}>Poin</Text>
      <View
        style={[
          styles.setiapPoinYangPemanahBerhaWrapper,
          styles.wrapperLayout2,
        ]}
      >
        <Text
          style={styles.setiapPoinYang}
        >{`Setiap poin yang pemanah berhasil dapatkan akan dicatat dan pencatatan baru dilakukan setelah beberapa kali tembakan, yakni 3 anak panah.
`}</Text>
      </View>
      <View
        style={[
          styles.suatuKewajibanBagiParaPemaWrapper,
          styles.wrapperLayout1,
        ]}
      >
        <Text style={[styles.suatuKewajibanBagi, styles.penentuanSkorAtauTypo]}>
          Suatu kewajiban bagi para pemanah untuk menyebutkan nominal angka atau
          poinnya sendiri, sementara untuk pemanah lain yang satu grup berperan
          sebagai asisten atau membantu pemanah yang tengah mengeksekusi nilai.
        </Text>
      </View>
      <View
        style={[
          styles.perolehanNilaiMenjadiLebihWrapper,
          styles.wrapperLayout1,
        ]}
      >
        <Text style={[styles.suatuKewajibanBagi, styles.penentuanSkorAtauTypo]}>
          Perolehan nilai menjadi lebih tinggi pada poin yang pemanah dapatkan
          bila setiap anak panah berhasil menancap di 2 warna di saat yang sama
          atau dengan kata lain letaknya ada di garis pemisah antar tiap kolom.
        </Text>
      </View>
      <View
        style={[styles.penentuanSkorAtauPoinDiHaWrapper, styles.wrapperLayout1]}
      >
        <Text style={[styles.penentuanSkorAtau, styles.penentuanSkorAtauTypo]}>
          Penentuan skor atau poin di hasil akhir perolehan angka akan
          disesuaikan dengan tempat penancapan anak panah di papan target
          apabila anak panah posisinya bersilangan dari anak panah lain.
        </Text>
      </View>
      <View
        style={[
          styles.skorUntukPenilaianAngkaTidWrapper,
          styles.wrapperLayout2,
        ]}
      >
        <Text style={[styles.penentuanSkorAtau, styles.penentuanSkorAtauTypo]}>
          Skor untuk penilaian angka tidak akan pemanah peroleh bila anak panah
          yang berhasil mengenai papan sasaran setelah pemantulan ke tanah.
        </Text>
      </View>
      <View
        style={[styles.sebelumPanitiaTelahSelesaiWrapper, styles.wrapperLayout]}
      >
        <Text style={[styles.penentuanSkorAtau, styles.penentuanSkorAtauTypo]}>
          Sebelum panitia telah selesai memeriksa hasil akhirnya, peserta atau
          para pemanah tak diperbolehkan menyentuh papan sasaran yang sudah
          dipakai untuk menembak.
        </Text>
      </View>
      <View
        style={[styles.sesudahPencabutanAnakPanahWrapper, styles.wrapperLayout]}
      >
        <Text style={[styles.penentuanSkorAtau, styles.penentuanSkorAtauTypo]}>
          Sesudah pencabutan anak panah dari papan sasaran, maka harus ada
          pemberian tanda di bagian lubang yang telah ditembak oleh pemanah.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout2: {
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  wrapperLayout1: {
    height: 82,
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  penentuanSkorAtauTypo: {
    width: 232,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_4xs,
    left: 19,
    top: 5,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  wrapperLayout: {
    height: 68,
    width: 260,
    backgroundColor: Color.colorWhite,
    left: 16,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  poin1: {
    top: 16,
    left: 133,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  setiapPoinYang: {
    width: 228,
    height: 56,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_4xs,
    left: 19,
    top: 5,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  setiapPoinYangPemanahBerhaWrapper: {
    top: 48,
    height: 66,
  },
  suatuKewajibanBagi: {
    height: 56,
  },
  suatuKewajibanBagiParaPemaWrapper: {
    top: 121,
  },
  perolehanNilaiMenjadiLebihWrapper: {
    top: 210,
  },
  penentuanSkorAtau: {
    height: 77,
  },
  penentuanSkorAtauPoinDiHaWrapper: {
    top: 298,
  },
  skorUntukPenilaianAngkaTidWrapper: {
    top: 387,
    height: 55,
  },
  sebelumPanitiaTelahSelesaiWrapper: {
    top: 449,
  },
  sesudahPencabutanAnakPanahWrapper: {
    top: 524,
  },
  poin: {
    backgroundColor: Color.colorGreen,
    width: 292,
    height: 615,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default Poin;
