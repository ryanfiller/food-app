import * as React from 'react';

import Button from './Buttons';

class MainNavigation extends React.Component {

    render() {

        return <nav className="buttons buttons--vertical buttons--rotated">

            {this.props.navList.map(function(navButton) {
                return (
                    <Button name={navButton.name} />
                );
            })}
        </nav>
    }

}

export default MainNavigation;
