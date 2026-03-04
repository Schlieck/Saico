import { StyleSheet, Text, View } from 'react-native';

export default function leituras() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Leituras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});