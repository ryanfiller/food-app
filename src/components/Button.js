import * as React from 'react';

class Button extends React.Component {

    render() {

        return <button className="button button--touch" type="button" name="button">
                <span>{this.props.name}</span>
            </button>
    }
}

export default Button;
