/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import { Component } from "@odoo/owl";


export class Start extends Component {
  // TODO 2: We're missing some static properties here, could you please add them all?
  // https://github.com/odoo/owl/blob/master/doc/reference/component.md#static-properties

  // -->> Add missing static properties

  // -->> Check the one here below (props) if it's correct or no, and make the necesary changes
  static props = {
    startPlaying: {
      type: String,
    },
  };

  // TODO 3: In the setup method, we're declaring "this.state", but it's in fact a fake state because it's not
  //  reactive, at the moment changing its value doesn't  change anything visually
  // https://github.com/odoo/owl/blob/master/doc/reference/reactivity.md#usestate

  // -->> Make this.state to become reactive
  setup() {
    this.state = {
      userName: '',
    }
  }

  onClickStart() {
    // TODO 4: The Start component, has a required prop called "startPlaying", this is passed from the Game
    //  component. This function is a so called callback, that is, a function that once called is going to be
    //  executed in an ancestor component (Game component), and not in the one we're now.

    // -->> Execute method startPlaying and pass as argument the name of user just entered from the input
  }
}
