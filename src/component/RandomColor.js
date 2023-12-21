import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {useState} from 'react';
import React from 'react';
import {number} from 'yup';

const RcolorGen = () => {
  const red = Math.round(Math.random() * 256);
  const blue = Math.round(Math.random() * 256);
  const orrange = Math.round(Math.random() * 256);

  // console.log(`${red},${blue},${orrange}`);
  return `rgb(${red},${blue},${orrange})`;
};

export default function RandomColor() {
  const [newColor, setNewColor] = useState([]);

  return (
    <View style={styles.main}>
      <Button
        title="Generate"
        onPress={() => {
          // setNewColor(RcolorGen());
          setNewColor([...newColor, RcolorGen()]);
        }}
      />
      <Button
        title="Clear"
        onPress={() => {
          setNewColor([]);
        }}
      />
      <FlatList
        data={newColor}
        renderItem={({item}) => {
          // console.log(item);
          return (
            <View style={styles.body}>
              <View
                style={{
                  width: 200,
                  height: 100,
                  borderRadius: 6,
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: item,
                }}>
                <Text style={styles.txt}>{item}</Text>
              </View>
            </View>
          );
        }}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
  },
  main: {
    margin: 10,
    padding: 10,
  },

  txt: {
    color: 'white',
    fontSize: 18,
  },
});
