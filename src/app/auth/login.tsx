import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from "react-native";

import Button from "../../components/Button";

import { Link, router } from "expo-router";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../config";

import { signInAnonymously } from "firebase/auth";

const checkEmailVerification = (): void => {
    const user = auth.currentUser;

    if (user) {
        if (!user.emailVerified) {
            Alert.alert(
                "メール確認が必要です",
                "メールを確認してアカウントを有効化してください。",
                [
                    {
                        text: "確認メールを再送信",
                        onPress: () => {
                            sendEmailVerification(user)
                                .then(() => {
                                    Alert.alert("確認メールを再送信しました。");
                                })
                                .catch((error) => {
                                    console.error("メール送信エラー:", error.message);
                                    Alert.alert("メール送信に失敗しました。");
                                });
                        },
                    },
                    { text: "OK" },
                ]
            );
        } else {
            console.log("メール確認済みです。");
        }
    }
};

const handlePress = (email: string, password: string): void => {
    // ログイン
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // メールアドレスが確認済みかをチェック
            if (user.emailVerified) {
                console.log(user.uid);
                router.replace('/memo/list');
            } else {
                Alert.alert(
                    "メールアドレスが未確認です",
                    "メールを確認してアカウントを有効化してください。",
                    [
                        {
                            text: "確認メールを再送信",
                            onPress: () => {
                                sendEmailVerification(user)
                                    .then(() => {
                                        Alert.alert("確認メールを再送信しました。");
                                    })
                                    .catch((error) => {
                                        console.error("メール送信エラー:", error.message);
                                        Alert.alert("メール送信に失敗しました。");
                                    });
                            },
                        },
                        { text: "OK" },
                    ]
                );
            }
        })
        .catch((error) => {
            const { code, message } = error;
            console.error(code, message);
            Alert.alert(message);
        });
};

const anonymousLogin = (): void => {
    // 匿名ログイン
    try {
        signInAnonymously(auth)
        console.log('anonymous login success!!');
        Alert.alert('30日以上経過した匿名アカウントは自動的に削除されます。', '継続して利用する場合はサインアップをしてください。', [
            {
                text: 'OK',
            },
        ])
    } catch (e) {
        // something wrong
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.log('An unknown error occurred');
        }
    }
}

const Login = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        checkEmailVerification();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => { setEmail(text) }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Email Address"
                    textContentType="emailAddress"
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(password) => { setPassword(password) }}
                    autoCapitalize="none"
                    secureTextEntry
                    placeholder="Password"
                    textContentType="password"
                />
                <Button
                    label="Submit"
                    onPress={() => handlePress(email, password)}
                />
                <Button
                    label="匿名でログインする"
                    onPress={() => anonymousLogin()}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registed?</Text>
                    <Link href="auth/signup" asChild replace>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign up here!</Text>
                        </TouchableOpacity>
                    </Link>
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

export default Login;
