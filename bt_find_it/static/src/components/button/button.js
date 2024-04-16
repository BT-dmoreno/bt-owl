/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {Component} from "@odoo/owl";


export class Button extends Component {
    static template = "bt_find_it.Button";
    static props = {
        string: {
            type: String,
            optional: false,
        },
        onClick: {
            type: Function,
            optional: true,
        },
        disabled: {
            type: Boolean,
            optional: true,
        }
    };

    onClick() {
        if (this.props.onClick && !this.props.disabled) {
            this.props.onClick();
        }
    }
}
