import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

import HomeComponent from '../../components/views/Home'
type Props = {};
export default class Home extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
        };
        this.policies= this.policies.bind(this)
    }

policies(){
Actions.policies
}

  render() {
    return (       
          <HomeComponent policies={this.policies}/>
    );
  }
}

Home.propTypes={
    policies:Proptypes.object.isRequired
}

function mapStateToProps(store,props){
    return{

    }
}

function matchDispatchToProps(dispath){
    return bindActionCreators({
       // login: login
    } 
    ,dispath);
}

export default connect(mapStateToProps,matchDispatchToProps)(Home);