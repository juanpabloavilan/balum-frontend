import {Donante} from "./Donante"
import { Proyecto } from "./Proyecto"

export interface Donacion {
    idDonacion:number,
    idDonante: Donante,
    idProyecto: Proyecto,
    valor:number

}