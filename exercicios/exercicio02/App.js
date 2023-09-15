import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import Primeiro from './componentes/Primeiro';

export default function App() {
  return (
    <View style={styles.container}>
      <Primeiro />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})