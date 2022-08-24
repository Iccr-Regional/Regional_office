import React from 'react';
import {Newsticker} from 'react-native-newsticker';
export default function NewsTicker() {
  return (
    <Newsticker
  style={styles.alignLeft}
  typeInterval={100}
  blinkInterval={500}
  onFinish={() => {this.onFinish()}}
  cursor={true}
  start={this.state.is_begin}
  back={this.state.is_back}
  text={'This is a really awesome Newsticker !!'}
/>
  );
}
