import React, { Component } from "react";
import { Button, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet,
Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
export default class Nearby extends Component {
   render() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={styles.container}>
                
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
},
inner: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end",
},
header: {
    fontSize: 36,
    marginBottom: 48,
},
input: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
},
btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
},
});
