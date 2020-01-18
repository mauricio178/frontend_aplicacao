// Toda vez que for usar o HTML dentro do JavaScript Devemos importar o "React"

import React, { useState }from 'react';

// Componentes: É uma função que retonar um conteúdo HTML, ou seja, um Bloco isolado de HTML, CSS e JS
// o qual não intefere no restante da aplicação.

// Estado: Informações mantidas pelo componente. Obs: conceito de IMUTABILIDADE.
 
// Propriedade:  mais conhecido como Atributo, são os atributos ou propriedades dos Componentes.
//ou informações que um componente PAI passa para um componente filho.

function App() {
  const [contador, setContador] = useState (0);
    function incrementar(){
      setContador(contador+1);
    }
      return (
      <>
        <h1>Contadores : {contador} </h1>
        <button onClick={incrementar}>Adicionar mais 1</button>
      </>
      );
    
}

export default App;
