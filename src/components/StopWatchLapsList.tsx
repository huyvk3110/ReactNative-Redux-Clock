import React from "react";
import { View, Text, FlatList } from "react-native";
import stopWatchStyles from "../styles/StopWatchStyles";
import { IStopWatchLapsListProps } from "../interface/ComponentInterface";
import { connect } from "react-redux";
import { IStoreState, IStopWatchState } from "../interface/DataInterface";
import StringUtils from "../utils/StringUtils";

const styles = stopWatchStyles.stopWatchLapsList;

function StopWatchLapsListItem({ lap, time }: IStopWatchLapsListProps) {
    let arrs = StringUtils.timeFormatMiliseconds(time)
    
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{lap ? `Lap ${lap}` : ''}</Text>
            <Text style={styles.text}>{typeof time != 'undefined' ? `${arrs[0]}:${arrs[1]}.${arrs[2]}`: ''}</Text>
        </View>
    )
}

function StopWatchLapsList({ payload }: { payload: IStopWatchState }) {
    let { laps } = payload;

    let data = laps.map((o, i) => ({ lap: i + 1, time: o, key: i.toString() }))
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

const mapStateToProps = (state: IStoreState) => ({
    payload: state.stopWatch
})
export default connect(mapStateToProps)(StopWatchLapsList);