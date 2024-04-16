/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {mount, whenReady} from "@odoo/owl";
import {Layout} from "../components/layout/layout";
import {templates} from "@web/core/assets";


// Mount the WebClient component when the document.body is ready
whenReady(() => {
    mount(Layout, document.body, {
        templates,
        dev: true,
        name: "Find It Game",
    });
});
