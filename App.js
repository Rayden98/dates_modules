import { datosCita, nuevaCita} from '../functions.js';
import { mascotaInput, propietarioInput, 
    telefonoInput, fechaInput, 
    horaInput, sintomasInput, 
    contenedorCitas, formulario, 
    heading} from '../selectors.js';

export default class App {
    
    constructor(){
        this.initApp();
    };

    initApp(){
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);
    
        // Formulary for new dates 
        formulario.addEventListener('submit', nuevaCita);    
    };
};