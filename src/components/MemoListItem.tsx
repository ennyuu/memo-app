import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

import Icon from "./Icom";

const MemoListItem = (): JSX.Element => {
    return (
        <Link href="/memo/detail" asChild>
            <TouchableOpacity style={styles.memoListItem}>

                <View>
                    <Text style={styles.memoListTitle}>買い物リスト</Text>
                    <Text style={styles.memoListDate}>2023年10月1日 10:00</Text>
                </View>

                <TouchableOpacity>
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
