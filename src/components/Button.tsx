import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
    label: string;
    onPress?: () => void;
}

const Button = (props: Props): JSX.Element => {
    const { label, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
});

export default Button;
