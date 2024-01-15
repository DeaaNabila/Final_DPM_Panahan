import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const KostumMemanah = ({ onClose }) => {
  return (
    <View style={styles.kostumMemanah}>
      <Text style={styles.kostumMemaanah}>Kostum Memaanah</Text>
      <View
        style={[styles.pakaianYangDipakaiUntukMemWrapper, styles.wrapperLayout]}
      >
        <Text style={styles.pakaianYangDipakai}>
          Pakaian yang dipakai untuk memanah pun telah ditentukan dan aturannya
          adalah kostum wajib berbahan ketat. Contoh kostum ini mirip seperti
          pakaian-pakaian untuk olahraga lainnya pada umumnya.
        </Text>
      </View>
      <View
        style={[styles.padaKostumPemanahPunDesainWrapper, styles.wrapperLayout]}
      >
        <Text style={[styles.padaKostumPemanah, styles.padaKostumPemanahTypo]}>
          Pada kostum pemanah pun desainnya harus ada tempat penyimpan anak
          panah di mana tempat ini perlu terikat di bagian pinggang pemanah,
          tujuan dari bagian ini adalah supaya anak panah tidaklah sampai
          mengenai tali busur yang hendak dipakai.
        </Text>
      </View>
      <View
        style={[styles.seluruhPesertaLombaAtauPerWrapper, styles.wrapperLayout]}
      >
        <Text
          style={[styles.seluruhPesertaLomba, styles.padaKostumPemanahTypo]}
        >{`Seluruh peserta lomba atau pertandingan memanah wajib memakai sebuah angka pada punggungnya dan harus angka yang memang telah ditentukan. Tujuan dari penggunaan angka di punggung ini adalah supaya mampu membantu mengenali target anak panah di 
satu titik.`}</Text>
      </View>
      <View style={styles.kstmRemovebgPreview1Parent}>
        <Image
          style={styles.kstmRemovebgPreview1Icon}
          contentFit="cover"
          source={require("../assets/kstmremovebgpreview-1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>{`6
`}</Text>
        <Image
          style={styles.ksmtnRemovebgPreview1Icon}
          contentFit="cover"
          source={require("../assets/ksmtnremovebgpreview-1.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>{`6
`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    width: 260,
    left: 16,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  padaKostumPemanahTypo: {
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
  textTypo: {
    height: 17,
    width: 18,
    fontSize: FontSize.size_7xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  kostumMemaanah: {
    top: 19,
    left: 86,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    color: Color.colorWhite,
    position: "absolute",
  },
  pakaianYangDipakai: {
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
  pakaianYangDipakaiUntukMemWrapper: {
    top: 48,
    height: 90,
  },
  padaKostumPemanah: {
    top: 10,
    height: 70,
  },
  padaKostumPemanahPunDesainWrapper: {
    top: 149,
    height: 102,
  },
  seluruhPesertaLomba: {
    top: 8,
  },
  seluruhPesertaLombaAtauPerWrapper: {
    top: 262,
    height: 113,
  },
  kstmRemovebgPreview1Icon: {
    top: 3,
    left: 12,
    width: 109,
    height: 94,
    position: "absolute",
  },
  text: {
    top: 29,
    left: 91,
    color: Color.colorBlack,
  },
  ksmtnRemovebgPreview1Icon: {
    top: -4,
    left: 115,
    width: 120,
    height: 101,
    position: "absolute",
  },
  text1: {
    top: 26,
    left: 196,
    color: Color.colorWhite,
    height: 17,
    width: 18,
    fontSize: FontSize.size_7xs,
  },
  kstmRemovebgPreview1Parent: {
    top: 386,
    left: 25,
    width: 243,
    height: 82,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  kostumMemanah: {
    backgroundColor: Color.colorGreen,
    width: 292,
    height: 487,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default KostumMemanah;
