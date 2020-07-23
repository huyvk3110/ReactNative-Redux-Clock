import React, { Component } from 'react';
import { View, Text } from 'react-native';
import stopWatchStyles from "../styles/StopWatchStyles";
import StringUtils from '../utils/StringUtils';

const styles = stopWatchStyles.timeDisplay;

export default class TimeContainer extends Component<any, { time: Date }> {
    constructor(props: any) {
        super(props);

        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    render() {
        let { time } = this.state;

        return (
            <View style={styles.contain}>
                <View style={styles.time}>
                    <Text style={styles.number}>{StringUtils.pad(time.getHours(), 2)}</Text>
                    <Text style={styles.symbol}>:</Text>
                    <Text style={styles.number}>{StringUtils.pad(time.getMinutes(), 2)}</Text>
                    <Text style={styles.symbol}>:</Text>
                    <Text style={styles.number}>{StringUtils.pad(time.getSeconds(), 2)}</Text>
                </View>
            </View>
        )
    }
}