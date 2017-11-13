import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';

class App extends Component {
  render() {
    return (
        <div className="app horizontal-layout rounded">
              <nav className="buttons buttons--vertical">
                  <button className="button button--touch" type="button" name="button">
                      <span>Quam Pellentesque</span>
                  </button>
                  <button className="button button--touch" type="button" name="button">
                      <span>Vulputate Euismod</span>
                </button>
                  <button className="button button--touch" type="button" name="button">
                      <span>Vestibulum Fusce</span>
                </button>
                  <button className="button button--touch" type="button" name="button">
                      <span>Risus Ullamcorper</span>
                </button>
              </nav>

              <main className="main">
                  <div className="content">
                      Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.
                  </div>
              </main>

              <nav className="buttons buttons--vertical button--secondary">
                  <button className="button button--touch" type="button" name="button">
                      <span>Vestibulum Fusce</span>
                </button>
                  <button className="button button--touch" type="button" name="button">
                      <span>Risus Ullamcorper</span>
                </button>
              </nav>
          </div>
    );
  }
}

export default App;
