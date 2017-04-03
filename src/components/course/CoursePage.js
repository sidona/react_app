/**
 * Created by sdonose on 3/31/2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursePage extends React.Component{
  constructor(props,context){
    super(props,context);

    // this.state={
    //   course:{title:""}
    // };
    // this.onTitleChange=this.onTitleChange.bind(this);
    // this.onClickSave=this.onClickSave.bind(this);
  }
  onTitleChange(event){
    const course=this.state.course;
    course.title=event.target.value;
    this.setState({course:course});
  }
  // onClickSave(){
  // this.props.actions.createCourse(this.state.course);
  // }

  courseRow(course,index){
    return <div key={index}>{course.title}</div>;
  }
  render(){
    const {courses}=this.props;
    return(
      <div>
        <h1>Courses</h1>
        <CourseList courses={course}/>
        {/*{this.props.course.map(this.courseRow)}*/}
        {/*<input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>*/}
        {/*<input type="submit" value="Save" onClick={this.onClickSave}/>*/}
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
