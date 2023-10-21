import { writable } from 'svelte/store';

export const passwordMatch = writable('');
export const emailCheck = writable('');
export const submitting = writable(false);
