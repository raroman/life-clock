import { StackNavigator } from 'react-navigation';

import EnterAge from 'components/EnterAge.js';
import EnterDOB from 'components/EnterDOB.js';
import Home from 'components/Home.js';

const WelcomeWizard = StackNavigator({
  EnterAge: { screen: EnterAge },
  EnterDOB: { screen: EnterDOB },
  Home: { screen: Home },
});

export default WelcomeWizard;
