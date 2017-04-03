/**
 * Created by sdonose on 03.04.2017.
 */
import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';


const CourseList=({courses})=>{
  return(
    <table className="table">
      <thead>
      <tr>
        <th>Titlr</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course=>
      <CourseListRow key={course.id} course={course} />
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes={
  courses:PropTypes.array.isRequired
};

export default CourseList;
