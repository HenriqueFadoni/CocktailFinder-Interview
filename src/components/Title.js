import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Title = () => (
    <View style={styles.textContainer}>
        <Text style={[styles.textBold, styles.textStyle]}>
            CockTail
        </Text>
        <Text style={styles.textStyle}>
            Finder
        </Text>
    </View>
);

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    textStyle: {
        color: "white",
        fontSize: 30
    },
    textBold: {
        fontWeight: "bold"
    }
});

export default Title