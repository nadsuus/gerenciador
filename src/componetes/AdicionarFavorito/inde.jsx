import React, { useState } from 'react'

const AdicionarFavorito = () => {

    const[nomeDoSite, setnomeDoSite] = useState("");
    const [urlDoSite, seturnDoSite] = useState("");

    let favoritos =[];

    function salvarFavoritos() { 
        favoritos = [...favoritos, {nomeSite, urlDoSite}];
        localStorage
    }
  return (
    <div>inde</div>
  )
}

export default inde