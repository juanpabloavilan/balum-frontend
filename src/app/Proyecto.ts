import {Emprendedor} from "./Emprendedor"
export interface Proyecto{
    idproyecto:number;
    descripcion:string;
    valorObjetivo:number;
    fechaInicio:string;
    fechaFinal:string;
    tipoProyecto: string;
    responsable: Emprendedor;
    estado:string
}