/**
 * Created by amanjain on 14/04/16 at 3:59 PM.
 * Description :
 */

import React, {Component} from 'react';
import Circle from '../Circle/main.jsx';
import _ from 'lodash';


class BinaryClock extends Component {

    render() {
        let that = this,
            seconds = that.props.value,
            units = seconds.units,
            tens = seconds.tens,
            value = seconds.value,
            unitsEl = [],
            tensEl = [];

        _.forEach(tens, (value)=> {
            tensEl.push(<Circle active={+value}></Circle>)
        });

        _.forEach(units, (value)=> {
            unitsEl.push(<Circle active={+value}></Circle>)
        });

        return (
            <div className="time-unit-wrap">
                <div className="tens-unit unit-block">
                    {tensEl}
                    <div className="digit">{value[0] || 0}</div>
                </div>
                <div className="digit-unit unit-block">
                    {unitsEl}
                    <div className="digit">{value[1] || 0}</div>
                </div>
            </div>
        )
    }
}

export default BinaryClock;