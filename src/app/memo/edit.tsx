import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icom";
import { db, auth } from "../../config";

const handlePress = (id: string, bodyText: string): void => {
    if (auth.currentUser === null) { return; }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
    setDoc(ref, {
        bodyText,
        createdAt: Timestamp.fromDate(new Date())
    })
    .then(() => {
        router.back();
    })
    .catch((error) => {
        console.log(error);
    });
}

const Edit = (): JSX.Element => {
    const id = String(useLocalSearchParams().id);
    const [bodyText, setBodyText] = useState<string>('');
    useEffect(() => {
        if (auth.currentUser === null) { return; }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
        getDoc(ref)
            .then((docRef) => {
                const RemoteBodyText = docRef.data()?.bodyText;
                setBodyText(RemoteBodyText);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    style={styles.input}
                    value={bodyText}
                    onChangeText={(text) => { setBodyText(text) }}
                    autoFocus
                />
            </View>
            <CircleButton onPress={() => { handlePress(id, bodyText) }}>
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
        flex: 1,
    },
    input: {
        flex: 1,
        paddingTop: 32,
        lineHeight: 24,
        fontSize: 16,
        textAlignVertical: 'top',
        paddingHorizontal: 27,
        paddingVertical: 32,
    },
})

export default Edit;
