import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Turnamen = ({ onClose }) => {
  return (
    <View style={styles.turnamen}>
      <Text style={[styles.turnamen1, styles.turnamen1Typo]}>Turnamen</Text>
      <View style={styles.peraturanDalamOlahragaMemanWrapper}>
        <Text
          style={[styles.peraturanDalamOlahraga, styles.turnamen1Typo]}
        >{`Peraturan dalam olahraga memanah juga meliputi turnamen di mana berlangsungnya putaran perorangan tiap turnamen yang FITA lakukan adalah tiap 1 atau 2 hari. Dan pada setiap turnamennya, ada 144 anak panah dan untuk tiap 36 anak panahnya ada satu kali jeda. Turnamen dibagi dari jarak yang paling jauh.

Jarak tembak panahan paling jauh akan dimulai di hari pertama jika misalnya turnamen panahan dilangsungkan lebih dari 2 hari. Ada 6 kapten lapangan yang akan menjadi pengawas setiap turnamen dan setiap peserta seluruhnya akan memulai lomba di hari pertama dengan 6 anak panah untuk bidikan percobaan dan bagian dari pemanasan.

Karena merupakan bidikan percobaan, maka otomatis tak ada pemberian angka sebagai poin. Barulah ketika pemanah melakukan bidikan selanjutnya, barulah akan dikalkulasikan anak panah untuk pemasukan nilai di poin kompetisi turnamen.`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  turnamen1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    position: "absolute",
  },
  turnamen1: {
    top: 19,
    left: 114,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  peraturanDalamOlahraga: {
    top: 10,
    left: 19,
    fontSize: FontSize.size_4xs,
    color: Color.colorDimgray_100,
    width: 228,
    height: 322,
  },
  peraturanDalamOlahragaMemanWrapper: {
    top: 48,
    left: 16,
    backgroundColor: Color.colorWhite,
    width: 260,
    height: 342,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  turnamen: {
    backgroundColor: Color.colorGreen,
    width: 292,
    height: 409,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default Turnamen;
