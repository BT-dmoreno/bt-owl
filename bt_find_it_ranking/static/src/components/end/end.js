/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {useState} from "@odoo/owl";
import { patch } from "@web/core/utils/patch";

import { End } from "@bt_find_it/components/end/end";
import { Ranking } from "../ranking/ranking";


patch(End, {
    components: {
        ...End.components,
        Ranking,
    },
});

patch(End.prototype, {
    setup() {
        super.setup(...arguments);
        this.state = useState({
            ranking: [],
        });
        this.getRanking();
    },

    getRanking() {
        this.state.ranking = this.env.gameStore.games.sort((a, b) => a.points < b.points ? 1 : a.points > b.points ? -1 : 0).slice(0, 5)
    }
});
