import { enhance } from '@grrr/hansel'

import { enhancer as closeWithEscape } from './modules/close-with-escape'
import {
  toggleTriggerEnhancer as toggleTrigger,
  toggleTargetEnhancer as toggleTarget,
} from './modules/toggle'

enhance(document.documentElement, {
  closeWithEscape,
  toggleTarget,
  toggleTrigger,
})
