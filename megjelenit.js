class listaMegjelenit {
    constructor(KULCS, LISTA, szuloElem){
        this.KULCS = KULCS;
        this.LISTA = LISTA; 
        this.szuloElem = szuloElem;
        let txt = this.htmlOsszeallit(KULCS, LISTA);
        this.szuloElem.html(txt);

    }

    htmlOsszeallit() {
        let txt = "";
    
        txt += `<table>`;
        txt += `<tr>`;
      
        for (const kulcs in this.KULCS[0]) {
            txt += `<th>${this.KULCS[0][kulcs]}</th>`;
          }
        
        txt += `</tr>`
          
        
    
        
        for (let index = 0; index < this.LISTA.length; index++) {
            txt += `<tr>`;
          for (const kulcs in this.LISTA[index]) {
            txt += `<td>${this.LISTA[index][kulcs]}</td>`;
          }
          txt += `</tr>`;

        }
        txt += `</table>`;
        return txt;
      }


}

export default listaMegjelenit;
