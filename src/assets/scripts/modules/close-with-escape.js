import { publish, subscribe } from '../utils/observer'

const ESC_KEY_CODE = 27

// The internal state is necessary because the toggle module
// doesn't send any data/state at the moment.
let isOpen = false
let subject = ''

/**
 * Called by event listener.
 * Publish subject if the esc key is pressed.
 */
const handleKeyDown = event => {
  if (event.keyCode !== ESC_KEY_CODE) {
    return
  }

  publish(subject)
}

/**
 * Called by observer.
 * Add/remove event listener based on internal module state.
 */
const handleToggle = data => {
  isOpen = !isOpen

  if (isOpen) {
    window.addEventListener('keydown', handleKeyDown)
  } else {
    window.removeEventListener('keydown', handleKeyDown)
  }
}

/**
 * Subscribe to the observer.
 * This module is a nice enhancement for the toggle module if you want to close
 * elements with the esc key.
 */
export const enhancer = element => {
  subject = element.getAttribute('data-toggle-subject')
  subscribe(subject, handleToggle)
}
