import React, { useState } from "react";
import { Text, StyleSheet, Image, View ,TouchableHighlight,TouchableOpacity } from "react-native";
import { Button, Overlay } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';


const HelpImage = props => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    const Nav = () => {
        props.navigate(SignIn)
    };

    const dismiss = () => Navigation.dismissOverlay(props.navigate.SignIn);


    return (
        <View style={styles.mainContainer} >
            <TouchableOpacity onPress={toggleOverlay} >
            <Image style={styles.Image}   source={require('../../assets/Images/user.png')} />
            </TouchableOpacity>
            <Image style={styles.Image} source={require('../../assets/Images/question.png')} />
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={styles.overlaystyling}>
                    <Button title="View/Edit Profile" buttonStyle={styles.buttonHeight} titleStyle={styles.titleStyles} onPress={dismiss}/>
                    <Button title="Account Settings" buttonStyle={styles.buttonHeight} titleStyle={styles.titleStyles}  onPress ={Nav}/>
                    <Button title="Blocked Users" buttonStyle={styles.buttonHeight} titleStyle={styles.titleStyles} />
                    <Text style={styles.titleStyles}>Log Out</Text>
                </View>
            </Overlay>


        </View>
    )
}

const styles = StyleSheet.create({

    Image: {
        height: 30,
        width: 30,
        marginRight: 8,
        zIndex: 1
    },
    mainContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        flex: 1,
        alignItems: "center",
        zIndex: 1
    },
    overlaystyling: {
        backgroundColor: "white",
        height: 500,
        width: 300,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 40
    },
    buttonHeight: {
        width: 150,
        paddingVertical: 20,
        backgroundColor: "green",
        borderRadius: 10
    },
    titleStyles: {
        fontSize: 18
    }

});

export default HelpImage