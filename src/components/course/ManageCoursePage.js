/**
 * Created by sdonose on 03.04.2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
    this.updateCourseState=this.updateCourseState.bind(this);
    this.saveCourse=this.saveCourse.bind(this);
  }
  updateCourseState(event){
    const field=event.target.name;
    let course=this.state.course;
    course[field]=event.target.value;
    return this.setState({course:course});
  }

  saveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }

  render() {
    return (
      <div>
        <h1>Manage course</h1>
        <CourseForm
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          course={this.state.course}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

ManageCoursePage.contextTypes={
  router:PropTypes.object
};

function getCourseById(courses,id) {
  const course=courses.filter(course=>course.id==id);
  if(course) return course[0];
  return null
}

function mapStateToProps(state, ownProps) {
  const courseId=ownProps.params.id; //from the path /course/:id

  let course = {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""};

  if(courseId){
    course=getCourseById(state.course,courseId)
  }
  const authorsFormattedForDropdown=state.authors.map(author=>{
    return{
      value:author.id,
      text:author.firstName+' '+author.lastName
    }
  });
  return {
    course: course,
    authors:authorsFormattedForDropdown
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ManageCoursePage);
