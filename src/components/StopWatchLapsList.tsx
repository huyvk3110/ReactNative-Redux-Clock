import React from "react";
import { View, Text, FlatList } from "react-native";
import stopWatchStyles from "../styles/StopWatchStyles";
import { IStopWatchLapsListProps } from "../interface/ComponentInterface";

const styles = stopWatchStyles.stopWatchLapsList;

function StopWatchLapsListItem({ lap, time }: IStopWatchLapsListProps) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{lap ? `Lap ${lap}` : ''}</Text>
            <Text style={styles.text}>{time ? time : ''}</Text>
        </View>
    )
}

function StopWatchLapsList() {
    let times = [1, 2, 3, 4, 5]
    let data = times.map((o, i) => ({ lap: i + 1, time: o, key: i.toString() }))
    data = data.length > 7 ? data.reverse() : data.reverse().concat(Array(7 - data.length).fill(''))
    let listData = data.map((o, i) => Object.assign(o, { key: i.toString() }))

    return (
        <View style={styles.contain}>
            <FlatList
                data={listData}
                renderItem={({ item }) => <StopWatchLapsListItem lap={item.lap} time={item.time} />}
                keyExtractor={(item) => item.key}
            />
        </View>
    )
}

export default StopWatchLapsList;