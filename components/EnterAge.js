import React from 'react';
import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.bigPrompt}>What is your expected age?</Text>
        <View style={styles.bigInput}>
          <TextInput
            style={styles.bigInputInner}
            placeholder="The US average is 79"
            onChangeText={(age) => this.setState({age})}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigate('EnterDOB')}
          style={styles.bigButton}
        >
          <Text style={styles.bigButtonInner}>Next Question</Text>
        </TouchableOpacity>
        <Text style={styles.bigPrompt}>If you're not sure,&nbsp;
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.myabaris.com/tools/life-expectancy-calculator-how-long-will-i-live/')}>
            this calculator
          </Text>
          &nbsp;will help you figure it out
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
