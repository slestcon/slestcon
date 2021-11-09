import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';

import "./PoppedHotdog.css";

class PoppedHotdog extends React.Component {
    render() {
        return (
            <span className={this.props.color}>
                <FontAwesomeIcon icon={ faHotdog } className={"position-fixed popped-hotdog-transition"} style={this.props.style} />
            </span>
        );
    }
}

export default PoppedHotdog;
