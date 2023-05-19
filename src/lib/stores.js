import { writable } from 'svelte/store';

export const isLogin = writable(localStorage.getItem('session_id') !== null);