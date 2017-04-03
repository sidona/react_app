/**
 * Created by sdonose on 03.04.2017.
 */
import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ManageCoursePage extends React.Component{
  constructor(props,context){
    super(props,context);
  }
  render(){
    return(
    );
  }
}

ManageCoursePage.PropTypes={
  myProp:PropTypes.string.isRequired
};

function mapStateToProps(state,ownProps) {
  return{
    state:state
  };
}

function mapDispatchtoProps(dispatch) {
  return{
    actions:bindActionCreators(actions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(ManageCoursePage);
