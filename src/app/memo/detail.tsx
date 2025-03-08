import { View, Text, ScrollView, StyleSheet } from "react-native";

import Header from "../../components/Header";
import CircleButton from "../../components/CircleButton";

const Detail = (): JSX.Element => {
    return (
        <View>
            <Header />
            <View>
                <Text>買い物リスト</Text>
                <Text>2023年10月1日 10:00</Text>
            </View>
            <ScrollView>
                <Text>
                    買い物リスト
                    書体やレイアウトを確認するために文章を入れています。
                    本文用なので使い方を間違えるとレイアウトが崩れるので注意が必要です。
                </Text>
            </ScrollView>
            <CircleButton>+</CircleButton>
        </View>
    );
}

export default Detail;
