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
        <Text style={{textAlign: "center", fontSize:30, fontFamily:'sans-serif', height: 50, fontWeight: "bold", marginTop: 10, color:"darkolivegreen"}}>Background</Text>
        <View>
              <Text style={{fontStyle:'bold', textAlign: "center", fontSize:16, alignSelf:'center'}}>Jalinan Siswa Bersama Masyarakat Orang Asli or its acronym JASA is one of the student's organization supervise under the University Centre for Community Engagement (UCCE) of International Islamic University Malaysia (IIUM).</Text>
              <Text style={{fontStyle:'bold', textAlign: "center", fontSize:16, alignSelf:'center'}}>Established in the year of 2001, JASA now vigorously focuses on serving the aboriginal communities around Peninsular of Malaysia mainly on education as well as directly promote the Islamic values through our attitude and activities during the programs.</Text>
              <Text style={{fontStyle:'bold', textAlign: "center", fontSize:16, height: 50, alignSelf:'center'}}>Due to some internal problems, this club was re-established in 2013.</Text>

        <Text style={{textAlign: "center", fontSize:30, fontFamily:'sans-serif', height: 40, fontWeight: "bold", marginTop: 10, color:"darkolivegreen"}}>Vision</Text>
              <Text style={{fontStyle:'bold', textAlign: "center", fontSize:16, height: 50, alignSelf:'center'}}>To bring at least one aboriginal children to study at IIUM before 2023.</Text>

        <Text style={{textAlign: "center", fontSize:30, fontFamily:'sans-serif', height: 40, fontWeight: "bold", marginTop: 10, color:"darkolivegreen"}}>Mission</Text>
              <Text style={{fontStyle:'bold', textAlign: "center", fontSize:16, height: 70, alignSelf:'center'}}>To develop a well-rounded aboriginal students who are knowledgeable, highly soft-skilled and possess good moral values.</Text>
        
        <Text style={{textAlign: "center", fontSize:30, fontFamily:'sans-serif', height: 40, fontWeight: "bold", marginTop: 10, color:"darkolivegreen"}}>Motto</Text>
              <Text style={{fontStyle:'italic', fontSize:20, alignSelf:'center', height: 100}}>Serve wholeheartedly, inspire humanity.</Text>
              
              <Text style={{textAlign: "center", fontSize:30, fontFamily:'sans-serif', height: 50, fontWeight: "bold", marginTop: 10, color:"darkolivegreen"}}>PRESIDENT</Text>
              
              <Text style={{textAlign: "center", fontSize:30, fontFamily:'sans-serif', fontWeight: "bold", marginTop: 10, color:"darkolivegreen"}}>MANAGEMENT BOARD 2020/2021</Text>
        
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
