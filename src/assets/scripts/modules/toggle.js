import { publish, subscribe } from '../utils/observer'

const TOGGLE_ACTIVE_ATTR = 'data-toggle-active'

// @TODO: Add aria-pressed.
// Difficult for the filter nav because of separate open and close buttons!

/**
 * Show / Hide target element.
 */
const show = element => {
  element.setAttribute(TOGGLE_ACTIVE_ATTR, 'true')
}
const hide = element => {
  element.setAttribute(TOGGLE_ACTIVE_ATTR, 'false')
}

/**
 * Set trigger open / close state.
 */
const setOpen = element => {
  element.setAttribute('aria-expanded', 'true')
  element.setAttribute(TOGGLE_ACTIVE_ATTR, 'true')
}
const setClose = element => {
  element.setAttribute('aria-expanded', 'false')
  element.setAttribute(TOGGLE_ACTIVE_ATTR, 'false')
}

/**
 * Called by observer.
 * Show/hide target element based on current attr value.
 */
const handleToggleForTarget = (element, attr) => () => {
  const attrNotYetSet = !element.getAttribute(attr)
  const attrValueIsTrue = element.getAttribute(attr) === 'true'

  if (attrNotYetSet || attrValueIsTrue) {
    hide(element)
  } else {
    show(element)
  }
}

/**
 * Called by observer.
 * Update the state of the trigger element based on current attr value.
 */
const handleToggleForTrigger = element => () => {
  if (element.getAttribute('aria-expanded') === 'true') {
    setClose(element)
  } else {
    setOpen(element)
  }
}

/**
 * Called by event listener.
 * Publish event through observer.
 */
const handleClick = element => event => {
  event.preventDefault()
  publish(element.getAttribute('data-toggle-subject'))
}

export const toggleTriggerEnhancer = element => {
  // Set the default open/close state.
  if (element.getAttribute('data-toggle-initialize-closed')) {
    setClose(element)
  } else {
    setOpen(element)
  }

  // Subscribe to observer.
  subscribe(
    element.getAttribute('data-toggle-subject'),
    handleToggleForTrigger(element, TOGGLE_ACTIVE_ATTR)
  )

  // Add event listener to clicks.
  element.addEventListener('click', handleClick(element))
}

export const toggleTargetEnhancer = element => {
  // Set the default open/close state.
  if (element.getAttribute('data-toggle-initialize-closed')) {
    hide(element)
  } else {
    show(element)
  }

  // Subscribe to observer.
  subscribe(
    element.getAttribute('data-toggle-subject'),
    handleToggleForTarget(element, TOGGLE_ACTIVE_ATTR)
  )
}
