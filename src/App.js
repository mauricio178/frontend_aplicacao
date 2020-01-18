// Toda vez que for usar o HTML dentro do JavaScript Devemos importar o "React"

import React from 'react';

import './global.css';

// Componentes: É uma função que retonar um conteúdo HTML, ou seja, um Bloco isolado de HTML, CSS e JS
// o qual não intefere no restante da aplicação.

// Estado: Informações mantidas pelo componente. Obs: conceito de IMUTABILIDADE.
 
// Propriedade:  mais conhecido como Atributo, são os atributos ou propriedades dos Componentes.
//ou informações que um componente PAI passa para um componente filho.

function App() {
  return(
    <div id="app">
      <aside>
 
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
