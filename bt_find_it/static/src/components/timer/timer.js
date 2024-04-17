/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {Component, useState} from "@odoo/owl";


export class Timer extends Component {
    static template = "bt_find_it.Timer";
    static props = {
        stopPlaying: {
            type: Function,
        }
    };

    setup() {
        this.state = useState({
            time: 30,
        });

        this.timerInterval = null;

        // TODO 5: It would be a good idea to set this interval right before the component is rendered, and
        //  most importantly, run it just one time. Could you find a life cycle hook for this.
        // https://github.com/odoo/owl/blob/master/doc/reference/component.md#lifecycle

        // -->> Include the following logic inside a lifecycle hook that executes before the rendering and just
        // once
        this.timerInterval = setInterval(() => {
            if (this.state.time < 1) {
                this.props.stopPlaying();
            } else {
                this.state.time--;
            }
        }, 1000);

        // Another good point is to call "clearInterval" function when this component is not needed anymore,
        // this way we don't saturate the browser with intervals that are not used anymore. Please, find a
        // proper life cycle hook to clean it too.

        // -->> Clear the interval when the component is going to be removed
    }
}
