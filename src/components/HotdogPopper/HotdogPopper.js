import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotdog } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';

import PoppedHotdog from "./PoppedHotdog";

import "./HotdogPopper.css";

class HotdogPopper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hotdogsObject: {}
        };

        this.selfRef = React.createRef(); // uses ref to get element location
        this.nextHotdogId = 0;
    }

    getSpawnPointFromRef(reference) {
        if(reference) {
            const bounds = reference.current.getBoundingClientRect();
            const spawnPoint = [ bounds.left, bounds.top ]; // should not use bounds.x or bounds.y according to the spec
            return spawnPoint;
        }
        else {
            console.error("No ref passed to getSpawnPointFromRef");
        }
    }

    popHotdogs(atReference) {
        if(atReference) {
            const numHotdogs = Math.floor((Math.random() * (this.props.popperMaxHotdogs - this.props.popperMinHotdogs)) + this.props.popperMinHotdogs);
            const newHotdogs = {};
            const spawnPoint  = this.getSpawnPointFromRef(atReference);
            
            for(let i = 0; i < numHotdogs; i++) {
                newHotdogs[this.nextHotdogId] = this.createHotdog(spawnPoint);
                this.nextHotdogId++;
            }

            this.addHotdogs(newHotdogs);
        }
        else {
            console.error("Reference or Config missing from popHotdogs");
        }
    }

    createHotdog(spawnPoint) {
        const popLength = Math.floor((Math.random() * (this.props.popperMaxPopLength - this.props.popperMinPopLength)) + this.props.popperMinPopLength);
        const popAngle = Math.floor(Math.random() * Math.PI * 2);
        const color = this.props.popperPossibleColors[Math.floor((Math.random() * this.props.popperPossibleColors.length))];
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
        setTimeout(() => {this.hotdogRemoval(newHotdogs)}, this.props.popperDisposeAfter);
    }

    applyTransitionToCurrentHotdogs() {
        const newHotdogsObject = _.mapValues(this.state.hotdogsObject, (hotdog) => {
            hotdog.hotdogStyle = {
                left: hotdog.spawnPoint[0] + (Math.cos(hotdog.popAngle) * hotdog.popLength),
                top: hotdog.spawnPoint[1] + (Math.sin(hotdog.popAngle) * hotdog.popLength),
                opacity: 0,
                transform: this.buildRotationProperty(this.props.popperMinRotation, this.props.popperMaxRotation),
            }
            return hotdog;
        });

        this.setState({ hotdogsObject: newHotdogsObject });
    }

    buildRotationProperty(minDeg, maxDeg) {
        let randomDegree = Math.floor((Math.random() * (maxDeg - minDeg)) + minDeg);
        let propertyString = `rotate(${randomDegree.toString()}deg)`;
        return propertyString;
    }

    hotdogRemoval(addedHotdogs) {
        let addedKeys = Object.keys(addedHotdogs);
        let newHotdogsObject = _.omit(this.state.hotdogsObject, addedKeys);
        this.setState({ hotdogsObject: newHotdogsObject });
    }

    render() {
        return (
            <span ref={ this.selfRef }>
                <FontAwesomeIcon icon={ faHotdog } onClick={ () => this.popHotdogs(this.selfRef) } />
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

HotdogPopper.defaultProps = {
    popperMinHotdogs: 6, // inclusive
    popperMaxHotdogs: 12, // not inclusive
    popperMinPopLength: 100, // inclusive
    popperMaxPopLength: 200, // not inclusive
    popperMinRotation: 0, // degrees
    popperMaxRotation: 180, // degrees
    popperDisposeAfter: 1000, // ms; timeout before element is removed
    popperPossibleColors: ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-muted", "color-darkgreen", "color-deepskyblue", "color-lime", "color-maroon", "color-navy", "color-navajowhite", "color-purple", "color-salmon", "color-springgreen"],
}

export default HotdogPopper;
