import {KULCS, LISTA} from "./adatok.js";
import listaMegjelenit from "./megjelenit.js";

$(function() {
    const szuloElem = $(".tartalom");
    new listaMegjelenit(KULCS, LISTA, szuloElem);

});