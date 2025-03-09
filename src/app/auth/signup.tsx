import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import Header from "../../components/Header";
import Button from "../../components/Button";

const Signup = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} value="Email Address" />
                <TextInput style={styles.input} value="Password" />
                <Button label="Submit" />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registed?</Text>
                    <TouchableOpacity>
                        <Text style={styles.footerLink}>Login.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    inputContainer: {
        paddingHorizontal: 27,
        paddingVertical: 32,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#ffffff',
        height: 48,
        fontSize: 16,
        padding: 8,
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3',
        marginLeft: 8,
    },

})

export default Signup;
