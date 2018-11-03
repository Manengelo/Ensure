import React from 'react';
import {Platform, Component,StatusBar} from 'react-native';
import {Router,Modal,Scene,Tabs} from 'react-native-router-flux';
import {Text,Button,Icon} from 'native-base';



import Home from './containers/views/Home'
//import Home from './containers/views/Policies'
const Routes = function(){
    return(
        <Router>
            <Modal>
                <Scene key='root' hideNavBar={true}>
                    <Scene key='home' component={Home}/>
                    <Scene key='policies' component={Policies}/>
                </Scene>
            </Modal>
        </Router>
    )
}
