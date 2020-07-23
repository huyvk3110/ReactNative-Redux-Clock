import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { IStoreState, IStopWatchState } from "../interface/DataInterface";
import stopWatchStyles from "../styles/StopWatchStyles";
import StringUtils from "../utils/StringUtils";

const styles = stopWatchStyles.timeDisplay;

function StopWatchTimeDisplay({ data }: { data: IStopWatchState }) {
    let { timeStart, timeEnd } = data;
    let arrs = StringUtils.timeFormatMiliseconds(timeEnd - timeStart);

    return (
        <View style={styles.contain}>
            <View style={styles.time}>
                <Text style={styles.number}>{arrs[0]}</Text>
                <Text style={styles.symbol}>:</Text>
                <Text style={styles.number}>{arrs[1]}</Text>
                <Text style={styles.symbol}>.</Text>
                <Text style={styles.number}>{arrs[2]}</Text>
            </View>
        </View>
    )
}

let mapStateToProps = (state: IStoreState) => ({
    data: state.stopWatch
})

export default connect(mapStateToProps)(StopWatchTimeDisplay);