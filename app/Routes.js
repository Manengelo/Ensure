import React from 'react';
import {Platform, Component,StatusBar} from 'react-native';
import {Router,Modal,Scene,Tabs} from 'react-native-router-flux';
import {Text,Button,Icon} from 'native-base';



import Home from './containers/views/Home'
import Policies from './containers/views/Policies'

const Routes = function(){
    return(
        <Router>
            <Modal>
                <Scene key='root' hideNavBar={true}>
                    

                    <Tabs key="homeTabs" hideNavBar={true}>
                        <Scene key='home' component={Home} title="Home" tabBarTitle="Home"/>
                        <Scene key='policies' component={Policies} title="Policies" tabBarTitle="Policies"/>
                    </Tabs>

                </Scene>

                <Scene key="order" component={Home} />

                <Scene key="checkout" component={Policies} />
            </Modal>
        </Router>
    )
}

export default Routes;