/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  TextInput,
} from 'react-native';

export default class asyntproject extends Component {
  constructor() {
    super();
    this.state = {
      name : ' ',
      hoby : ' ',
      textname : '',
      texthoby : ' ',
    };

    AsyncStorage.getItem('name',(error, result)=> {
      if(result) {
        this.setState({
          name: result
        });
      }
    });

    AsyncStorage.getItem('hoby', (error, result) => {
      if (result) {
        this.setState({
          hoby: result
        });
      }
    });

    AsyncStorage.getItem('user', (error, result)=> {
      if (result) {
        let resultParsed = JSON.parse(result)
        this.setState({
          name: resultParsed.name,
          hoby: resultParsed.hoby
        });
      }
    });
  }

  saveData (){
    let name = this.state.textname;
    let hoby = this.state.texthoby;
    let data = {
      name: name,
      hoby: hoby
    }

    AsyncStorage.setItem('user',JSON.stringify(data));
    AsyncStorage.setItem('name', name);
    AsyncStorage.setItem('hoby', hoby);

    this.setState ({
      name :name,
      hoby  : hoby
    });
    alert('Data tersimpan');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Kenalan Yuk :)
        </Text>
        <Text style={styles.instructions}>
          Nama: {this.state.name}{'\n'}
          Hobi: {this.state.hoby}
        </Text>
        <TextInput
          style={styles.textinput}
          onChangeText = {(textname) => this.setState({textname})}
          placeholder='Nama'
        />
        <TextInput
          style={styles.textinput}
          onChangeText={(texthoby) => this.setState({texthoby})}
          placeholder='hobi'
        />
        <Button
          title='simpan'
          onPress={this.saveData.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textinput: {
    height: 35,
    width: 300,
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom:8,
    borderWidth:1,
    borderColor:'grey',
    padding: 8
  }
});

AppRegistry.registerComponent('asyntproject', () => asyntproject);
