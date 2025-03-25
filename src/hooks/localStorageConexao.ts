import Eventos from "./Eventos";

export function pegarDados(){
    const tbAgenda = localStorage.getItem('tbAgenda');
    return JSON.parse(tbAgenda !== null ? tbAgenda : '[]');
}
export function salvarEvento(props: Eventos){
    const eventos = pegarDados()
    const eventoId = props.id? props.id : eventos.length + 1
    const eventosAtualizado = eventos
    const eventoInput = { id: eventoId, nome: props.nome, situacao: props.situacao, data: props.data, 
        recorrencia: props.recorrencia, prioridade: props.prioridade,
        descricao: props.descricao }
        eventosAtualizado.push(eventoInput)
    localStorage.setItem('tbAgenda', JSON.stringify(eventosAtualizado))
}
export function mudarSituacao(id:string, novaSituacao: 'Aberto'| 'Finalizado'){
    const eventos = pegarDados()
    const eventosAtualizado = eventos.map((evento : Eventos) =>
        evento.id === id ? { ...evento, situacao: novaSituacao } : evento
    )
    localStorage.setItem('tbAgenda', JSON.stringify(eventosAtualizado))
}
export function updateEvento(eventoNovo: Eventos) {
    const eventos = pegarDados();
    const eventosAtualizado = []
    for(let i = 1; i <= eventos.length; i++){
        if(i === Number(eventoNovo.id)){
            eventosAtualizado.push(eventoNovo)
        }else{
            eventosAtualizado.push(eventos[i-1])
        }
    }
    localStorage.setItem("tbAgenda", JSON.stringify(eventosAtualizado));
}
export function buscarID(id: number) {
    if (!id) return false; // Retorna false se o id for indefinido

    const eventos = pegarDados();
    const filtradoID = eventos.filter((evento: Eventos) => Number(evento.id) === id);

    return filtradoID.length === 1 ? filtradoID[0] : false;
}

export function buscarAbertos(){
    const eventos = pegarDados()
    const filtradoAbertos = eventos.filter((evento : Eventos) =>
        evento.situacao === 'Aberto'
    )
    return filtradoAbertos
}
export function buscarFinalizados(){
    const eventos = pegarDados()
    const filtradoFinalizados = eventos.filter((evento : Eventos) =>
        evento.situacao === 'Finalizado'
    )
    return filtradoFinalizados
}
export function buscarExpirado(){
    const eventos = pegarDados()
    const filtradoExpirado = eventos.filter((evento : Eventos) =>
        evento.situacao === 'Expirado'
    )
    return filtradoExpirado
}