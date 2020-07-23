import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { couterDescrease, couterInscrease } from '../actions/StopWatchActions'
import { connect } from 'react-redux';
import StopWatchTimeDisplay from '../components/StopWatchTimeDisplay';

class StopWatchContainer extends Component {
    render() {
        return (
            <View>
                <StopWatchTimeDisplay/>
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