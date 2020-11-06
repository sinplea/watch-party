import type { Sender } from './ChatInterfaces';

export interface RoomInfo {
    code: string,
    users: Array<Sender>,
};