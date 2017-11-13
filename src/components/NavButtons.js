import * as React from 'react';

class NavButtons extends React.Component {

    render() {

        return <nav className="buttons buttons--vertical buttons--rotated">
            <button className="button button--touch" type="button" name="button">
                <span>Ingredients</span>
            </button>
            <button className="button button--touch" type="button" name="button">
                <span>Recipies</span>
          </button>
            <button className="button button--touch" type="button" name="button">
                <span>Timers</span>
          </button>
        </nav>
    }

}

export default NavButtons;
