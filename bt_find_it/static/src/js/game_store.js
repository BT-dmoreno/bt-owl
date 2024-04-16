/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {useEnv, useState} from "@odoo/owl";


export class GameStore {
    static nextId = 0;

    constructor() {
        this.currentGame = null;
        this.games = [];
    }

    startGame(player) {
        const id = GameStore.nextId++;
        this.currentGame = {id, player: player, points: 0};
        this.games.push(this.currentGame);
    }

    savePoints(points) {
        this.currentGame.points = points;
    }
}

export function useGameStore() {
    const env = useEnv();
    return useState(env.gameStore);
}
