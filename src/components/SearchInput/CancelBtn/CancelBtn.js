import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const CancelBtn = props => (
    <Animated.Text
        style={[
            styles.cancelBtn,
            { opacity: props.opacityAnimation },
        ]}
        onPress={props.onCancel}
    >
        Cancel
    </Animated.Text>
);

const styles = StyleSheet.create({
    cancelBtn: {
        color: "#6DA7D3",
        justifyContent: "flex-end",
        alignSelf: "center"
    }
});

export default CancelBtn;

CancelBtn.protoType = {
    onCancel: PropTypes.func.isRequired
}