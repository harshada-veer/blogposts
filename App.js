import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import HomeScreen from './components/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
