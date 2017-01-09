import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import PageDots from './PageDots';
import { SymbolButton, TextButton } from './Buttons';

const getDefaultStyle = (isLight) => ({
    color: isLight ? 'rgba(0, 0, 0, 0.8)' : '#fff',
});

const SkipButton = ({ isLight, ...props }) => (
    <TextButton {...props} textStyle={getDefaultStyle(isLight)}>
        Skip
    </TextButton>
);

const NextButton = ({ isLight, text, textStyle, buttonStyle,...props }) => (
    <TextButton {...props} textStyle={textStyle} style={buttonStyle}>
        {text}
    </TextButton>
);
const DoneButton = ({ isLight, size, text, textStyle, buttonStyle, ...props }) => (
    <TextButton {...props} size={size} textStyle={textStyle} style={buttonStyle}>
        {text}
    </TextButton>
);

const BUTTON_SIZE = 40;
const Paginator = ({ isLight, overlay, showSkip, showNext, showDone, pages, currentPage, onEnd, onNext, nextButtonText, doneButtonText, buttonStyle, buttonTextStyle}) => (
    <View style={{ ...styles.container, ...(overlay ? styles.containerOverlay : {}) }}>
        <PageDots isLight={isLight} pages={pages} currentPage={currentPage} />
        <View style={styles.buttonRight}>
            {currentPage + 1 === pages ?
                (showDone ? <DoneButton isLight={isLight} size={BUTTON_SIZE} onPress={onEnd} text={doneButtonText} textStyle={buttonTextStyle} buttonStyle={buttonStyle}/> : null) :
                (showNext ? <NextButton isLight={isLight} size={BUTTON_SIZE} onPress={onNext} text={nextButtonText} textStyle={buttonTextStyle} buttonStyle={buttonStyle}/> : null)
            }
        </View>
    </View>
);

const styles = {
    container: {
        height: 100,
        paddingBottom:20,
        paddingHorizontal: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    containerOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    buttonLeft: {
        width: 70,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonRight: {
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default Paginator;