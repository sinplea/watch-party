import { writable } from 'svelte/store';

import type { RoomInfo } from '../lib/Interfaces/RoomInterfaces';

let defaultRoomInfo: RoomInfo = {
    code: 'ZZZZZ',
    users: [],
}

export const roomStore = writable(defaultRoomInfo);