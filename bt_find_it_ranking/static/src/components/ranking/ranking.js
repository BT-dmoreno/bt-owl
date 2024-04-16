/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {Component} from "@odoo/owl";


export class Ranking extends Component {
    static template = "bt_find_it_ranking.Ranking";
    static props = {
        ranking: {
            type: Array,
            optional: true,
        }
    };
}
