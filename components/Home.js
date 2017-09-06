import React from 'react';
import { DatePickerIOS, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      DOB: new Date(),
    }
  }
  onDOBChange = (DOB) => {
    this.setState({ DOB });
  }
  render() {
    const { DOB } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.bigPrompt}>Days until you die:</Text>
        <TouchableOpacity
          onPress={this.submit}
          style={styles.bigButton}
        >
          <Text style={styles.bigButtonInner}>Next Question</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  datePicker: {
    width: 300,
    height: 300
  },
  container: {
    flex: 1,
    backgroundColor: 'hsl(0, 0%, 100%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigButton: {
    backgroundColor: 'hsl(0, 0%, 50%)',
    borderColor: 'hsl(193, 96%, 21%)', // change
    borderRadius: 4,
    borderWidth: 1,
  },
  bigButtonInner: {
    fontSize: 22,
    padding: 16,
  },
  bigInput: {
    borderColor: 'hsl(193, 96%, 21%)', // change
    borderRadius: 4,
    borderWidth: 1,
  },
  bigInputInner: {
    padding: 16,
    fontSize: 22,
  },
  bigPrompt: {
    color: 'hsl(193, 96%, 21%)',
    fontSize: 22,
    fontWeight: '600',
  },
  link: {
    color: 'hsl(193, 95%, 42%)'
  },
});
