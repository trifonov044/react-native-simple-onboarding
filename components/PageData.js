import React from 'react';
import { View, Text } from 'react-native';

const HORIZONTAL_ORIENTATION = 'horizontal';
const VERTICAL_ORIENTATION = 'vertical';

const Page = ({ width, height, children }) => (
  <View style={{ width, height }}>
    {children}
  </View>
);

const PageContent = ({ children }) => (
  <View style={styles.content}>
    <View style={{ flex: 0 }}>
      {children}
    </View>
  </View>
);

const PageData = ({ isLight, image, title, subtitle, width, orientation, ...rest }) => (
  <Page {...rest}>
    <PageContent>
      <View style={orientation == VERTICAL_ORIENTATION ? styles.verticalContent : styles.horizontalContent}>
        <View style={{maxWidth: orientation == VERTICAL_ORIENTATION ? width : width/2}}>
          <View style={orientation == VERTICAL_ORIENTATION ? styles.verticalImage : styles.horizontalImage}>
              {image}
          </View>
        </View>
        <View style={{maxWidth: orientation == VERTICAL_ORIENTATION ? width : width/2}}>
          <Text style={{ ...styles.title, ...(isLight ? styles.titleLight : {}) }}>
              {title}
          </Text>
          <Text style={{ ...styles.subtitle, ...(isLight ? styles.subtitleLight : {}) }}>
              {subtitle}
          </Text>
        </View>
      </View>
    </PageContent>
  </Page>
);

const styles = {
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:60
  },
  verticalContent :{
    flexDirection: 'column',
  },
  horizontalContent:{
    flexDirection: 'row',
  },
  verticalImage: {
    flex: 0,
    paddingBottom: 30,
    alignItems: 'center',
  },
  horizontalImage: {
    flex: 0,
    alignItems: 'center',
  },
  title: {
    padding:16,
    paddingTop:0,
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    paddingBottom: 15,
  },
  titleLight: {
    color: '#000',
  },
  subtitle: {
    padding:16,
    paddingTop:8,
    textAlign: 'center',
    fontSize: 15,
    color: 'rgba(255, 255, 255, 1.0)',
  },
  subtitleLight: {
    color: 'rgba(0, 0, 0, 0.7)',
  },
};

export default PageData;
