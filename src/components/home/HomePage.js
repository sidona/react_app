/**
 * Created by sdonose on 3/31/2017.
 */
import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>Example home</h1>
        <Link to="about" className="btn btn-primary">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
