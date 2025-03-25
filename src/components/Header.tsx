import { FaArrowLeft } from "react-icons/fa"
import { LuCalendarPlus2 } from "react-icons/lu"
import { useNavigate } from "react-router"

interface HeaderProps{
    titulo: 'Início' | 'Agenda' | 'Configurações' | 'Perfil' | 'Suporte' | 'Novo Evento' | 'Editar Evento'
    subtitulo?: string
    botao?: 'Novo Evento'
}
export default function Header(props: HeaderProps) {
    const navegar = useNavigate()
    function botaoVoltar(){
        if(props.titulo === 'Novo Evento' || props.titulo === 'Editar Evento'){
            navegar('/agenda')
        } else{
            navegar('/')
        }
    }
    return (
        <>
            <div className="flex items-center gap-5 justify-between w-full flex-wrap">
                <div className="flex items-center gap-5 justify-start">
                    <button onClick={()=>botaoVoltar()}
                    className={`
                        text-blue-500 cursor-pointer hover:text-blue-600
                        `}>
                        <FaArrowLeft />
                    </button>
                    <span className="text-3xl text-blue-400 font-semibold">{props.titulo}</span>
                </div>
                {props.titulo == 'Agenda'?(<button
                className={`bg-gradient-to-r from-green-400 to-green-200 py-1
                    hover:bg-gradient-to-r hover:from-green-200 hover:to-green-400
                    transition-colors duration-400 px-3 rounded-md text-gray-100
                    border-1 font-medium cursor-pointer flex flex-row items-center gap-2
                    `} onClick={()=>navegar('/novo-evento')}>{props.botao}
                    <LuCalendarPlus2 size={'20px'}/>
                </button>):false}
            </div>
            <div className="flex flex-col items-start justify-center w-full">
            <br />
            <span className="text-blue-400 font-medium ms-8">{props.subtitulo}</span>
            <br />
            <hr className="text-gray-400 p-1 w-full"/>
            </div>
        </>
    )
}