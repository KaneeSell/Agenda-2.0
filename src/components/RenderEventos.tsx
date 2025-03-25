import { useNavigate } from "react-router"
import { mudarSituacao, pegarDados } from "../hooks/localStorageConexao"
import $ from 'jquery'
import { useState } from "react"

interface RenderEventosProps{
    nome: string
    situacao: 'Aberto' | 'Finalizado' | 'Expirado'
    data?: string
    recorrencia?: 'Diária' | 'Semanal' | 'Mensal' | 'Não Repete'
    prioridade: 'Baixa' | 'Média' | 'Alta' | 'Urgente'
    descricao: string
    id?: string
}
export default function RenderEventos(){
    const navegar = useNavigate()
    const [situacao, setSituacao] = useState<'Aberto' | 'Finalizado' | 'Expirado' | ''>('')
    const [prioridade, setPrioridade] = useState<'Baixa' | 'Média' | 'Alta' | 'Urgente' | ''>('')
    const [Pesquisa, setPesquisa] = useState('')
    const eventos = pegarDados()
    const eventosFiltrados = eventos.filter((evento: RenderEventosProps) => {
        return (
            (situacao === "" || evento.situacao === situacao) &&
            (prioridade === "" || evento.prioridade === prioridade) &&
            (Pesquisa.trim() === "" || 
             (evento.nome && evento.nome.toLowerCase().includes(Pesquisa.toLowerCase())) ||
             (evento.id && String(evento.id).includes(Pesquisa)))
        );
    });
    function btnAlterarSituacao(id:string, novaSituação: 'Aberto' | 'Finalizado'){
        mudarSituacao(id, novaSituação)
        window.location.reload()
    }
    return (
        <div className="pt-10 flex flex-col w-full items-center gap-5">
            <div className="flex flex-col relative">
                <label className="absolute -translate-3.5 left-5 bg-white"
                htmlFor="pesquisar">Pesquisar:</label>
                <input className="border-1 rounded-md py-2 px-2 w-full" 
                type="text" id="pesquisar" required value={Pesquisa} onChange={(e)=>setPesquisa(e.target.value)}
                placeholder="Pesquisar..."/>
            </div>
            <div className="flex flex-row w-full items-center gap-4 justify-center flex-wrap">
                <div className="flex flex-col w-50 relative">
                    <label className="absolute -translate-3.5 left-4 bg-white"
                    htmlFor="situacao">Filtro Situação:</label>
                    <select className="border-1 py-2 rounded-md px-2 w-full"
                    name="situacao" id="situacao" value={situacao} 
                    onChange={(e)=>setSituacao(e.target.value as 'Aberto' | 'Finalizado' | 'Expirado' | '')}>
                        <option value="">Mostrar Todos</option>
                        <option value="Aberto">Somente Abertos</option>
                        <option value="Expirado">Somente Expirados</option>
                        <option value="Finalizado">Somente Finalizados</option>
                    </select>
                </div>
                <div className="flex flex-col w-50 relative">
                    <label className="absolute -translate-3.5 left-4 bg-white"
                    htmlFor="prioridade">Filtro Prioridade:</label>
                    <select className="border-1 py-2 rounded-md px-2 w-full"
                    name="prioridade" id="prioridade" value={prioridade} 
                    onChange={(e)=>setPrioridade(e.target.value as 'Baixa' | 'Média' | 'Alta' | 'Urgente' | '')}>
                        <option value="">Mostrar Todos</option>
                        <option value="Baixa">Somente Baixa</option>
                        <option value="Média">Somente Média</option>
                        <option value="Alta">Somente Alta</option>
                        <option value="Urgente">Somente Urgente</option>
                    </select>
                </div>
            </div>
            <div className="p-10 flex flex-row flex-wrap gap-2 w-full max-w-400 justify-center">
                {eventosFiltrados.length > 0 ? eventosFiltrados.map((evento: RenderEventosProps) => (

                    <div key={evento.id} className="flex flex-col w-160 bg-gray-100 border-1 rounded-lg">
                        <div className="flex flex-row justify-between px-2 rounded-t-lg py-1 w-full bg-gray-200 border-b-1">
                            <span className="font-medium">
                                ID: {evento.id}
                            </span>
                            <span className="text-green-500 font-semibold">
                                {evento.situacao}
                            </span>
                            <div>
                                <button id={`dropdownButton${evento.id}`} onClick={()=>{
                                    $(`#dropdownCard${evento.id}`).toggle(400)
                                }} onBlur={()=>{
                                    setTimeout(()=>$(`#dropdownCard${evento.id}`).hide(400))
                                }}
                                data-dropdown-toggle={`dropdownCard${evento.id}`} 
                                className="text-gray-500 hover:bg-gray-400 px-2 py-1 rounded-2xl" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                    </svg>
                                </button>
                                <div id={`dropdownCard${evento.id}`}  className="z-2 absolute hidden text-gray-800 list-none bg-gray-500 rounded-lg shadow-sm w-44">
                                    <ul className="py-2" aria-labelledby="dropdownButton">
                                        <li key={`editar-${evento.id}`} className="text-gray-100 ps-4 font-semibold hover:bg-gray-400">
                                            <button onClick={()=>navegar(`/editar-evento/${evento.id}`)}>
                                                Editar
                                            </button>
                                        </li>
                                        {evento.situacao === 'Finalizado'? (
                                            <li key={`Abrir-${evento.id}`} className="text-green-400 ps-4 font-semibold hover:bg-gray-400">
                                            <button onClick={()=>btnAlterarSituacao(evento.id!, 'Aberto')}>
                                                Abrir
                                            </button>
                                        </li>
                                        ):(
                                            <li key={`Finalizar-${evento.id}`} className="text-blue-400 ps-4 font-semibold hover:bg-gray-400">
                                            <button onClick={()=>btnAlterarSituacao(evento.id!, 'Finalizado')}>
                                                Finalizar
                                            </button>
                                        </li>
                                        )}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 py-2 w-full flex text-center">
                            <span className="font-bold text-2xl w-full text-blue-400">
                                {evento.nome}</span>
                        </div>
                        {evento.descricao && <div className="px-5 border-t-1 py-2 h-33 overflow-y-scroll">
                            <span>
                                {evento.descricao}
                            </span>
                        </div>}
                        <div className="p-5 rounded-b-lg bg-gray-200 flex gap-2 flex-wrap justify-between border-t-1">
                            <span>Recorrencia: {evento.recorrencia}</span>
                            {evento.data && <span>
                                Data: {evento.data}
                            </span>}
                        </div>
                        <div className={`
                            p-2 rounded-b-lg flex justify-center border-t-1 
                            ${evento.prioridade === 'Baixa' ? 'bg-green-200':'' }
                            ${evento.prioridade === 'Média' ? 'bg-blue-200':'' }
                            ${evento.prioridade === 'Alta' ? 'bg-red-300':'' }
                            ${evento.prioridade === 'Urgente' ? 'bg-red-400':'' }
                            `}>
                            <span className={`
                            ${evento.prioridade === 'Baixa' ? 'text-gray-700 font-light':'' }
                            ${evento.prioridade === 'Média' ? 'text-gray-700 font-medium':'' }
                            ${evento.prioridade === 'Alta' ? 'text-gray-700 font-semibold':'' }
                            ${evento.prioridade === 'Urgente' ? 'text-gray-100 font-bold':'' }
                                `}>
                                {evento.prioridade}
                            </span>
                        </div>
                    </div>
                )):(<></>)}
            </div>
        </div>
    )
}