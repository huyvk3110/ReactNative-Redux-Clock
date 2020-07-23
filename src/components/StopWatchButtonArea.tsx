import React from "react";
import { connect } from "react-redux";
import { IStoreState } from "../interface/DataInterface";
import { View, Text, TouchableOpacity } from "react-native";
import { IStopWatchButtonAreaItemProps, IStopWatchButtonArea } from "../interface/ComponentInterface";
import { addLap, resetLap, setTimeEnd, startTiming, stopTiming } from "../actions/StopWatchActions";
import stopWatchStyles from "../styles/StopWatchStyles";
import common from "../common";

const styles = stopWatchStyles.buttonArea;

function StopWatchButtonAreaItem({ title, state, handle }: IStopWatchButtonAreaItemProps) {
    return (
        <TouchableOpacity
            onPress={() => { handle() }}
        >
            <View style={styles.state[state].buttonBorder}>
                <View style={styles.state[state].buttonContent}>
                    <Text style={styles.state[state].buttonTitle}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

function StopWatchButtonArea({ data, addLap, resetLap, setTimeEnd, startTiming, stopTiming, }: IStopWatchButtonArea) {
    const { isRunning, laps } = data;

    function onClickLap() {
        if (isRunning) {
            addLap()
        } else if (laps.length) {
            resetLap()
        }
    }

    function onClickStartStop() {
        if (!isRunning) {
            startTiming()
        } else {
            stopTiming()
        }
    }

    return (
        <View style={styles.contain}>
            <StopWatchButtonAreaItem
                title={!isRunning && laps.length ? "Reset" : "Lap"}
                state={!isRunning && !laps.length ? common.type.ComponentState.DISABLE : common.type.ComponentState.NORMAL}
                handle={onClickLap}
            />
            <StopWatchButtonAreaItem
                title={!isRunning ? "Start" : "Stop"}
                state={!isRunning ? common.type.ComponentState.SUCCESS : common.type.ComponentState.DANGER}
                handle={onClickStartStop}
            />
        </View>
    )
}

const mapStateToProps = (state: IStoreState) => ({
    data: state.stopWatch
})

const mapDispatchToProps = { addLap, resetLap, setTimeEnd, startTiming, stopTiming }

export default connect(mapStateToProps, mapDispatchToProps)(StopWatchButtonArea);