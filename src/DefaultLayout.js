import React, {Component} from 'react';
import Footer from "./Footer";
import {BrowserRouter, Route} from 'react-router-dom';

const DefaultLayout = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={matchProps => (
            <main>
                <div className="dlex" id="wrapper">
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <Component {...matchProps} />
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        )}
    />
);


export default DefaultLayout;