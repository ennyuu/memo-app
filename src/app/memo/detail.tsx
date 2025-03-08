import { View, Text, ScrollView, StyleSheet } from "react-native";

import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2023年10月1日 10:00</Text>
            </View>
            <ScrollView style={styles.memoContent}>
                <Text style={styles.memoBody}>
                    買い物リスト
                    書体やレイアウトを確認するために文章を入れています。
                    本文用なので使い方を間違えるとレイアウトが崩れるので注意が必要です。
                </Text>
            </ScrollView>
            <CircleButton style={{ top: 160, bottom: 'auto'}}>+</CircleButton>
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
        paddingTop: 32,
        paddingBottom: 80,
        paddingHorizontal: 27,
        flex: 1,
    },
    memoBody: {
        lineHeight: 24,
        fontSize: 16,
        color: '#000000',
    },
})

export default Detail;
