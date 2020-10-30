import { writable } from 'svelte/store';
import type { YouTubeSearchResponseItem } from '../lib/Interfaces/YouTubeInterfaces';

let defaultVideo: YouTubeSearchResponseItem = null;

export const videoStore = writable(defaultVideo);