import { enhance } from '@grrr/hansel'

import { enhancer as closeWithEscape } from './modules/close-with-escape'
import {
  toggleTriggerEnhancer as toggleTrigger,
  toggleTargetEnhancer as toggleTarget,
} from './modules/toggle'
import { enhancer as objectFit } from './modules/object-fit'

enhance(document.documentElement, {
  closeWithEscape,
  toggleTarget,
  toggleTrigger,
  objectFit,
})
