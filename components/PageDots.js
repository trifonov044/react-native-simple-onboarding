import React from 'react';
import { View, Text } from 'react-native';

const PageCheckmark = ({ style }) => (
    <Text style={{ ...styles.element, ...styles.elementCheck, ...style }}>✓</Text>
);

const PageDot = ({ isLight, selected }) => (
    <View
        style={{
            ...styles.element,
            ...styles.elementDot,
            backgroundColor: isLight ? (selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)') : (selected ? '#fff' : 'rgba(255, 255, 255, 0.5)'),
        }}
    />
);

const PageDots = ({ isLight, pages, currentPage }) => (
    <View style={styles.container}>
        {Array.from(new Array(pages), (x, i) => i).map(page => (
            <PageDot key={page} selected={page === currentPage} isLight={isLight} />
        ))}
    </View>
);

const styles = {
    container: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    element: {
        marginHorizontal: 3,
    },
    elementCheck:  {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '900',
    },
    elementDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
};

export default PageDots;
