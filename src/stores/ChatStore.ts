/**
 * src/stores/ChatStore.js
 * 
 * Handles any global storage needs for the main Chat Panel component.
 * Currently creates Svelte store(s) for managing:
 * 
 * Global Sender (see src/stories/chat/Interfaces)
 */
import { writable } from 'svelte/store';
import type { Sender } from '../lib/ChatInterfaces';

// Default Values

let defaultSender: Sender = {
    name: 'Default',
    color: '#2dcc5d',
};

// Custom Stores
// 
// NOTE: The functions changeName & changeColor are maybe a bit extrenuous
// becuase I could just use the native update function inside components that use the store,
// but I'm trying to learn more about custom stores in this example as that seems important
// based on work done with libraries like Vuex
function createSender() {
    const { subscribe, set, update } = writable(defaultSender);

    return {
        subscribe,
        set,
        changeName: (name: string): void => {
            update((sender: Sender) => ({...sender, name }));
        },
        changeColor: (color: string): void => {
            update((sender: Sender) => ({ ...sender, color }));
        },
    };
};

// Store exports
export const sender = createSender();