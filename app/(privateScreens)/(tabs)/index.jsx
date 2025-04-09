import { View, StyleSheet, Text } from "react-native";

export default function Sondazhet() {
  return (
    <View hasFlex style={[styles.container]}>
      <Text>First Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
