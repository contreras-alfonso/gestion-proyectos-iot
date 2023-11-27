import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { toast } from 'react-toastify';

export const ModalAGregarPlanta = ({imagenesPlantas,modalAgregarPlanta,setModalAgregarPlanta,agregarPlanta, agregarPlantaState}) => {
  const galeriaImagenes = imagenesPlantas;
  const [nombre,setNombre] = useState('');
  const [especie,setEspecie] = useState('');
  const [temperatura,setTemperatura] = useState('');
  const [humedadSuelo,setHumedadSuelo] = useState('');
  const [descripcion,setDescripcion] = useState('');
  const [imagenCheck, setImagenCheck] = useState('');
  const [pathImagen,setPathImagen] = useState('');

  
  const handleSubmit = async () => {
    if([nombre,especie,temperatura,humedadSuelo,descripcion,pathImagen].includes('')){
      //TODO
      toast.error('Todos los campos son obligatorios.');
      return;
    }
    const infPlanta = {
      nombre,
      especie,
      temperatura,
      humedad:humedadSuelo,
      descripcion,
      pathIcono:pathImagen,
    }

    const data = await agregarPlanta(infPlanta);
    if(data.status){
      //TODO:FALTA AGREGAR SWEET ALERT, EN EL CASO DE FALSE TAMBIEN
      agregarPlantaState(data.data);
      setModalAgregarPlanta(false);
      toast.success(data.msg);
    }else{
      toast.error(data.msg);
    }

  }

  const asignarImagenCheck = (e) => {
    setImagenCheck(e._id);
    setPathImagen(e.imgPath)
  }

  return (
    <>

      <Transition appear show={modalAgregarPlanta} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>{setModalAgregarPlanta(false)}}>
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
                    <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} type="text" placeholder='' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
                    <span className='text-xs uppercase font-semibold'>Especie</span>
                    <input value={especie} onChange={(e)=>{setEspecie(e.target.value)}} type="text" placeholder='' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
                    <span className='text-xs uppercase font-semibold'>Temperatura °C</span>
                    <input value={temperatura} onChange={(e)=>{setTemperatura(e.target.value)}} type="text" placeholder='' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
                    <span className='text-xs uppercase font-semibold'>Humedad del suelo</span>
                    <input value={humedadSuelo} onChange={(e)=>{setHumedadSuelo(e.target.value)}} type="text" placeholder='' className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none'/>
                    <span className='text-xs uppercase font-semibold'>Descripcion</span>
                    <textarea value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}} name="" id="" cols="30" rows="5" className='border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none resize-none'></textarea>
                    <span className='text-xs uppercase font-semibold'>Icono</span>
                    <div className='flex gap-3 mx-auto'>
                      { galeriaImagenes.map(e=>(
                        <img onClick={()=>{asignarImagenCheck(e)}} key={e._id} className={`w-20 shadow px-4 py-2 rounded-lg cursor-pointer ${e._id === imagenCheck && 'border border-emerald-500'}`} src={`${import.meta.env.VITE_RUTA_BACKEND}/${e.imgPath}`} alt={e.id} />
                      ))}
                     
                    </div>
                  </div>

                  <div className="mt-4 flex items-center">
                    <button
                      type="button"
                      className="w-full rounded-lg border border-transparent bg-emerald-500 px-4 py-3 text-sm font-medium uppercase text-white hover:bg-emerald-600 duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 tracking-wider"
                      onClick={handleSubmit}
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
