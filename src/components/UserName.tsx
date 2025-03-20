import { Text } from "react-native";
import { useEffect, useState } from "react";
import { auth } from "../config";

const UserName = (): JSX.Element => {
    const [userName, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        if (auth.currentUser !== null) {
            setUserEmail(auth.currentUser.email);
        }
    }, []);

    return (
        <Text style={styles.buttonLabel}>{userName}</Text>
    );
}

const styles = {
    buttonLabel: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
        lineHeight: 24,
    },
};

export default UserName;
