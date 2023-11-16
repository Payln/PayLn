import { writable } from 'svelte/store';

export const signupResult = writable('');
export const otp = writable('');
export const pageLoading = writable(true);
export const errors = writable('');
export const token = writable('');
