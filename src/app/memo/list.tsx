import { View, StyleSheet, FlatList } from "react-native";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icom";
import LogoutButton from "../../components/LogoutButton";
import { db, auth } from "../../config";
import { type Memo } from "../../../types/memo";

const handlepress = (): void => {
    router.push('/memo/create');
}

const List = (): JSX.Element => {
    const [memos, setMemos] = useState<Memo[]>([]);
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogoutButton /> },
        });
    }, []);
    useEffect(() => {
        if (auth.currentUser === null) { return; }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
        const q = query(ref, orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteMemos: Memo[] = [];
            snapshot.forEach((doc) => {
                console.log(doc.data());
                const { bodyText, createdAt } = doc.data();
                remoteMemos.push({
                    id: doc.id,
                    bodyText: bodyText,
                    createdAt: createdAt,
                });
            });
            setMemos(remoteMemos);
        });
        return unsubscribe;
    }, []);
    return (
        <View style={styles.container}>
            <FlatList data={memos} renderItem={({ item }) => { return <MemoListItem memo={item} /> }} />
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
