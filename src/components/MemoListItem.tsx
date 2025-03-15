import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Link } from "expo-router";
import {deleteDoc, doc } from 'firebase/firestore'

import Icon from "./Icom";
import { type Memo } from "../../types/memo";
import { auth, db } from "../config";

interface Props {
    memo: Memo;
}

const handlePress = (id: string): void => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
    Alert.alert('メモを削除します', 'よろしいですか？', [
        {
            text: 'キャンセル',
        },
        {
            text: '削除する',
            style: 'destructive',
            onPress: () => {
                deleteDoc(ref)
                .catch(() => { Alert.alert('削除に失敗しましました')})
            },
        },
    ])
}

const MemoListItem = (props: Props): JSX.Element | null => {
    const { memo } = props;
    const { bodyText, createdAt } = memo;
    if (createdAt === undefined || bodyText === undefined) {
        return null;
    }
    const date = createdAt.toDate();
    const dateString = date.toLocaleString('ja-JP');
    return (
        <Link
            href={{ pathname: '/memo/detail', params: { id: memo.id } }}
            asChild
        >
            <TouchableOpacity style={styles.memoListItem}>

                <View>
                    <Text numberOfLines={1} style={styles.memoListTitle}>{bodyText}</Text>
                    <Text style={styles.memoListDate}>{dateString}</Text>
                </View>

                <TouchableOpacity onPress={() => { handlePress(memo.id) }}>
                    <Icon name="delete" size={24} color="#B0B0B0" />
                </TouchableOpacity>

            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)',
        alignItems: 'center',
    },
    memoListTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
    },
});

export default MemoListItem;
