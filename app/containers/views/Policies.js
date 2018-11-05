import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

/**
 * Import Utilities
 */


/**
 * Impport Actions
 */


/**
 * Import Components
 */
import PoliciesComponent from '../../components/views/Policies'


type Props = {};

class Policies extends Component<Props> {
    constructor(props) {
        
        super(props)
        
        /**
         * State configuration
         */
        this.state = {};

        /**
         * Bind methods to this
         */
        this.home = this.home.bind(this)
        this.back = this.back.bind(this)
    }

    /**
     * Main View Methods
     */
    home() {
        Actions.home()
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
            <PoliciesComponent home={this.home} back={this.back} />
        );
    }
}

/**
 * Component Properties Types
 */
Policies.propTypes = {}

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
export default connect(mapStateToProps,matchDispatchToProps)(Policies);