import React, { Component } from 'react';
import { Alert, Image, TouchableHighlight} from 'react-native';
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
            <Text style={{color: "darkolivegreen", fontFamily:'sans-serif', alignItems:'center', fontWeight: "bold",  fontSize: 45}}>130</Text>
            <Text style={{color: "black", fontFamily:'sans-serif', alignItems:'center', fontWeight:"800"}}>Total Starpoints Collected!</Text>
          </View>

            <View style={{height:100, marginTop:50, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:15, marginLeft:35, marginTop:10, flexDirection:'column'}}>
                Society/Event: Protect Mah Meri Tribe {"\n"} 
                Level: National {"\n"}
                Session: Semester 1, 2019/2020 {"\n"}
                Type: Participant {"\n"}
                Points: 50
              </Text>
            </View>

            <View style={{height:100, marginTop:20, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:15, marginLeft:35, marginTop:10, flexDirection:'column'}}>
                Society/Event: Annual Grand Meeting {"\n"} 
                Level: University {"\n"}
                Session: Semester 1, 2019/2020 {"\n"}
                Type: Participant {"\n"}
                Points: 30
              </Text>
            </View>

            <View style={{height:100, marginTop:20, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:15, marginLeft:35, marginTop:10, flexDirection:'column'}}>
                Society/Event: Annual Grand Meeting {"\n"} 
                Level: University {"\n"}
                Session: Semester 2, 2018/2019 {"\n"}
                Type: Participant {"\n"}
                Points: 30
              </Text>
            </View>

            <View style={{height:100, marginTop:20, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:15, marginLeft:35, marginTop:10, flexDirection:'column'}}>
                Society/Event: (idk) {"\n"} 
                Level: National {"\n"}
                Session: Semester 2, 2018/2019 {"\n"}
                Type: Participant {"\n"}
                Points: 0
              </Text>
            </View>

            <View style={{height:100, marginTop:20, marginLeft:20, marginRight:20, backgroundColor:"#acadac", borderRadius:10, flexDirection:'row'}}>
              <Icon name="trophy" style={{color:"gold", alignSelf:'center',marginLeft:30}}/>
              <Text style={{fontSize:15, marginLeft:35, marginTop:10, flexDirection:'column'}}>
                Society/Event: (idk) {"\n"} 
                Level: National {"\n"}
                Session: Semester 2, 2018/2019 {"\n"}
                Type: Participant {"\n"}
                Points: 0
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