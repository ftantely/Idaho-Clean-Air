import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav';
import Home from './Home'
import Footer from './Footer'
import Contact from './Contact'
import Allcontacts from "./Allcontacts";
import updatecontacts from "./updatecontacts";


class App extends Component {
    render() {
        return (
            <Router>
                <div className='app1'>
                    <div className='app2'>
                        <div className='app3'>
                            <Nav/>
                            <Route exact path="/" component={Home}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/allcontacts" component={Allcontacts}/>
                            <Route path="/one/:id" component={updatecontacts} />
                        </div>
                    </div>
                    <Footer className='fixed-bottom' />
                </div>

            </Router>

        );
    }
}

export default App;
