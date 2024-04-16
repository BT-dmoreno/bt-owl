/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {Component, useState, onWillStart, onWillDestroy} from "@odoo/owl";


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

        onWillStart(() => {
            this.timerInterval = setInterval(() => {
                if (this.state.time < 1) {
                    this.props.stopPlaying();
                } else {
                    this.state.time--;
                }
            }, 1000);
        });

        onWillDestroy(() => {
            clearInterval(this.timerInterval);
        });
    }
}
