import { View, Text, ScrollView, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icom";
import { auth, db } from "../../config";
import { type Memo } from "../../../types/memo";

const handlePress = (): void => {
    router.push('/memo/edit');
}

const Detail = (): JSX.Element => {
    const { id } = useLocalSearchParams();
    console.log(id);
    const [memo, setMemo] = useState<Memo | null>(null);
    useEffect(() => {
        if (auth.currentUser === null) { return; }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id));
        const unsubscribe = onSnapshot(ref, (memoDoc) => {
            const { bodyText, createdAt } = memoDoc.data() as Memo;
            setMemo({
                id: memoDoc.id,
                bodyText: bodyText,
                createdAt: createdAt,
            });
        });
        return unsubscribe;
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
                <Text style={styles.memoDate}>{memo?.createdAt.toDate().toLocaleString('ja-JP')}</Text>
            </View>
            <ScrollView style={styles.memoContent}>
                <Text style={styles.memoBody}>
                    {memo?.bodyText}
                </Text>
            </ScrollView>
            <CircleButton onPress={handlePress} style={{ top: 60, bottom: 'auto'}}>
                <Icon name="pencil" size={40} color="#ffffff" />
            </CircleButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16,
    },
    memoContent: {
        paddingHorizontal: 27,
    },
    memoBody: {
        paddingVertical: 32,
        lineHeight: 24,
        fontSize: 16,
        color: '#000000',
    },
})

export default Detail;
