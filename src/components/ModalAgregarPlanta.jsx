import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export const ModalAGregarPlanta = () => {
  let [isOpen, setIsOpen] = useState(true)
  const [imagenCheck, setImagenCheck] = useState(0);
  const galeriaImagenes = [
    {
      imgPath: '/images/planta1.jpeg',
      id: "planta1",
      num: 1,
    },
    {
      imgPath: '/images/planta2.jpeg',
      id: "planta2",
      num: 2,
    },
    {
      imgPath: '/images/planta3.jpeg',
      id: "planta3",
      num: 3,
    },
    {
      imgPath: '/images/planta4.jpeg',
      id: "planta4",
      num: 4,
    },
    {
      imgPath: '/images/planta5.jpeg',
      id: "planta5",
      num: 5,
    },
    
  ]

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[560px] transform overflow-hidden rounded-lg bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="leading-6 text-gray-900 font-black uppercase text-center"
                  >
                    Nueva Planta
                  </Dialog.Title>
                  <div className="my-7 w-full flex flex-col gap-[10px]">
                    <span className='text-xs uppercase font-semibold'>Nombre</span>
                    <input type="text" placeholder='' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
                    <span className='text-xs uppercase font-semibold'>Especie</span>
                    <input type="text" placeholder='' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
                    <span className='text-xs uppercase font-semibold'>Temperatura °C</span>
                    <input type="text" placeholder='' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
                    <span className='text-xs uppercase font-semibold'>Humedad del suelo</span>
                    <input type="text" placeholder='' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
                    <span className='text-xs uppercase font-semibold'>Descripcion</span>
                    <textarea name="" id="" cols="30" rows="5" className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none resize-none'></textarea>
                    <span className='text-xs uppercase font-semibold'>Icono</span>
                    <div className='flex gap-3 mx-auto'>
                      {galeriaImagenes.map(e=>(
                        <img onClick={()=>{setImagenCheck(e.num)}} key={e.id} className={`w-20 shadow px-4 py-2 rounded-lg cursor-pointer ${e.num === imagenCheck && 'border border-emerald-500'}`}src={e.imgPath} alt={e.id} />
                      ))}
                     
                    </div>
                  </div>

                  <div className="mt-4 flex items-center">
                    <button
                      type="button"
                      className="w-full rounded-full border border-transparent bg-emerald-500 px-4 py-3 text-sm font-bold uppercase text-white hover:bg-emerald-600 duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Agregar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
