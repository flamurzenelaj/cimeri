import { ActivityIndicator, StyleSheet } from "react-native";

const Loading = ({ color, style, ...otherProps }) => {
  return (
    <ActivityIndicator
      color={color}
      style={[styles.container, style]}
      {...otherProps}
    />
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
