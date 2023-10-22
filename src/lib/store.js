import { writable } from 'svelte/store';

export const signupResult = writable('');
export const otp = writable('');
export const pageLoading = writable(true);
export const error = writable('');
