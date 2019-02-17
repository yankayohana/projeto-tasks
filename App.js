import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import commonStyle from './src/commonStyle';
import { Font } from 'expo';

export default class App extends React.Component {
  // aqui eu inicio com falso e apenas quando a fonte estiver pronta, ele passa a ser verdadeiro.
  state = { 
    fontLoaded: false,
  };
  // async e await garantem que o estado da fonte so será alterado após esse processo ser feito.
  async componentDidMount() {
    await Font.loadAsync({
         'Lato': require('./assets(1)/assets/fonts/Lato.ttf')
     });

    this.setState({ fontLoaded: true });
   }

  render() {
    return (
      <View style={styles.container}>
      {this.state.fontLoaded? (
        <Text style={styles.welcome}>eae yanka!</Text>
      ): (
      <ActivityIndicator size="large"/>
      )}
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  welcome: {
    fontFamily: commonStyle.fontFamily,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
