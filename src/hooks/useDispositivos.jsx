import { useContext } from 'react'
import DispositivosContext from '../context/DispositivosProvider';

export const useDispositivos = () => {
    return useContext(DispositivosContext);
}

export default useDispositivos;