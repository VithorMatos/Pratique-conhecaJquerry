$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        //add item
        const textoTarefa = $('#input-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<h2>${textoTarefa}</h2>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#input-tarefa').val('');
        $('h2').click(function(){
        //rasurar
            $(this).css('text-decoration', 'line-through'); 
        })
        //remover
        $('#remove').click(function(){
            $('ul').empty();
        })
    }) 
})