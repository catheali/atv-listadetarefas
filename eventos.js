function atualizarQuantidade(){
    document.getElementById('numeros').innerHTML = `(${buscar().length})`;
}
atualizarQuantidade()
function addTarefa(){
    event.preventDefault();
    let titulo = input_nova_tarefa.value;
    let prioridade = input_prioridade.value;
    titulo = titulo.toLowerCase();
    
    if (titulo.trim() === ''){
        alert('Tarefa invalida !')
    
        return;
        
    }
    if (buscar().some(tarefa => titulo === tarefa.titulo) === true){
        alert('Essa tarefa já existe!')
        return;
     }

     document.getElementById('input_nova_tarefa').value = '';  

    
    
    salvar(titulo, prioridade)
    atualizarQuantidade();   
    mostrarTarefas();   
}
function mostrarTarefas(){
    let conteudo =  buscar().map(function (tarefa) {
        return `
        <div>
            <input type="checkbox">
             ${tarefa.titulo[0].toUpperCase()+tarefa.titulo.substring([1])} 
             <span class="badge ${tarefa.prioridade === 'Baixa' && 'bg-primary'}
              ${tarefa.prioridade === 'Media' && 'bg-warning'} 
              ${tarefa.prioridade === 'Alta' && 'bg-danger'}">
             ${tarefa.prioridade}
             </span>
             </input>
        </div>
        `;
    });
    document.getElementById('tarefas').innerHTML = conteudo.sort().join('');
   
}
mostrarTarefas();
