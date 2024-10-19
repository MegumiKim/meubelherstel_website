import { writable } from 'svelte/store';

// Create a writable store to hold the scroll position
export const scrollY = writable(0);
