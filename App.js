import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Nine, Eight, Seven, Six, Five, Four, Three, Two, One, Zero } from './components/Numbers';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '0',
    };
  }

  backspace = () => {
    let currentVal = this.state.value;
    let newVal = currentVal.slice(0, currentVal.length - 1);
    this.setState({ value: newVal });
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txt}>First React Calculator!</Text>
        </View>
        <View style={styles.calc}>
          <View style={styles.display}>
            <Text style={{color: '#fff', fontSize: 30, }}>
              {this.state.value}
            </Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.btnsHeader}>
              <TouchableOpacity style={styles.clear}>
                <Text>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.clear} onPress={this.backspace}>
                <Text>Backspace</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnsbody}>
              <View style={styles.numbers}>
                <Nine number="9" onPress={
                    () => (this.state.value == '0') ? this.setState({ value: '9'}) : this.setState({ value: this.state.value + '9'})
                  }/>
                <Eight number="8" />
                <Seven number="7" />
                <Six number="6" />
                <Five number="5" />
                <Four number="4" />
                <Three number="3" />
                <Two number="2" />
                <One number="1" />
                <Zero number="0" />
              </View>
              <View style={styles.operations}>
                <TouchableOpacity style={styles.oppBtn} op="+">
                  <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.oppBtn} op="-">
                  <Text>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.oppBtn} op="*">
                  <Text>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.oppBtn} op="/">
                  <Text>/</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.oppBtnLast}>
                  <Text>=</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
  },
  header: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 35,
    color: '#e6e6ff',
    padding: 20,
  },
  calc: {
    flex: 5,
    backgroundColor: '#000',
    marginLeft: 20,
    marginRight: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  display: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    padding: 7,
  },
  buttons: {
    flex: 5,
    backgroundColor: 'rgba(153,153,153, 0.7)',
  },
  btnsHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  clear: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRightWidth: 0.5,
    borderColor: 'red',
    borderLeftWidth: 0.5,
  },
  btnsbody: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers:{
    flex: 2,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    backgroundColor: 'red',
  },
  operations:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'orange',
  },
  oppBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '33.33%',
    borderColor: 'red',
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
  },
  oppBtnLast: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '33.33%',
    borderColor: 'red',
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
  }
});
