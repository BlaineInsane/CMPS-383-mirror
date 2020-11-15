import React from "react";
import { View, StyleSheet } from "react-native";
export function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
  },
});
