import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import Header from './components/Header';
import Main from './components/Main';
export default function App() {
  return (
      <ScrollView horizontal= {false}>
      <View style ={{ height:1200}}>
        
        <Header />
        <Main/>
        
        <StatusBar style="auto" />
      </View>
      </ScrollView> 
  );
}


