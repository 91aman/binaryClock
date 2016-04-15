/**
 * Created by amanjain on 14/04/16 at 3:13 PM.
 * Description :
 */

import React, {Component} from 'react';
import TimeUnit from './Components/Timeunit/main.jsx';
import leftPad from 'left-pad';
import _ from 'lodash';


function convertToBinary(number, pad) {
    return leftPad((number).toString(2), pad, 0)
}

function parseTime() {
    let currentTime = new Date(),
        seconds = currentTime.getSeconds(),
        minutes = currentTime.getMinutes(),
        hours = currentTime.getHours();

    return {
        hours: {
            value: leftPad(hours.toString(), 2, 0),
            units: convertToBinary(hours % 10, 4),
            tens: convertToBinary(Math.floor(hours / 10), 2)
        },
        minutes: {
            value: leftPad(minutes.toString(), 2, 0),
            units: convertToBinary(minutes % 10, 4),
            tens: convertToBinary(Math.floor(minutes / 10), 3)
        },
        seconds: {
            value: leftPad(seconds.toString(), 2, 0),
            units: convertToBinary(seconds % 10, 4),
            tens: convertToBinary(Math.floor(seconds / 10), 3)
        }
    }
}


class BinaryClock extends Component {

    constructor() {
        super();
        this.state = parseTime()
    }


    render() {
        let that = this,
            bodyEl = [];

        _.forEach(that.state, (value)=> {
            bodyEl.push(<TimeUnit value={value}></TimeUnit>)
        });

        return (
            <div>
                <div className="title">Binary Clock</div>
                <div className="body">{bodyEl}</div>
                <div className="footer">Made with <span className="footer-heart"> &#x2764; </span> by <a target="_blank"
                                                                                                         href="http://ajain.in/">Aman
                    Jain</a></div>
            </div>
        )
    }


    componentDidMount() {
        let that = this;

        window.setTimeout(() => {
            that.setState(parseTime());
            window.setInterval(() => {
                console.log(parseTime());
                that.setState(parseTime())
            }, 1000)

        }, 1000 - new Date().getMilliseconds());
    }
}

export default BinaryClock;