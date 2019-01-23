import React, { Component } from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import TinCircus from '../containers/TinCircus'
import {
  AppRegistry,
  Alert,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class SplashScreen extends Component {

constructor(props){
  super(props);
  this.state = {
    isShowingText: true,
    pageNumber: null
  }
  this._onButtonClick = this._onButtonClick.bind(this)
  this.pageForward = this.pageForward.bind(this)
}

_onButtonClick(){

  this.setState(() => {
  return {isShowingText: false}
 })
 this.pageForward();
}

pageForward(){
 this.setState(() => {
   return {pageNumber: 3}
 })
 Alert.alert('you pressed the button')
}

  render() {

    <TinCircus pageForward={this.state.pageNumber} />

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
              source={require('../images/splashPage.psd')}
              style={styles.logo}
              />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  logoContainer:{
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 400,
    height: 400,
    resizeMode: 'contain'
  },
});
