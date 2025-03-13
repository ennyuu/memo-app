import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import { router } from "expo-router";
import { collection, addDoc } from "firebase/firestore";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icom";
import { db } from "../../config";

const handlePress = (): void => {
    addDoc(collection(db, 'memos'), {
        bodyText: 'Test',
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
    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value='' />
            </View>
            <CircleButton onPress={handlePress}>
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
