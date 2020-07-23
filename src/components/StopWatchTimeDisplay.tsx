import React from "react";
import { View, Text } from "react-native";
import stopWatchStyles from "../styles/StopWatchStyles";

const styles = stopWatchStyles.timeDisplay;

function StopWatchTimeDisplay() {
    return (
        <View style={styles.contain}>
            <View style={styles.time}>
                <Text style={styles.number}>00</Text>
                <Text style={styles.symbol}>:</Text>
                <Text style={styles.number}>00</Text>
                <Text style={styles.symbol}>.</Text>
                <Text style={styles.number}>00</Text>
            </View>
        </View>
    )
}

export default StopWatchTimeDisplay;