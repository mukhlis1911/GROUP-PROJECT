import React, { Component } from 'react';
import { removeStudent } from '../services/DataService';
import { Alert } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, List } from 'native-base';
import { db } from '../config/db';
import StudentList from '../components/StudentList';
import * as firebase from 'firebase';

let studentsRef = db.ref('/students');

export default class ListScreen extends Component {
  constructor(){
    super();
    this.state = {
    students: []
    }
  }

  render() {
    return (
      <Container>
        
        <Content padder>
        <Text style={{textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>News Feed</Text>
        <List vertical={true}>
        <StudentList students={this.state.students} onPress={(matricno) => { this.props.navigation.navigate('View', {matricno: matricno})}}
        onLongPress={(matricno) => {this.deleteConfirmation(matricno)}} />

        

        </List>
        <Text>{this.props.matricno}</Text>
        <Text style={{textAlign: "center", height: 20, fontSize: 10, marginTop: 20}}>If you do not have an account yet, click below</Text>
        </Content>
  
        <Footer>
          <FooterTab>
            <Button onPress={() => {this.goToNewScreen()}}>
              <Icon name="people" />
              <Text>Profile</Text>
            </Button>
            <Button onPress={() => {this.goToLoginScreen()}}>
              <Icon name="log-out" />
              <Text>Log Out</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}
