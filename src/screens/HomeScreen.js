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
        <Text style={{textAlign: "center", fontSize:32, fontFamily:'sans-serif', height: 70, fontWeight: "bold", marginTop: 10, color:"darkolivegreen"}}>Club's News Feed</Text>
        <View style={{height:230, marginBottom:30, marginLeft:35, marginRight:35, backgroundColor:"lightgrey", borderRadius:20}}>
            <View style={{height:180, margin:10, backgroundColor:"floralwhite", borderRadius:30}}></View>
            <View>
                <Text style={{fontStyle:'italic', fontSize:14, alignSelf:'center'}}>POSTPONEMENT OF JASA's PROGRAM</Text>
            </View>
        </View>
            <View>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', height: 20}}>Assalammualaikum wbt.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center'}}>Dear all Jasa Members,</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center',textAlign: 'center'}}>In light to the worsening Covid-19 cases and the total lockdown (FMCO) that has been imposed by the government, we regret to announce that JASA Club will have to postpone several programs to another date. As of now, the affected programs are:</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', height: 20}}>1) JASA Peduli 2.0</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', height: 20}}>2) Ensino One Stop Centre</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'center'}}>However, the collection of donation through online platforms for both programs can still proceed as usual.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'center'}}>This decision also been made to comply with the statement that has been issued by Jabatan Kemajuan Orang Asli (JAKOA) whereby any on-ground activities related to Orang Asli should be postponed until further notice.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'center'}}>It is our top priority to ensure the health and safety of all Jasa members and the Orang Asli. Let us all abide to the government orders and take proactive measures to lessen the spreading of coronavirus.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'center'}}>Thank you.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', height: 50, textAlign: 'center'}}>Sincerely, MBs🍀</Text>

            </View>
        <View style={{height:230, marginBottom:30, marginLeft:35, marginRight:35, backgroundColor:"lightgrey", borderRadius:20}}>
            <View style={{height:180, margin:10, backgroundColor:"floralwhite", borderRadius:30}}></View>
            <View>
                <Text style={{fontStyle:'italic', fontSize:15, alignSelf:'center'}}>PRAY FOR PALESTINE</Text>
            </View>
        </View>
            <View>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', height: 20}}>Assalammualaikum wbt.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center',textAlign: 'left'}}>▶️ As all know, Palestine is facing with the Zionist attacks that have claimed many lives of the innocent people there.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'left'}}>▶️ One of ways to help them is in the form of prayers such as reciting the qunut nazilah prayers.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'left'}}>▶️ Qunut Nazilah can be recited at every obligatory prayer. It is recited in the last rak'ah after waking up from Ruku 'to' Itidal. Prayers are recited while standing for I’tidal.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'left'}}>▶️ There are three ways to recite the prayer and the Imam can choose one of the following ways:</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'center'}}>1. Recite the Qunut prayer as it is usually recited during the Subuh prayer.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'center'}}>2. Read the prayer of Qunut Nazilah only.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'center'}}>3. Read the Qunut subuh prayer and followed by the Qunut Nazilah prayer.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', height: 65, textAlign: 'center'}}>Do not forget to include them also in our du’a. Selamat beramal. ✨</Text>
            
            </View>

            <View style={{height:230, marginBottom:30, marginLeft:35, marginRight:35, backgroundColor:"lightgrey", borderRadius:20}}>
            <View style={{height:180, margin:10, backgroundColor:"floralwhite", borderRadius:30}}></View>
            <View>
                <Text style={{fontStyle:'italic', fontSize:14, alignSelf:'center'}}>📌 PROTECT MAH MERI TRIBE📌</Text>
            </View>
        </View>
            <View>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', height: 20}}>Assalammualaikum wbt.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center',textAlign: 'center'}}>🔆 JASA Club IIUM is an Orang Asli based club and it is our concern to always assist Orang Asli community whenever needed.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'center'}}>Recently, there’s an issue related to one of Orang Asli tribes, Mah Meri.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'center'}}>Who are they?</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'center'}}>🛑 They’re required to move out from their houses where they’ve lived there for about 20 years as the land will be developed into a tourist destination.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', textAlign: 'center'}}>🛑 Thus, we would like to encourage everyone especially JASA’s members to spread the awareness regarding this issue.</Text>
                <Text style={{fontStyle:'bold', fontSize:15, alignSelf:'center', height: 50, textAlign: 'center'}}>🤲 Let’s pray for them and May Allah SWT ease everything.</Text>
            
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
