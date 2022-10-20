import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact';
import { StackNavigator } from 'react-navigation';
import { Video } from './app/views/Video.js';
import { VideoDetail } from './app/views/VideoDetail';
import { Register } from './app/views/Register.js';
import { Login } from './app/views/Login';
import { About } from './app/views/About';
import { Blog } from './app/views/Blog';

import * as Svg from 'react-native-svg';

import { Quiz } from './app/views/Quiz.js';
import { Finish } from './app/views/QuizFinish.js';

const MyRoutes = StackNavigator(
  {
    HomeRT: {
      screen: Home,
    },
    ContactRT: {
      screen: Contact,
    },
    LessonsRT: {
      screen: Video,
    },
    VideoDetailRT: {
      screen: VideoDetail,
    },
    RegisterRT: {
      screen: Register,
    },
    LoginRT: {
      screen: Login,
    },
    QuizRT: {
      screen: Quiz,
    },
    FinishRT: {
      screen: Finish,
    },
    BlogRT: {
      screen: Blog,
    },
    AboutRT: {
      screen: About,
    },
  },
  {
    initialRouteName: 'HomeRT',
  }
);

export default class App extends React.Component {
  render() {
    return <MyRoutes />;
  }
}
