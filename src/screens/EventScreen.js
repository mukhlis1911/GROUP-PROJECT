import React, { Component, useState } from 'react';
import { Alert, Image } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, View, TextInput } from 'native-base';
import firebase from 'firebase';
import "firebase/firestore";

export const firestore = firebase.firestore();



export default class HomeScreen extends Component {

  constructor(){
    super();
  }

    goToHomeScreen = () => {
        this.props.navigation.navigate("Home");
    }  
    goToEventScreen = () => {
        this.props.navigation.navigate("Event");
    }
    goToAboutScreen = () => {
        this.props.navigation.navigate("About");
    }
    goToAchievementScreen = () => {
        this.props.navigation.navigate("Achievement");
    }
    goToLoginScreen = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
          this.props.navigation.navigate("Login");
          })
        .catch(function(error) {
          Alert.alert('Status', error.toString(error));
        });
    }

    state = {
      matricNo: ""
    }

  render() {
    const { matricNo } = this.state;
    return (
      <Container>

          <View style={{alignSelf: "flex-end", width: 50}}>
              <Button style={{backgroundColor:"firebrick"}} onPress={() => {this.goToLoginScreen()}}>
              <Icon name="log-out" style={{color: "white"}}/>
              <Text style={{color: "white", fontFamily:'sans-serif'}}>Sign Out</Text>
              </Button>
          </View>

        <Content padder>
        
        <View style={{width: 400, alignSelf: 'center', marginTop: 30, backgroundColor:"green", borderRadius:10}}>
          
            <View style={{marginTop:10}}>
                <Text style={{fontStyle:'200', fontSize:18,  marginLeft:15, marginRight:15, marginBottom:10}}>[Diari Ramadan 1] Orang Asli: Realiti yang Tersingkap</Text>
                <View style={{backgroundColor:"lightgrey", borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                  <Text style={{fontFamily:'sans-serif', fontWeight:'150', fontSize:15,  marginLeft:15, marginRight:15, marginTop:10}}>Date: 17.4.2021</Text>
                  <Text style={{fontFamily:'sans-serif', fontWeight:'150', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:5}}>Time: 2.30 pm - 3.30 pm</Text>
                  <Text style={{fontFamily:'sans-serif', fontWeight:'100', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:5}}>Description: Ustaz Zaini Dahlan</Text>
                  <Text style={{fontFamily:'sans-serif', fontWeight:'100', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:10}}>Starpoints: 30</Text>
                  <Button style={{backgroundColor: "forestgreen", width:90, height:30, justifyContent: 'center', fontFamily:'sans-serif', fontWeight:'80', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:10, borderRadius:10}}>
                    <Text>
                      Join
                    </Text>
                    </Button>
                </View>
            </View>
        </View>

        <View style={{width: 400, alignSelf: 'center', marginTop: 30, backgroundColor:"green", borderRadius:10}}>
          
          <View style={{marginTop:10}}>
              <Text style={{fontStyle:'200', fontSize:18,  marginLeft:15, marginRight:15, marginBottom:10}}>[Diari Ramadan 2] How to Become Budiman</Text>
              <View style={{backgroundColor:"lightgrey", borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                <Text style={{fontFamily:'sans-serif', fontWeight:'150', fontSize:15,  marginLeft:15, marginRight:15, marginTop:10}}>Date: 24.4.2021</Text>
                <Text style={{fontFamily:'sans-serif', fontWeight:'150', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:5}}>Time: 10.00 pm - 12.00 pm</Text>
                <Text style={{fontFamily:'sans-serif', fontWeight:'100', fontSize:15,  marginLeft:15, marginRight:15}}>Description: The best people are those who are most beneficial to others</Text>
                <Text style={{fontFamily:'sans-serif', fontWeight:'100', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:5}}>Speakers : Br. Firdaus Wong , Sr. Heliza Helmi and Sr. Hazwani Helmi</Text>
                <Text style={{fontFamily:'sans-serif', fontWeight:'100', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:10}}>Starpoints: 40</Text>
                <Button style={{backgroundColor: "forestgreen", width:90, height:30, justifyContent: 'center', fontFamily:'sans-serif', fontWeight:'80', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:10, borderRadius:10}}>
                    <Text>
                      Join
                    </Text>
                    </Button>
              </View>
          </View>
        </View>

        <View style={{width: 400, alignSelf: 'center', marginTop: 30, backgroundColor:"green", borderRadius:10}}>
          
          <View style={{marginTop:10}}>
              <Text style={{fontStyle:'200', fontSize:18,  marginLeft:15, marginRight:15, marginBottom:10}}>[Diari Ramadan 3] Lailatul Qadar</Text>
              <View style={{backgroundColor:"lightgrey", borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                <Text style={{fontFamily:'sans-serif', fontWeight:'150', fontSize:15,  marginLeft:15, marginRight:15, marginTop:10}}>Date: 1.5.2021</Text>
                <Text style={{fontFamily:'sans-serif', fontWeight:'150', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:5}}>Time: 2.30 pm</Text>
                <Text style={{fontFamily:'sans-serif', fontWeight:'100', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:5}}>Description: Ustaz Hamid Jusoh</Text>
                <Text style={{fontFamily:'sans-serif', fontWeight:'100', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:10}}>Starpoints: 40</Text>
                <Button style={{backgroundColor: "forestgreen", width:90, height:30, justifyContent: 'center', fontFamily:'sans-serif', fontWeight:'80', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:10, borderRadius:10}}>
                    <Text>
                      Join
                    </Text>
                    </Button>
              </View>
          </View>
        </View>

        <View style={{width: 400, alignSelf: 'center', marginTop: 30, backgroundColor:"green", borderRadius:10}}>
          
          <View style={{marginTop:10}}>
              <Text style={{fontStyle:'200', fontSize:18,  marginLeft:15, marginRight:15, marginBottom:10}}>JASA's Sharing Islamic Knowledge Among People (SIKAP 1.0) Online</Text>
              <View style={{backgroundColor:"lightgrey", borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                <Text style={{fontFamily:'sans-serif', fontWeight:'150', fontSize:15,  marginLeft:15, marginRight:15, marginTop:10}}>Date: 5.5.2021</Text>
                <Text style={{fontFamily:'sans-serif', fontWeight:'150', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:5}}>Time: 2.30 pm - 3.30 pm</Text>
                <Text style={{fontFamily:'sans-serif', fontWeight:'100', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:5}}>Description: SIKAP is a program that involves sharing sessions regarding the experiences and stories being with Orang Asli. This session, Br. Mubarak, an alumni of the JASA Club will be sharing his knowledge of the uniqueness of Orang Asli with us.</Text>
                <Text style={{fontFamily:'sans-serif', fontWeight:'100', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:10}}>Starpoints: 30</Text>
                <Button style={{backgroundColor: "forestgreen", width:90, height:30, justifyContent: 'center', fontFamily:'sans-serif', fontWeight:'80', fontSize:15,  marginLeft:15, marginRight:15, marginBottom:10, borderRadius:10}}>
                    <Text>
                      Join
                    </Text>
                    </Button>
              </View>
          </View>
        </View>

        </Content>

        <Footer>
          <FooterTab style={{backgroundColor:"darkolivegreen"}}>
            <Button  onPress={() => {this.goToHomeScreen()}}>
                <Icon name="home" style={{color: "white"}}/>
                <Text style={{color: "white", fontFamily:'sans-serif', fontSize:10}}>Home</Text>
            </Button>
            <Button onPress={() => {this.goToEventScreen()}}>
              <Icon name="calendar" style={{color: "white"}}/>
              <Text style={{color: "white", fontFamily:'sans-serif', fontSize:10}}>Events</Text>
            </Button>
            <Button onPress={() => {this.goToAboutScreen()}}>
              <Icon name="search" style={{color: "white"}}/>
              <Text style={{color: "white", fontFamily:'sans-serif', fontSize:10}}>About</Text>
            </Button>
            <Button onPress={() => {this.goToAchievementScreen()}}>
              <Icon name="trophy" style={{color: "white"}}/>
              <Text style={{color: "white", fontFamily:'sans-serif', fontSize:10}}>Achievement</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}
