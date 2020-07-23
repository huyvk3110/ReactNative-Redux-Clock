import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IStopWatchButtonAreaItemProps } from "../interface/ComponentInterface";
import stopWatchStyles from "../styles/StopWatchStyles";
import common from "../common";

const styles = stopWatchStyles.buttonArea;

function StopWatchButtonAreaItem({ title, state }: IStopWatchButtonAreaItemProps) {
    return (
        <TouchableOpacity>
            <View style={styles.state[state].buttonBorder}>
                <View style={styles.state[state].buttonContent}>
                    <Text style={styles.state[state].buttonTitle}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

function StopWatchButtonArea() {
    return (
        <View style={styles.contain}>
            <StopWatchButtonAreaItem title="Lap" state={common.type.ComponentState.NORMAL} />
            <StopWatchButtonAreaItem title="Start" state={common.type.ComponentState.SUCCESS} />
        </View>
    )
}

export default StopWatchButtonArea;