import React, { Component } from 'react';
import { Alert, Image, TouchableHighlight} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, View, } from 'native-base';
import firebase from 'firebase';
import "firebase/firestore"

export const firestore = firebase.firestore()


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

    const shadowStyle={
      shadowOpacity:1,
      shadowRadius:0,
      shadowColor:'red',
      shadowOffset:{width:1,height:1}
    }

    return (
      <Container>

          <View style={{alignSelf: "flex-end", width: 50}}>
              <Button style={{backgroundColor:"firebrick"}} onPress={() => {this.goToLoginScreen()}}>
              <Icon name="log-out" style={{color: "white"}}/>
              <Text style={{color: "white", fontFamily:'sans-serif'}}>Sign Out</Text>
              </Button>
          </View>

        <Content padder>
          <View style={{alignItems:'center'}}>
            <Text style={{color: "darkolivegreen", fontFamily:'sans-serif', alignItems:'center', fontWeight: "bold",  fontSize: 45}}>280</Text>
            <Text style={{color: "black", fontFamily:'sans-serif', alignItems:'center', fontWeight:"800"}}>Total Starpoints Collected!</Text>
          </View>

            <View style={{marginTop:50, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:12, marginLeft:35, marginTop:10, marginBottom:10, flexDirection:'column'}}>
                Society/Event: Annual Grand Meeting {"\n"} 
                Level: University {"\n"}
                Session: Semester 2, 2020/2021 {"\n"}
                Type: Participant {"\n"}
                Points: 30
              </Text>
              
            </View>

            <View style={{marginTop:20, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:12, marginLeft:35, marginTop:10, marginBottom:10, flexDirection:'column'}}>
                Society/Event: [Diari Ramadan 1] {"\n"}Orang Asli: Realiti yang Tersingkap {"\n"} 
                Level: University {"\n"}
                Session: Semester 2, 2020/2021 {"\n"}
                Type: Participant {"\n"}
                Points: 30
              </Text>
            </View>

            <View style={{marginTop:20, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:12, marginLeft:35, marginTop:10, marginBottom:10, flexDirection:'column'}}>
                Society/Event: [Diari Ramadan 2]{"\n"}How To become budiman) {"\n"} 
                Level: University {"\n"}
                Session: Semester 2, 2020/2021 {"\n"}
                Type: Participant {"\n"}
                Points: 40
              </Text>
            </View>

            <View style={{marginTop:20, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:12, marginLeft:35, marginTop:10, marginBottom:10, flexDirection:'column'}}>
                Society/Event: [Diari Ramadan 3]{"\n"}Lailatul Qadar {"\n"} 
                Level: Univeristy {"\n"}
                Session: Semester 2, 2020/2021 {"\n"}
                Type: Participant {"\n"}
                Points: 40
              </Text>
            </View>

            <View style={{marginTop:20, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:12, marginLeft:35, marginTop:10, marginBottom:10, flexDirection:'column'}}>
                Society/Event: Jasa’s Sharing Islamic {"\n"}Knowledge Among People {"\n"}(SIKAP 1.0) Online {"\n"} 
                Level: Univeristy {"\n"}
                Session: Semester 2, 2020/2021 {"\n"}
                Type: Participant {"\n"}
                Points: 30
              </Text>
            </View>
            
            <View style={{marginTop:20, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:12, marginLeft:35, marginTop:10, marginBottom:10, flexDirection:'column'}}>
                Society/Event: Protect Mah Meri Tribe {"\n"} 
                Level: National {"\n"}
                Session: Semester 1, 2019/2020 {"\n"}
                Type: Participant {"\n"}
                Points: 80
              </Text>
            </View>

            <View style={{marginTop:20, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:12, marginLeft:35, marginTop:10, marginBottom:10, flexDirection:'column'}}>
                Society/Event: Annual Grand Meeting {"\n"} 
                Level: University {"\n"}
                Session: Semester 2, 2018/2019 {"\n"}
                Type: Participant {"\n"}
                Points: 30
              </Text>
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
