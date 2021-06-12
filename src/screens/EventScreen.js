import React, { Component } from 'react';
import { Alert, Image } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, View, } from 'native-base';
import firebase from 'firebase';


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

  render() {
    return (
      <Container>

          <View style={{alignSelf: "flex-end", width: 50}}>
              <Button style={{backgroundColor:"firebrick"}} onPress={() => {this.goToLoginScreen()}}>
              <Icon name="log-out" style={{color: "white"}}/>
              <Text style={{color: "white", fontFamily:'sans-serif'}}>Sign Out</Text>
              </Button>
          </View>

        <Content padder>
        
        <View style={{height:120, width: 300, marginBottom:30, alignSelf: 'center', marginTop: 20, backgroundColor:"lightgrey", borderRadius:10}}>
          
            <View>
                <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Program’s name: [Diari Ramadan 1] Orang Asli: Realiti yang Tersingkap</Text>
                <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15, height: 20}}>Date: 17.4.2021</Text>
                <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Time: 2.30 pm - 3.30 pm</Text>
                <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Description: Ustaz Zaini Dahlan</Text>
                <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Starpoints: 30</Text>
              
        </View>
        </View>

        <View style={{height:190, width: 300, marginBottom:30, alignSelf: 'center', marginTop: 20, backgroundColor:"lightgrey", borderRadius:10}}>
          
          <View>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Program’s name: [Diari Ramadan 2]  How To become budiman)</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15, height: 20}}>Date: 24/4/2021</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Time: 10.00 am- 12.00 pm</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Description: The best people are those who are most beneficial to others</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>SPEAKER : BR. FIRDAUS WONG , SR.HELIZA HELMI AND SR.HAZWANI HELMI</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Starpoints: 40</Text>
      </View>
      </View>

      <View style={{height:120, width: 300, marginBottom:30, alignSelf: 'center', marginTop: 20, backgroundColor:"lightgrey", borderRadius:10}}>
          
          <View>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Program’s name: [Diari Ramadan 3] Lailatul Qadar</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15, height: 20}}>Date: 1.5.2021</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Time: 2.30 pm</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Description: Ustaz Hamid Jusoh</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Starpoints: 40</Text>
      </View>
      </View>

      <View style={{height:240, width: 300, marginBottom:30, alignSelf: 'center', marginTop: 20, backgroundColor:"lightgrey", borderRadius:10}}>
          
          <View>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Programs’s name: Jasa’s Sharing Islamic Knowledge Among People (SIKAP 1.0) Online</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15, height: 20}}>Date: 5.5.2021</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Time: 2.30 pm-3.30 pm </Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Description: SIKAP ialah sebuah program yang melibatkan sesi perkongsian mengenai pengalaman dan kisah bersama orang asli. Pada kali ini, Br Mubarak iaitu Alumni Kelab JASA, akan  berkongsi ilmu mengenai keunikan orang asli bersama kita.</Text>
              <Text style={{fontStyle:'bold', fontSize:14,  marginLeft:15, marginRight:15}}>Starpoints: 30</Text>
      </View>
      </View>
        </Content>

        <Footer>
          <FooterTab style={{backgroundColor:"darkolivegreen"}}>
            <Button  onPress={() => {this.goToHomeScreen()}}>
                <Icon name="home" style={{color: "white"}}/>
                <Text style={{color: "white", fontFamily:'sans-serif'}}>Home</Text>
            </Button>
            <Button onPress={() => {this.goToEventScreen()}}>
              <Icon name="calendar" style={{color: "white"}}/>
              <Text style={{color: "white", fontFamily:'sans-serif'}}>Events</Text>
            </Button>
            <Button onPress={() => {this.goToAboutScreen()}}>
              <Icon name="search" style={{color: "white"}}/>
              <Text style={{color: "white", fontFamily:'sans-serif'}}>About</Text>
            </Button>
            <Button onPress={() => {this.goToAchievementScreen()}}>
              <Icon name="trophy" style={{color: "white"}}/>
              <Text style={{color: "white", fontFamily:'sans-serif'}}>Achievement</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}
