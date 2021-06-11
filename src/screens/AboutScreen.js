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
      <Container style={{backgroundColor:"mintcream"}}>

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
              
              <Text style={{textAlign: "center", fontSize:30, fontFamily:'sans-serif', height: 90, fontWeight: "bold", marginTop: 10, color:"darkolivegreen"}}>BOARD OF JASA CLUB IIUM 2021/2022</Text>
              <Image source={{uri:'https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/147295620_3813698268652748_4627978938872631467_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=973b4a&_nc_ohc=PLrZNpTAXnkAX9vg6t2&_nc_ht=scontent.fpen1-1.fna&oh=101a68f6722132b77e9d3204a567e388&oe=60C811AA'}} style={{width: 350, height: 220, alignSelf: 'center'}}/>

              <Text style={{textAlign: "center", fontSize:30, fontFamily:'sans-serif', height: 90, fontWeight: "bold", marginTop: 10, color:"darkolivegreen"}}>MANAGEMENT BOARD 2020/2021</Text>
              <Image source={{uri:'https://scontent.fpen1-1.fna.fbcdn.net/v/t1.6435-9/148904086_3833837009972207_6414847417021036296_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=HRSho-hQB3QAX8cOr8r&_nc_ht=scontent.fpen1-1.fna&oh=f95d839124e416fdbcc81522c658b71f&oe=60C84C3D'}} style={{width: 350, height: 250, alignSelf: 'center'}}/>
             
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
