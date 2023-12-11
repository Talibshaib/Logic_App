import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useState} from 'react';

export default function Incrementer() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.main}>
      <View style={styles.box}>
        <Text style={styles.text}>{counter}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setCounter(counter + 10);
          }}>
          <Text style={styles.btntext}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setCounter(0);
          }}>
          <Text style={styles.btntext}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (counter <= 0) {
              setCounter(0);
            } else {
              setCounter(counter - 10);
            }
          }}>
          <Text style={styles.btntext}>-10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    // height: '100%',
    // width: '100%',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '400',
  },
  box: {
    width: 200,

    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    borderBlockColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    // marginBottom
    width: 90,
    borderRadius: 6,
  },
  btntext: {
    color: 'white',
    fontWeight: '500',
  },
});
