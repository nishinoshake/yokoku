import { writable } from 'svelte/store'

// state
export const isAboutOpen = writable(false)

// mutation
export const openAbout = () => isAboutOpen.set(true)
export const closeAbout = () => isAboutOpen.set(false)
