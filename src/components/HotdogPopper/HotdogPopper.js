import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';

class HotdogPopper extends React.Component {
    constructor(props) {
        super(props);

        this.selfRef = React.createRef();
    }

    getCenterOfRef(reference) {
        if(reference) {
            const bounds = reference.current.getBoundingClientRect();
            const center = [
                (bounds.left + bounds.right) / 2.0,
                (bounds.top + bounds.bottom) / 2.0
            ];
            return center;
        }
        else {
            console.error("No ref passed to getCenterOfRef");
        }
    }

    popHotdogs(reference) {
        const center = this.getCenterOfRef(reference);
        console.log(center);
    }

    render() {
        return (
            <span ref={ this.selfRef }>
                <FontAwesomeIcon icon={ faHotdog } onClick={ () => this.popHotdogs(this.selfRef) } />
            </span>
        );
    }
}

export default HotdogPopper;
