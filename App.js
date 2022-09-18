import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Button, Text } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.main}>
    <View style={styles.text}>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="abcd"
        keyboardType="numeric"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <View style={styles.button}>
      <Button
        title="Login"
        color="#00b6ed"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      </View>

      <View style={styles.text1}>
        <Text >Forgot your password?</Text>
      </View>

      <View style={styles.text2}>
        <Text >Register</Text>
      </View>
     
    </SafeAreaView>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    width: '100%',
    height: '100%',
    backgroundColor: '#ddd',
  },

  text:{
    marginTop:300,
    width:'100%',
    height:300,
    display: "flex",
    justifyContent: "center",
  },

  input: {
    height: 50,
    margin: 12,
    width:250,
    padding: 10,
    borderRadius:40,
    marginLeft:90,
    backgroundColor: 'white',
    paddingLeft:50,
  },
  
  button:{
    backgroundColor:'#00b6ed',
    width:"60%",
    marginLeft:90,
  },

  text1:{
    marginTop: 40,
    marginLeft: 150,
    width:'100%',
    height: 20,
  },

  text2:{
    marginTop: 40,
    marginLeft: 190,
    width:'100%',
    height: 20,
  },

});

export default UselessTextInput;
