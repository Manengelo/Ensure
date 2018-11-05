/**
 * Import react and react native
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

/**
 * Import Utilities
 */


/**
 * Import Actions
 */


/**
 * Import Components
 */
import HomeComponent from '../../components/views/Home'


type Props = {};

class Home extends Component<Props> {
    constructor(props) {
        
        super(props)
        
        /**
         * State configuration
         */
        this.state = {};

        /**
         * Bind methods to this
         */
        this.policies = this.policies.bind(this)
        this.back = this.back.bind(this);
    }

    /**
     * Main View Methods
     */
    policies() {
        Actions.policies()
    }

    /**
     * Back to Previous View Navigation
     */
    back() {
        Actions.pop()
    }

    /**
     * Render Component
     */
    render() {
        return (       
            <HomeComponent policies={this.policies} back={this.back} />
        );
    }
}

/**
 * Component Properties Types
 */
Home.propTypes = {}

/**
 * Map Store to Component Props
 * @param {*} store 
 * @param {*} props 
 */
function mapStateToProps(store,props){
    return{

    }
}

/**
 * Match Action Dispatches to Component Props
 * @param {*} dispath 
 */
function matchDispatchToProps(dispath){
    return bindActionCreators({
       // login: login
    } 
    ,dispath);
}

/**
 * Export and Connect Compnent
 */
export default connect(mapStateToProps,matchDispatchToProps)(Home);