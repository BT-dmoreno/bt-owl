/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {Component} from "@odoo/owl";
import {Button} from "../button/button";
import {useGameStore} from "../../js/game_store";


export class End extends Component {
    static template = "bt_find_it.End";
    static components = {Button};
    static props = {
        initGame: {
            type: Function,
        }
    };

    setup() {
        this.store = useGameStore();
    }
}
