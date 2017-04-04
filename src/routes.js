/**
 * Created by sdonose on 3/31/2017.
 */
import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursePage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="courses" component={CoursePage} />
  </Route>
)
