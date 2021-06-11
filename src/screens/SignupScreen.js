import React, { Component } from 'react';
import { Alert, Image } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Label, Input } from 'native-base';
import firebase from 'firebase';


export default class SignupScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      matricno: null
    };
  }

  setEmail = (value) =>{
      this.setState({ email: value });
  }

  setPassword = (value) =>{
      this.setState({ password: value});
  }

  setMatricno = (value) =>{
    this.setState({ matricno: value});
}
 
  signUp = () =>{
    try {
       if(this.state.email && this.state.password && this.state.matricno){
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => { 
                   console.log(user);
                   Alert.alert('Status','Sign Up Successful');
                   Actions.LoginScreen();
             })
            .catch(error => {
              Alert.alert('Status',error.toString(error));
            });
       } else {
          Alert.alert('Status','Invalid Email or Password!');
         }
        } catch (error) {
          Alert.alert({ errorMessage: error.message });
        }
   };


  //  goToLoginScreen = () => {
  //   Actions.LoginScreen();
  // }

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
        <Item floatingLabel last>
              <Label>Matric Number</Label>
              <Input
               autoCapitalize="none"
               autoCorrect={false} 
               onChangeText={this.setMatricno} 
              />
        </Item>
        
        
        </Form>

          <Button block last style={{marginTop: 50, backgroundColor:"darkolivegreen"}} onPress={this.signUp}>
            <Text style={{fontWeight: "bold", fontFamily:'sans-serif'}}>Sign Up</Text>
          </Button>
          

        </Content>

        <Footer>
          <FooterTab>
          <Button style={{backgroundColor:"darkolivegreen"}} onPress={() => this.props.navigation.navigate('Login')} title="Login">
          {/* <Button onPress={() => this.props.navigation.navigate('goToLoginScreen')} title="login"> */}
          {/* <Button vertical onPress={() => {Actions.LoginScreen();}}> */}
              <Icon name="log-in" style={{color: "white"}}/>
              <Text style={{fontFamily:'sans-serif', color: "white"}}>Login</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
