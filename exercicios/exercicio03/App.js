import { View, StyleSheet } from 'react-native';
import MaxMin from './components/MaxMin';

export default function App() {
  return (
    <View style={style.App}>
      <MaxMin x={180} y={8} />
      <MaxMin x={5} y={12} />
    </View>
  );
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})