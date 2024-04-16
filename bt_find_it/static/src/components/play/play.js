/** @odoo-module **/

/*
 * Copyright (c) 2024 braintec AG (https://braintec.com)
 * All Rights Reserved
 * Licensed under the Odoo Proprietary License v1.0 (OPL).
 * See LICENSE file for full licensing details.
*/

import {Component, useState} from "@odoo/owl";

import {Button} from "../button/button";
import {Emoji} from "../emoji/emoji";
import {Timer} from "../timer/timer";
import {useGameStore} from "../../js/game_store";


const EMOJIS = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐️', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '😮‍', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '😶‍', '🥴', '😵‍', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '🥱', '😤', '😡', '😠', '🤬'];


export class Play extends Component {
    static template = "bt_find_it.Play";
    static props = {
        stopPlaying: Function,
    };
    static components = {Button, Emoji, Timer};

    setup() {
        this.allEmojis = EMOJIS.sort(() => Math.random() - 0.5);
        this.nextEmojiId = 0;
        this.findEmojiIndex = 0;
        this.findEmojiOcurrenceIndices = [];

        this.state = useState({
            findEmoji: null,
            emojis: [],
            lives: 3,
            points: 0,
        });

        this.state.emojis = this.shuffleEmojis();
        this.store = useGameStore();
    }

    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    shuffleEmojis() {
        this.state.findEmoji = this.allEmojis[this.findEmojiIndex];
        this.state.emojis = [];

        const emojis = [];

        // Reset the previous positions where the emojis to find were located
        this.findEmojiOcurrenceIndices = [];

        for (let i = 0; i < 80; ++i) {
            const emoji = this.allEmojis[this.randomInteger(0, this.allEmojis.length - 1)]
            if (emoji === this.state.findEmoji) {
                this.findEmojiOcurrenceIndices.push(i);
            }
            emojis.push({codepoint: emoji, id: this.emojiNextId()});
        }

        if (!this.findEmojiOcurrenceIndices.length) {
            // If emoji to find is not included among the rest of emojis, include it once
            const i = this.randomInteger(0, emojis.length - 1)
            emojis.splice(i, 1, {codepoint: this.state.findEmoji, id: this.emojiNextId()});
            this.findEmojiOcurrenceIndices.push(i);
        }
        // Increase find emoji index for the next shuffle
        this.findEmojiIndex++;
        return emojis;
    }

    onEmojiClick(i) {
        if (this.findEmojiOcurrenceIndices.includes(i)) {
            this.state.points++;
            // Save it to the store too
            this.store.savePoints(this.state.points);
            this.findEmojiOcurrenceIndices.splice(this.findEmojiOcurrenceIndices.indexOf(i), 1);
            if (!this.findEmojiOcurrenceIndices.length) {
                this.state.emojis = this.shuffleEmojis();
            }
        } else {
            this.state.lives--;
            if (this.state.lives < 1) {
                this.props.stopPlaying();
            }
        }
    }

    skipEmoji() {
        this.state.emojis = this.shuffleEmojis();
    }

    emojiNextId() {
        this.nextEmojiId++;
        return this.nextEmojiId;
    }
}
