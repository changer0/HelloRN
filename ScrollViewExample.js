import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  Text
} from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return(
          <ScrollView>
            <Text style={{fontSize:10}}>Scroll me plz</Text>
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Text style={{fontSize:10}}>If you like</Text>
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Text style={{fontSize:10}}>Scrolling down</Text>
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Text style={{fontSize:10}}>What's the best</Text>
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Text style={{fontSize:10}}>Framework around?</Text>
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Image source={require('./img/favicon.png')} />
            <Text style={{fontSize:10}}>React Native</Text>
          </ScrollView>
      );
    }
  }