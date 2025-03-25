import { FormEvent, useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useNavigate, useParams } from "react-router";
import { buscarID, updateEvento } from "../hooks/localStorageConexao";

export default function EditarEvento() {
    const navegar = useNavigate()
    const { id } = useParams()
    const evento = buscarID(Number(id)) ?? validarEvento()
    const [nome, setNome] = useState(evento.nome)
    const [situacao, setSituacao] = useState<'Aberto' | 'Finalizado' | 'Expirado'>(evento.situacao)
    const [data, setData] = useState(evento.data)
    const [recorrencia, setRecorrencia] = useState<'Diária' | 'Semanal' | 'Mensal' | 'Não Repete'>(evento.recorrencia)
    const [prioridade, setPrioridade] = useState<'Baixa' | 'Média' | 'Alta' | 'Urgente'>(evento.prioridade)
    const [descricao, setDescricao] = useState(evento.descricao)
    
    function validarEvento(){
        if(evento === false){
            navegar('/novo-evento')
        }
    }
    useEffect(()=>{
    },[])
    
    function salvarRetornar(e:FormEvent){
        e.preventDefault()
        const eventoUp = { id: id, nome: nome, situacao: situacao, data: data, 
            recorrencia: recorrencia, prioridade: prioridade,
            descricao: descricao }
        updateEvento(eventoUp)
        navegar('/agenda')
    }
  return (
    <Menu>
      <Header titulo="Editar Evento"/>
        <form className="flex flex-col w-full items-center" onSubmit={(e)=>salvarRetornar(e)}>
            <div className="flex flex-row justify-end items-center w-full max-w-200 gap-3">
                <button onClick={()=>navegar('/agenda')}
                className="border-1 py-1 px-3 rounded-md text-gray-100 font-medium text-center bg-gradient-to-r from-gray-600 to-gray-400 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 transition-colors duration-400"
                >Cancelar</button>
                <button className="border-1 py-1 px-3 rounded-md text-gray-100 font-medium text-center bg-gradient-to-r from-green-600 to-green-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 transition-colors duration-400"
                type="submit"
                >Salvar</button>
            </div>
            <div className="w-full max-w-200 flex my-4 gap-1 relative">
                <div className="w-1/2 flex flex-col">
                    <label className="absolute -translate-3.5 left-5 bg-white"
                    htmlFor="nome"><span className="text-red-500">*</span>Nome do Evento:</label>
                    <input className="border-1 rounded-md py-2 px-2 w-full" 
                    type="text" id="nome" required value={nome} onChange={(e)=>setNome(e.target.value)}
                    placeholder="Nome..."/>
                </div>
                <div className="w-1/2 flex flex-col relative">
                    <label className="absolute -translate-3.5 left-5 bg-white"
                    htmlFor="situacao">Situação:</label>
                    <select className="border-1 py-2 rounded-md px-2 w-full"
                    name="situacao" id="situacao" value={situacao} onChange={(e)=>setSituacao(e.target.value as 'Aberto' | 'Finalizado' | 'Expirado')}>
                        <option value="Aberto">Aberto</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                </div>
            </div>
            <div className="w-full max-w-200 flex mb-4 gap-1 relative">
                <div className="w-1/3 flex flex-col">
                    <label className="absolute -translate-3.5 left-5 bg-white"
                    htmlFor="data">Data(opcional):</label>
                    <input className="border-1 rounded-md py-2 px-2 w-full"
                    type="date" name="data" id="data" value={data} onChange={(e)=>setData(e.target.value)}/>
                </div>
                <div className="w-1/3 flex flex-col relative">
                    <label className="absolute -translate-3.5 left-5 bg-white"
                    htmlFor="recorrencia">Recorrencia:</label>
                    <select className="border-1 py-2 px-2 rounded-md w-full"
                    name="recorrencia" id="recorrencia" value={recorrencia} onChange={(e)=>setRecorrencia(e.target.value as 'Diária' | 'Semanal' | 'Mensal' | 'Não Repete')}>
                        <option value="Não Repete">Não Repete</option>
                        <hr/>
                        <option value="Diária">Diária</option>
                        <option value="Semanal">Semanal</option>
                        <option value="Mensal">Mensal</option>
                    </select>
                </div>
                <div className="w-1/3 flex flex-col relative">
                    <label className="absolute -translate-3.5 left-5 bg-white"
                    htmlFor="prioridade">Prioridade:</label>
                    <select className="border-1 py-2 px-2 rounded-md w-full"
                    name="prioridade" id="prioridade" value={prioridade} onChange={(e)=>setPrioridade(e.target.value as 'Baixa' | 'Média' | 'Alta' | 'Urgente')}>
                        <option value="Baixa">Baixa</option>
                        <option value="Média">Média</option>
                        <option value="Alta">Alta</option>
                        <option value="Urgente">Urgente</option>
                    </select>
                </div>
            </div>
            <div className="w-full max-w-200 flex flex-col relative">
                <label className="absolute -translate-3.5 left-5 bg-white"
                htmlFor="descricao">Descrição:</label>
                <textarea className={`block px-2.5 pb-2.5 pt-4 w-full
                border-1 rounded-md
                `}
                name="descricao" id="descricao" cols={30} rows={10}
                value={descricao} onChange={(e)=>setDescricao(e.target.value)}
                ></textarea>
            </div>
        </form>
    </Menu>
  )
}
