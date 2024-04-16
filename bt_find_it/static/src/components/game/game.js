/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {Component, useState} from "@odoo/owl";

import {Play} from "../play/play";
import {Timer} from "../timer/timer";
import {Start} from "../start/start";
import {End} from "../end/end";
import {useGameStore} from "../../js/game_store";


export class Game extends Component {
    static template = "bt_find_it.Game";
    static components = {Play, Timer, Start, End};

    setup() {
        this.state = useState({});
        this.initGame();
        this.store = useGameStore();
    }

    startPlaying(player) {
        this.store.startGame(player);
        this.state.Component = Play;
        this.state.props = {
            stopPlaying: this.stopPlaying.bind(this),
        };
    }

    stopPlaying() {
        this.state.Component = End;
        this.state.props = {
            initGame: this.initGame.bind(this),
        };
    }

    initGame() {
        this.state.Component = Start;
        this.state.props = {
            startPlaying: this.startPlaying.bind(this),
        }
    }
}
