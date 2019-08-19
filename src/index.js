import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { View, Text } from 'react-native';
import CourseList from './components/CourseList';

const App = () => (
  <Provider store={store}>
    <CourseList />
  </Provider>
);

export default App;
