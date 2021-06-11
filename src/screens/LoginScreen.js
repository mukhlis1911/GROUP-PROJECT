import React, { Component } from 'react';
import { Alert, Image } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Label, Input } from 'native-base';
import firebase from 'firebase';


export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    };
  }

  setEmail = (value) =>{
      this.setState({ email: value });
  }

  setPassword = (value) =>{
      this.setState({ password: value});
  }

  getLogin = () => {
    try {
     if(this.state.email && this.state.password){
      firebase
         .auth()
         .signInWithEmailAndPassword(this.state.email, this.state.password)
         .then(() => {
          this.props.navigation.navigate("Home");
          })
         .catch(error => {
           Alert.alert('Status', error.toString(error));
          });
     } else {
       Alert.alert('Status','Invalid Email & Password!');
     }
      } catch (error) {
        console.log(error.toString(error));
    }
  };

  render() {
    return (
      <Container>
        <Content padder>
          
        <Image source={{uri:'https://pbs.twimg.com/profile_images/1106361665455423488/96D1ohe0_400x400.jpg'}} style={{width: 270, height: 280, alignSelf: 'center'}}/>
        <Form>
        <Item floatingLabel last>
              <Label>Email</Label>
              <Input
               autoCapitalize="none"
               autoCorrect={false} 
               onChangeText={this.setEmail} 
              />
        </Item>
        <Item floatingLabel last>
              <Label>Password</Label>
              <Input
               secureTextEntry={true}
               autoCapitalize="none"
               autoCorrect={false} 
               onChangeText={this.setPassword} 
              />
        </Item>
        </Form>

          <Button block last style={{marginTop: 50, backgroundColor:"darkolivegreen"}} onPress={this.getLogin}>
            <Text style={{fontWeight: "bold", fontFamily:'sans-serif'}}>Login</Text>
          </Button>
          <Text style={{textAlign: "center", fontFamily:'sans-serif', height: 20, fontSize: 10, marginTop: 20}}>If you do not have an account yet, click below</Text>
        </Content>

        <Footer>
          <FooterTab>
             <Button style={{backgroundColor:"darkolivegreen"}} onPress={() => this.props.navigation.navigate('Signup')} title="signup" >
          {/* <Button onPress={() => this.props.navigation.Actions(SignupScreen())} title="signup"> */}
          {/* <Button vertical onPress={() => {Actions.SignupScreen();}}> */}
              <Icon name="person-add" style={{color: "white"}}/>
              <Text style={{fontFamily:'sans-serif', color: "white"}}>Sign Up</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
