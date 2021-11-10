import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';

import PoppedHotdog from "./PoppedHotdog";

class HotdogPopper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            popperConfig: {
                minHotdogs: 6, // inclusive
                maxHotdogs: 12, // not inclusive
                minPopLength: 100, // inclusive
                maxPopLength: 200, // not inclusive
                disposeAfter: 1000, // ms
                possibleColors: ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-muted"],
            },
            selfRef: React.createRef(),
            hotdogsObject: {}
        };

        this.nextHotdogId = 0;
    }

    getSpawnPointFromRef(reference) {
        if(reference) {
            const bounds = reference.current.getBoundingClientRect();
            const spawnPoint = [ bounds.x, bounds.y ];
            return spawnPoint;
        }
        else {
            console.error("No ref passed to getSpawnPointFromRef");
        }
    }

    popHotdogs(atReference) {
        if(atReference) {
            const numHotdogs = Math.floor((Math.random() * (this.state.popperConfig.maxHotdogs - this.state.popperConfig.minHotdogs)) + this.state.popperConfig.minHotdogs);
            const newHotdogs = {};
            const spawnPoint  = this.getSpawnPointFromRef(atReference);
            
            for(let i = 0; i < numHotdogs; i++) {
                newHotdogs[this.nextHotdogId] = this.createHotdog(spawnPoint, this.state.popperConfig);
                this.nextHotdogId++;
            }

            this.addHotdogs(newHotdogs, this.state.popperConfig);
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

    addHotdogs(newHotdogs) {
        this.setState({ 
            hotdogsObject: {...this.state.hotdogsObject, ...newHotdogs}
        });
        setTimeout(() => {this.applyTransitionToCurrentHotdogs()});
        setTimeout(() => {this.hotdogRemoval(newHotdogs)}, this.state.popperConfig.disposeAfter);
    }

    applyTransitionToCurrentHotdogs() {
        const newHotdogsObject = _.mapValues(this.state.hotdogsObject, (hotdog) => {
            hotdog.hotdogStyle = {
                left: hotdog.spawnPoint[0] + (Math.cos(hotdog.popAngle) * hotdog.popLength),
                top: hotdog.spawnPoint[1] + (Math.sin(hotdog.popAngle) * hotdog.popLength),
                opacity: 0
            }
            return hotdog;
        });

        this.setState({ hotdogsObject: newHotdogsObject });
    }

    hotdogRemoval(addedHotdogs) {
        let addedKeys = Object.keys(addedHotdogs);
        let newHotdogsObject = _.omit(this.state.hotdogsObject, addedKeys);
        this.setState({ hotdogsObject: newHotdogsObject });
    }

    render() {
        return (
            <span ref={ this.state.selfRef }>
                <FontAwesomeIcon icon={ faHotdog } onClick={ () => this.popHotdogs(this.state.selfRef) } />
                {
                    Object.keys(this.state.hotdogsObject).map((index) => (
                        <PoppedHotdog 
                            style={this.state.hotdogsObject[index].hotdogStyle} 
                            color={this.state.hotdogsObject[index].hotdogColor} 
                            key={index} 
                        />
                    ))
                }
            </span>
        );
    }
}

export default HotdogPopper;
