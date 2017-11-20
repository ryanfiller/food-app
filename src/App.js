import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';


import { Tabs, TabLink, TabContent } from './components/tabs';

import MainNavigation from './components/MainNavigation';

var mainNav = [
    { 'id': 1, 'name': 'Ingredients', },
    { 'id': 2, 'name': 'Recipes' },
    { 'id': 3, 'name': 'Timers' }
];

class App extends Component {
  render() {
    return (
        <div className="app horizontal-layout rounded">
            <MainNavigation navList={mainNav}/>

            <div className="buttons buttons--vertical">
                <button className="button button--touch" type="button" name="button">
                    <span>Dairy</span>
                </button>
                <button className="button button--touch" type="button" name="button">
                    <span>Protein</span>
                </button>
                <button className="button button--touch" type="button" name="button">
                    <span>Fruit</span>
                </button>
                <button className="button button--touch" type="button" name="button">
                    <span>Vegetables</span>
                </button>
                <button className="button button--touch" type="button" name="button">
                    <span>Grains</span>
                </button>
                <button className="button button--touch" type="button" name="button">
                    <span>Spices</span>
                </button>
                <button className="button button--touch" type="button" name="button">
                    <span>Other</span>
                </button>
                <button className="button button--touch" type="button" name="button">
                    <span>Search</span>
                </button>
            </div>

            <main className="main">
                <div className="content">
                    <p>
                        Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <Tabs>
                        <TabLink to="tab1">Tab1</TabLink>
                        <TabLink to="tab2">Tab2</TabLink>
                        <TabLink to="tab3">Tab3</TabLink>

                        <TabContent for="tab1">/* content for tab #1 */</TabContent>
                        <TabContent for="tab2">/* content for tab #2 */</TabContent>
                        <TabContent for="tab3">/* content for tab #3 */</TabContent>
                    </Tabs>
                </div>
            </main>
          </div>
    );
  }
}

export default App;
