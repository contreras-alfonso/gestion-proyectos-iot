import { useState } from 'react'
import { Switch } from '@headlessui/react'

export const Toggle = ({enabled,setEnabled}) => {
  return (
    <div className="py-3 px-5 rounded-lg bg-white shadow flex items-end justify-end">
        <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-rose-900' : 'bg-rose-100'}
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
        >
        <span className="sr-only">Use setting</span>
        <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
        </Switch>
    </div>
  )
}