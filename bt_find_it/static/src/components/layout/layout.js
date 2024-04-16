/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {Component, useState, useSubEnv} from "@odoo/owl";

import {Game} from "../game/game";
import {GameStore} from "../../js/game_store";


export class Layout extends Component {
    static template = "bt_find_it.Layout";
    static components = {Game};

    setup() {
        const gameStore = useState(new GameStore());
        // Add store to environment
        useSubEnv({ gameStore });
    }
}
