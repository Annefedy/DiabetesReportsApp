import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReportScreen from './ReportScreen';
import ReportView from './ReportView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ReportScreen" screenOptions={{ headerTitleAlign: 'center', }}>
        <Stack.Screen
          name="ReportScreen"
          component={ReportScreen}
          options={{ title: 'Tela de Relatórios' }}
        />
        <Stack.Screen name="ReportView" component={ReportView} options={{ title: 'Relatório' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
