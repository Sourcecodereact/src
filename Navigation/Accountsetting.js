import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Image, View, TouchableHighlight, TouchableOpacity } from "react-native";
import { Button, Overlay } from 'react-native-elements';
import Navigationbar from '../Navigationbar';
import { Tooltip, Input } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'



const AccountSetting = () => {
    useEffect(() => {
        async function getKind() {
            font.loadAsync({
                'Cairo-Bold': require('../../assets/fonts/Cairo-Bold.ttf'),
                'Montserrat-ExtraLight': require('../../assets/fonts/Montserrat-ExtraLight.ttf')
            });
        }
        getKind()
    }, [])
    return (
        <View style={styles.mainContainer}>
            <Navigationbar />

            <View style={styles.secondMainCotainer}>
                <Text>Comunication Prefrences</Text>
                <Input
                    placeholder='Username'
                    style={{ borderWidth: 1, paddingHorizontal: 8, marginTop: 4 }}
                    labelStyle={{ fontFamily: 'Montserrat-ExtraLight' }}
                />

                <Text>Change App Subscription:</Text>
                <CheckBox
                    title='Click Here'
                />
                <CheckBox
                    title='Click Here'
                />
                <CheckBox
                    title='Click Here'
                />
                <CheckBox
                    title='Click Here'
                />
                <CheckBox
                    title='Click Here'
                />



                <Button
                    title="Update Billing Info"
                />


                <Text>New Password</Text>

                <Input
                    placeholder='Username'
                    style={{ borderWidth: 1, paddingHorizontal: 8, marginTop: 4 }}
                    labelStyle={{ fontFamily: 'Montserrat-ExtraLight' }}
                    secureTextEntry={true}
                />


                <Input
                    placeholder='Username'
                    style={{ borderWidth: 1, paddingHorizontal: 8, marginTop: 4 }}
                    labelStyle={{ fontFamily: 'Montserrat-ExtraLight' }}
                    secureTextEntry={true}
                />


                <Button
                    title="Save Setting"
                />
            </View>



        </View>
    )



}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1, backgroundColor: "black",

    },
    secondMainCotainer:
    {
        justifyContent: "space-around",
        backgroundColor: "white",
        justifyContent: "center",
        flex: 2,
        marginHorizontal: 30,
        marginVertical: 100

    },
    forgotPass: {

        justifyContent: "flex-end",
        alignItems: "flex-end"
    }


})


export default AccountSetting