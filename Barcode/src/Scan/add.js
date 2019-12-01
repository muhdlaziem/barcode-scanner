import React, { Component } from "react";
import { 
    SafeAreaView,
    Text,
    StyleSheet
} from "react-native";

import { Container, Item, Form, Input, Button, Label } from "native-base";
import {app} from '../fbconfig';

import SplashScreen from 'react-native-splash-screen';

class add extends Component {

    constructor(props){
        super(props);
        this.state = {
            link:"",
            // content:[]
        }
    }
    componentDidMount(){
        SplashScreen.hide()
    }
    addItem =(link) => {
        let newPostKey = app.database().ref().child('item').push().key;
        let updates = {};
        updates['/item/' + newPostKey] = {Link:link}
        app.database().ref().update(updates);
        console.ignoredYellowBox = ['Setting a timer'];
        // db.ref('/items').push({
        //     desc : item
        // });
    }

    
    render() {
        return (
            
                <Container>
                    <Form>
                    <Item floatingLabel>
                        <Label>name</Label>
                        <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={link => this.setState({link})}
                        />
                    </Item>
                   
                    <Button full rounded success
                        onPress={() => this.addItem(this.state.link)}
                        style={{marginTop:20}}>
                        <Text>Add</Text>
                    </Button>

                    

                    </Form>
                </Container>
        );
    }
}
export default add;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});