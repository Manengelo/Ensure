import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

import PoliciesComponent from '../../components/views/Policies'
type Props = {};
export default class Home extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
        };
    }


  render() {
    return (       
          <PoliciesComponent/>
    );
  }
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

export default connect(mapStateToProps,matchDispatchToProps)(Policies);