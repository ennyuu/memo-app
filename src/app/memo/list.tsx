import { View, StyleSheet } from "react-native";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";

import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icom";
import LogoutButton from "../../components/LogoutButton";


const handlepress = (): void => {
    router.push('/memo/create');
}

const List = (): JSX.Element => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogoutButton /> },
        });
    }, []);
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton onPress={handlepress}>
                <Icon name="plus" size={40} color="#ffffff" />
            </CircleButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
})

export default List;
