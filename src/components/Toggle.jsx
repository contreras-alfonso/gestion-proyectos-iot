import { useState } from 'react'
import { Switch } from '@headlessui/react'
import useDispositivos from '../hooks/useDispositivos'
import { toast } from 'react-toastify';

export const Toggle = ({enabled,setEnabled,id}) => { 

  const {actualizarEstadoDispositivo} = useDispositivos();

  const handleSubmit = async () => {
    const data = await actualizarEstadoDispositivo({id});
    //TODO
    toast.success(data.msg);
  }

  return (
    <Switch
      onClick={handleSubmit}
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-emerald-500' : 'bg-emerald-100'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
      <span className="sr-only">Use setting</span>
      <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  )
}
