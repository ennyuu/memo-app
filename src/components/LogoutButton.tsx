import { TouchableOpacity, Text } from "react-native";

const LogoutButton = (): JSX.Element => {
    return (
        <TouchableOpacity>
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
