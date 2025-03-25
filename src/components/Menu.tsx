import { IoHomeOutline, IoPersonCircleOutline } from "react-icons/io5"
import styles from '../styles/menu.module.css'
import { LuCalendarDays } from "react-icons/lu"
import { BsGear } from "react-icons/bs"
import { useNavigate } from "react-router"
import { FaRegLifeRing } from "react-icons/fa"
import { FaMagnifyingGlass } from "react-icons/fa6"

interface MenuProps{
    local?: 'Início' | 'Agenda' | 'Configurações' | 'Suporte'
    children: any
}
export default function Menu(props: MenuProps){
    const navegar = useNavigate()
    return (
        <>
            <div className={`${styles.menuHorizontal}
                absolute z-2 top-0 left-0 flex justify-between 
                bg-gray-400 text-white py-2 px-3 text-base
                items-center
                `}>
                    <div onClick={()=>navegar('/')}
                        className="cursor-pointer text-2xl font-semibold flex gap-2 items-center">
                        <img src="./Agenda2.ico" width={'40px'} alt="Agenda-Icon" />
                        <span>Agenda 2.0</span>
                    </div>
                <div className="flex items-center gap-2">
                    <form className="flex flex-row">
                        <input 
                        className={`
                            bg-gray-100 hover:bg-gray-200 rounded-2xl
                            border-b-2 border-b-green-600 text-gray-900
                            ps-3 h-9 w-35 ${styles.inputPesquisa}
                            `}
                        placeholder="Buscar..."
                        type="text" 
                        name="search" 
                        id="search" />
                        <button 
                        className={`flex flex-row gap-2 items-center
                            bg-green-400 py-1 px-3 ms-2 rounded-md
                            hover:bg-green-500 cursor-pointer
                            `}
                        type="submit">
                            <FaMagnifyingGlass 
                            size={'20px'}/>
                            <span
                            className={`${styles.buscaButtonTxt}`}
                            >Buscar</span></button>
                    </form>
                    <button className={`
                        hover:backdrop-brightness-80 rounded-4xl
                        cursor-pointer
                        `}>
                        <IoPersonCircleOutline size={'40px'}/>
                    </button>
                </div>
            </div>
            <div className={`
            fixed top-0 left-0 h-full z-1 flex-col gap-4
            flex justify-between text-gray-100 items-center
            bg-blue-400 pt-20 pb-5 ${styles.menuLateralIcons}
            `}>
                <div className={`
                flex flex-col gap-4
                `}>
                    <div 
                        onClick={()=>navegar('/')}
                        className={`${styles.iconNavLateral}
                        py-2 px-5 cursor-pointer hover:text-blue-600
                        ${props.local === 'Início'? 'bg-blue-500': ''}
                        `}>
                        <IoHomeOutline size={'32px'} />
                    </div>
                    <div 
                        onClick={()=>navegar('/agenda')}
                        className={`${styles.iconNavLateral}
                        py-2 px-5 cursor-pointer hover:text-blue-600
                        ${props.local === 'Agenda'? 'bg-blue-500': ''}
                        `}>
                        <LuCalendarDays size={'32px'} />
                    </div>
                    <div 
                        onClick={()=>navegar('/configuracoes')}
                        className={`${styles.iconNavLateral}
                        py-2 px-5 cursor-pointer hover:text-blue-600
                        ${props.local === 'Configurações'? 'bg-blue-500': ''}
                        `}>
                        <BsGear size={'32px'} />
                    </div>
                    {/* Botão de Informações */}
                    {/* <div>
                        <IoInformationCircleOutline 
                        className={`ms-5
                            text-blue-700 hover:bg-blue-700 hover:text-gray-100
                            rounded-full cursor-pointer ${styles.infoButton}
                            `}
                        size={'31px'}/>
                    </div> */}
                </div>
                <div onClick={()=>{navegar('/suporte')}}
                    className={`
                        py-2 px-5 cursor-pointer
                        ${props.local === 'Suporte'? 'bg-blue-500': ''}
                        `}>
                    <FaRegLifeRing 
                    className="cursor-pointer hover:text-blue-600"
                    size={'32px'}/>
                </div>
            </div>
            <div className={`
                fixed top-0 h-full z-1 font-semibold
                flex justify-between gap-4 overflow-hidden flex-col
                bg-blue-300 items-start text-gray-100 
                ${styles.menuLateral} ${styles.barLateral}
                `}>
                    <div className="flex flex-col gap-4 w-full">
                    <span onClick={()=>navegar('/')}
                    className={`hover:text-blue-600 cursor-pointer py-3 ps-4 w-full flex text-center justify-start
                        ${props.local === 'Início'? 'bg-blue-500': ''}
                        `}>Início</span>
                    <span onClick={()=>navegar('/agenda')}
                    className={`hover:text-blue-600 cursor-pointer py-3 ps-4 w-full flex text-start justify-start
                        ${props.local === 'Agenda'? 'bg-blue-500': ''}
                        `}>Agenda</span>
                    <span onClick={()=>navegar('/configuracoes')}
                    className={`hover:text-blue-600 cursor-pointer py-3 ps-4 w-full flex text-start justify-start
                        ${props.local === 'Configurações'? 'bg-blue-500': ''}
                        `}>Configurações</span>
                    </div>
                    <span onClick={()=>navegar('/suporte')}
                    className={`hover:text-blue-600 cursor-pointer py-3 ps-4 w-full flex text-start justify-start
                        ${props.local === 'Suporte'? 'bg-blue-500': ''}
                        `}>Suporte</span>
            </div>
            <div className={`flex z-0 px-5 py-5 ${styles.conteudoChildren}
                mt-14 ms-17 justify-start flex-col items-center
                `}>
                {props.children}
            </div>
        </>
    )
}