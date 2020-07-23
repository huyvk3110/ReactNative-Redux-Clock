import React, { Component } from 'react';
import { View } from 'react-native';
import { couterDescrease, couterInscrease } from '../actions/StopWatchActions'
import { connect } from 'react-redux';
import StopWatchTimeDisplay from '../components/StopWatchTimeDisplay';
import StopWatchButtonArea from '../components/StopWatchButtonArea';
import stopWatchStyles from '../styles/StopWatchStyles';
import StopWatchLapsList from '../components/StopWatchLapsList';

class StopWatchContainer extends Component {
    render() {
        return (
            <View style={stopWatchStyles.container.contain}>
                <StopWatchTimeDisplay />
                <StopWatchButtonArea />
                <StopWatchLapsList />
            </View>
        )
    }
}

const mapStateToProps = ({ stopWatch }: any) => ({ stopWatch })

const mapDispatchToProps = {
    couterInscrease,
    couterDescrease,
}

export default connect(mapStateToProps, mapDispatchToProps)(StopWatchContainer)