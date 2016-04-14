/**
 * Created by amanjain on 14/04/16 at 3:51 PM.
 * Description :
 */

import React, {Component} from 'react';
import classnames from 'classnames';

class Circle extends Component {

    render() {
        let that = this;
        return (
            <div className={classnames(
                "time-circle",
                {
                    active: that.props.active
                }
            )
            }></div>
        )
    }
}

export default Circle;