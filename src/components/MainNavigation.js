import * as React from 'react';

import Button from './Buttons';

class MainNavigation extends React.Component {

    render() {

        return <nav className="buttons buttons--vertical buttons--rotated">

            {this.props.navList.map(function(button) {
                return (
                    <Button name={button.name} />
                );
            })}
        </nav>
    }

}

export default MainNavigation;
