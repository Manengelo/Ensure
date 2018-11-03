import React, {Component} from 'react';
import {StyleSheet,View,Image,StatusBar} from 'react-native';
import {Button,Text} from 'native-base';



const Home=function(props){
    return(
        <View>
         <Button onPress={props.policies}><Text>Policies</Text></Button>
        </View>
    )
};

const styles= StyleSheet({

});
export default Home;