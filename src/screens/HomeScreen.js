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
          {/* <Image style={{height:200, width:250}} source={{ uri: 'https://github.com/mukhlis1911/GROUP-PROJECT/blob/main/assets/jasalogo.jpg',}}></Image> */}


        <Content padder>
        <Text style={{textAlign: "center", fontSize:20, fontFamily:'sans-serif', height: 50, fontWeight: "bold", marginTop: 10}}>Club's News Feed</Text>
        <View style={{height:250, marginBottom:30, marginLeft:35, marginRight:35, backgroundColor:"lightgrey", borderRadius:20}}>
            <View style={{height:180, margin:10, backgroundColor:"floralwhite", borderRadius:30}}></View>
            <View>
                <Text style={{fontStyle:'italic', fontSize:15, alignSelf:'center'}}>Protect Mah Meri Tribe</Text>
            </View>
        </View>
        <View style={{height:250, marginBottom:30, marginLeft:35, marginRight:35, backgroundColor:"lightgrey", borderRadius:20}}>
            <View style={{height:180, margin:10, backgroundColor:"floralwhite", borderRadius:30}}></View>
            <View>
                <Text style={{fontStyle:'italic', fontSize:15, alignSelf:'center'}}>Ensino One Stop Centre Donation</Text>
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