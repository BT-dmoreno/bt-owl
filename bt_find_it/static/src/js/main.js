/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

// TODO 1: Firstable we need to import some important stuff

// -->> Import "templates" declared at "web/static/src/core/assets.js"

// -->> Import "mount" and "whenReady" declared at "web/static/lib/owl/odoo_module.js"

// -->> Import "Layout" located at "bt_find_it/static/src/components/layout/layout.js"



// This is mounting the WebClient component when the document.body is ready
whenReady(() => {
    mount(Layout, document.body, {
        templates,
        dev: true,
        name: "Find It Game",
    });
});
