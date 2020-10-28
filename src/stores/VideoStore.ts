import { writable } from 'svelte/store';
import type { YouTubeSearchResponseItem } from '../lib/YouTubeInterfaces';

let defaultVideo: YouTubeSearchResponseItem = null;

export const video = writable(defaultVideo);