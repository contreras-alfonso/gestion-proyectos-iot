import { useContext } from 'react'
import PlantasContext from '../context/PlantasProvider';

export const usePlantas = () => {
    return useContext(PlantasContext);
}

export default usePlantas;