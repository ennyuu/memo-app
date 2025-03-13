import { TouchableOpacity, Text } from "react-native";
import { signOut } from "firebase/auth";
import  { router } from "expo-router";
import { auth } from "../config";

const handlePress = (): void => {
    signOut(auth)
        .then(() => {
            router.replace('/auth/login');
        })
        .catch((error) => {
            console.error(error);
        });
}

const LogoutButton = (): JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.buttonLabel}>ログアウト</Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
        lineHeight: 24,
    },
};

export default LogoutButton;
