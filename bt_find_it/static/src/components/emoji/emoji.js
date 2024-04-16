/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {Component, useState} from "@odoo/owl";


export class Emoji extends Component {
    static template = "bt_find_it.Emoji";
    static defaultProps = {
        clickable: true,
        index: null,
    };
    static props = {
        codepoint: {
            type: String,
        },
        clickable: {
            type: Boolean,
            optional: true,
        },
        onClick: {
            type: Function,
            optional: true,
        },
        index: {
            type: Number,
            optional: true,
        }
    };

    setup() {
        this.state = useState({
            clicked: false,
            isClickable: this.props.clickable,
        });
    }

    onClick() {
        if (this.state.isClickable) {
            this.state.clicked = true;
            this.state.isClickable = false;

            if (this.props.onClick) {
                this.props.onClick(this.props.index);
            }
        }
    }
}
