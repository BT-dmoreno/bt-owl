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

// TODO 7: We're going to add the ranking functionality to the existing End component.
// https://github.com/odoo/odoo/blob/17.0/addons/mail/static/src/discuss/typing/common/composer_patch.js

//  For this, we need to add the new Ranking component imported on top to the static  properties "components"
//  of the End component.

//  -->> patch here End component and add Ranking to its components static property


//  And later, we also need to extend the "setup" method of the End component, to add a state to track the
//  ranking values. The value we want to have in the state is the value of the gameStore.games (an array of
//  objects), but we want them to be sorted by points (from bigger to smaller) and just the first 5 entries.

// -->> patch here End component and add state containing first five sorted games
