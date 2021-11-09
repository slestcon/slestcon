import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';

import PoppedHotdog from "./PoppedHotdog";

class HotdogPopper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popperConfig: {
                minHotdogs: 4, // inclusive
                maxHotdogs: 10, // not inclusive
                minPopLength: 100, // inclusive
                maxPopLength: 200, // not inclusive
                disposeAfter: 1000,
                possibleColors: ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-muted"],
            },
            selfRef: React.createRef(),
            hotdogsArray: []
        };
    }

    getCenterOfRef(reference) {
        if(reference) {
            const bounds = reference.current.getBoundingClientRect();
            const spawnPoint = [ bounds.x, bounds.y ];
            return spawnPoint;
        }
        else {
            console.error("No ref passed to getCenterOfRef");
        }
    }

    popHotdogs(atReference, popperConfig) {
        if(atReference && popperConfig) {
            const numHotdogs = Math.floor((Math.random() * (popperConfig.maxHotdogs - popperConfig.minHotdogs)) + popperConfig.minHotdogs);
            const newHotdogs = [];
            const spawnPoint  = this.getCenterOfRef(atReference);
            
            for(let i = 0; i < numHotdogs; i++) {
                newHotdogs.push(this.createHotdog(spawnPoint, popperConfig));
            }

            this.addHotdogs(newHotdogs, popperConfig);
        }
        else {
            console.error("Reference or Config missing from popHotdogs");
        }
    }

    createHotdog(spawnPoint, popperConfig) {
        const popLength = Math.floor((Math.random() * (popperConfig.maxPopLength - popperConfig.minPopLength)) + popperConfig.minPopLength);
        const popAngle = Math.floor(Math.random() * Math.PI * 2);
        const color = popperConfig.possibleColors[Math.floor((Math.random() * popperConfig.possibleColors.length))];
        const newHotdog = {
            spawnPoint: spawnPoint,
            popLength: popLength,
            popAngle: popAngle,
            hotdogColor: color,
            hotdogStyle: {
                left: spawnPoint[0],
                top: spawnPoint[1]
            }
        };

        return newHotdog;
    }

    addHotdogs(newHotdogs, popperConfig) {
        this.setState({ hotdogsArray: this.state.hotdogsArray.concat(newHotdogs) });
        setTimeout(() => {this.applyAllHotdogsTransition()});
        setTimeout(() => {this.removeHotdogs()}, popperConfig.disposeAfter);
    }

    applyAllHotdogsTransition() {
        const newHotdogsArray = this.state.hotdogsArray.map((hotdog) => {
            hotdog.hotdogStyle = {
                left: hotdog.spawnPoint[0] + (Math.cos(hotdog.popAngle) * hotdog.popLength),
                top: hotdog.spawnPoint[1] + (Math.sin(hotdog.popAngle) * hotdog.popLength),
                opacity: 0
            }
            return hotdog;
        });

        this.setState({ hotdogsArray: newHotdogsArray });
    }

    removeHotdogs() {
        // TODO remove hotdog elements when finished
    }

    render() {
        return (
            <span ref={ this.state.selfRef }>
                <FontAwesomeIcon icon={ faHotdog } onClick={ () => this.popHotdogs(this.state.selfRef, this.state.popperConfig) } />
                {
                    this.state.hotdogsArray.map((hotdog, index) => (
                        <PoppedHotdog style={hotdog.hotdogStyle} color={hotdog.hotdogColor} key={index} />
                    ))
                }
            </span>
        );
    }
}

export default HotdogPopper;
