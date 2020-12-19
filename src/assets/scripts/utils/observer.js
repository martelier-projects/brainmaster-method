// Minimal setup for a Pub-Sub Observer.
const subscriptions = {}

/**
 * Subscribe to observer events by subject.
 */
export const subscribe = (subject, fn) => {
  if (!subscriptions[subject]) {
    subscriptions[subject] = []
  }

  subscriptions[subject].push(fn)
}

/**
 * Execute functions that match the subject and communicate the payload.
 */
export const publish = (subject, payload) => {
  // Prevent looping over non existing subscription.
  if (!subscriptions[subject]) {
    return
  }

  subscriptions[subject].forEach(fn => fn(payload))
}

/**
 * Remove subscribed subject-function from the subscriptions.
 * Filtering done based on function body as string value.
 */
export const unsubscribe = (subject, fn) => {
  subscriptions[subject] = subscriptions[subject].filter(
    existingFn => existingFn.toString() !== fn.toString()
  )
}
