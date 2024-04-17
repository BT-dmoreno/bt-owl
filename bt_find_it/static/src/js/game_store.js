/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {useEnv, useState} from "@odoo/owl";


// TODO 6: Let's finish the store for the game (a place where to store data that can be shared across all
//  components)

// In its constructor we have two attributes:
//
// - currentGame: can be null initially but later will have an object with three keys, with this shape:
// {
//     id: int (unique),
//     player: string,
//     points: int
// }
//
// - games: this is an array of "currentGames", so an array of objects containing the three keys we
// mentioned before.

// We need to complete these two methods:
//
// - startGame(player): The argument player is just a string, the name of the player. This method just creates a
// new "currentGame" and push it inside the "games" attribute.
//
// - savePoints(points): Simply write the points to the "currentGame" points attribute.

export class GameStore {
    static nextId = 0;

    // -->> Declare the constructor and the attributes we need for this class

    startGame(player) {
        // -->> add some logic here
    }

    savePoints(points) {
        // -->> and here too
    }
}

export function useGameStore() {
    const env = useEnv();
    return useState(env.gameStore);
}
