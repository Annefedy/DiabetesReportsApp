import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReportScreen from './ReportScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="ReportScreen"
          component={ReportScreen}
          options={{ title: 'Tela de Relatórios' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
