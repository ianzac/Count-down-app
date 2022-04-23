import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import formatTime from 'minutes-seconds-milliseconds';


export default function App() {
  const [countDownValue, setCountDownValue] = useState('');
  const [runningTime, setRunningTime] = useState(null);
  const [finishTime, setFinishTime] = useState(false);
  const [myInterval, setMyInterval] = useState(null);

  const [timeShow, setTimeShow] = useState(null);

  const onStart = () =>{
    let currTime = new Date();
    let tmpFinishTime = new Date(currTime.getTime() + parseInt(countDownValue) * 60000);
    setFinishTime(tmpFinishTime);
    let tmpInt = setInterval(() => {
      let tmp = finishTime - new Date();
      setTimeShow(tmp);
      if(tmp < 0){
        clearInterval(tmpInt);
      }
    }, 10);
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>
          Countdown (minutes):
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(v) => setCountDownValue(v)}
          value={countDownValue}
        />
      </View>
      <Button
        onPress={onStart}
        title="START"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
