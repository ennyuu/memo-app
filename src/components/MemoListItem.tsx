import { View, Text, StyleSheet } from "react-native";

const MemoListItem = (): JSX.Element => {
    return (
        <View style={styles.memoListItem}>

            <View>
                <Text style={styles.memoListTitle}>買い物リスト</Text>
                <Text style={styles.memoListDate}>2023年10月1日 10:00</Text>
            </View>

            <View>
                <Text>X</Text>
            </View>

        </View>
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
