/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import { Component, useState } from "@odoo/owl";

import { Button } from "../button/button";


export class Start extends Component {
  static template = "bt_find_it.Start";
  static components = { Button };
  static props = {
    startPlaying: {
      type: Function,
    },
  };

  setup() {
    this.state = useState({
      userName: '',
    });
  }

  onClickStart() {
    this.props.startPlaying(this.state.userName);
  }
}
