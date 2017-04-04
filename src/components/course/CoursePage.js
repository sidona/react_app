/**
 * Created by sdonose on 3/31/2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.redirectToAddCoursePage=this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage(){
    browserHistory.push('./course');
  }

  render(){
    const {course}=this.props;
    return(
      <div>
        <h1>Courses</h1>
        <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage} />
        <CourseList courses={course}/>
      </div>
    );
  }
}


CoursePage.propTypes={
  course:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps) {
  return{
    course:state.course
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions:bindActionCreators(courseActions,dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
