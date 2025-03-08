import { View, Text, TextInput, StyleSheet } from "react-native";

import Header from "../../components/Header";

const Login = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} value="Email Address" />
                <TextInput style={styles.input} value="Password" />
                <View style={styles.button}>
                    <Text style={styles.buttonLabel}>Submit</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registed?</Text>
                    <Text style={styles.footerLink}>Sign up here!</Text>
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
    button: {
        backgroundColor: '#467FD3',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        width: '70%',
        marginBottom: 24,
    },
    buttonLabel: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 32,
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

export default Login;
