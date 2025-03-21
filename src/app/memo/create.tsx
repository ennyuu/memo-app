import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import { router } from "expo-router";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icom";
import { db, auth } from "../../config";

const handlePress = (bodyText : string): void => {
    if (auth.currentUser === null) { return; }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
    addDoc(ref, {
        bodyText: bodyText,
        createdAt: Timestamp.fromDate(new Date()),
    })
        .then((docRef) => {
            console.log('Document successfully written!', docRef.id);
        })
        .catch((error) => {
            console.log(error);
        });
    router.back();
}

const Create = (): JSX.Element => {
    const [bodyText, setBodyText] = useState('');
    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                multiline
                style={styles.input}
                value={bodyText}
                onChangeText={(text) => setBodyText(text)}
                />
            </View>
            <CircleButton onPress={() => handlePress(bodyText)}>
                <Icon name="check" size={40} color="#ffffff" />
            </CircleButton>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    inputContainer: {
        paddingHorizontal: 27,
        paddingVertical: 32,
        flex: 1,
    },
    input: {
        flex: 1,
        paddingTop: 32,
        lineHeight: 24,
        fontSize: 16,
        textAlignVertical: 'top',
    },
})

export default Create;
