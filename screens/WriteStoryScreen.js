import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
        <Header
          backgroundColor={'#FFB6C1'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
        /> 
           <TextInput
             style={styles.inputBox}
             placeholder="Story Title"
           />
            <TextInput
             style={styles.inputBox}
             placeholder="Author"
           />  
           < TextInput
           style={styles.inputBox2}
           multiline= {true}
           placeholder="Write Your Story"
         />
           <TouchableOpacity style={styles.button}>
               <Text>Submit</Text>
           </TouchableOpacity>
                           
         </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox:{
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 1,
        outline: 'none',
      },
      inputBox2:{
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 240,
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        outline: 'none',
        multiline: true  
    },
     button:{
        width: '10%',
        height: 50,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#FFB6C1',
        borderColor: 'black',
        borderWidth: 1 
    }
})