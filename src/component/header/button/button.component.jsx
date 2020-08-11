import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SharedButton extends Component {
    render (){
        const { buttonText, emitEvent } = this.props;
        return (
            <button data-test="buttonComponent" onClick={emitEvent}>
                {buttonText}
            </button>
        )
    }
}

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};

export default SharedButton;
