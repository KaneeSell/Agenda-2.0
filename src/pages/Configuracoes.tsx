import { FormEvent, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { getTipoSave, saveTipoSave} from '../hooks/TipoSave'

export default function Configuracoes() {
  const [TipoSave, setTipoSave] = useState(getTipoSave())
  function SalvarConfig(e:FormEvent){
    e.preventDefault()
    saveTipoSave(TipoSave)
  }
  function cancelar(){
    window.location.reload()
  }
  return (
    <Menu local="Configurações">
      <Header titulo="Configurações"/>
      <form onSubmit={(event)=>SalvarConfig(event)}>
        <div className="flex- flex-row justify-end items-center mt-3 mb-5">
          <button type="button" onClick={()=>cancelar()} className="border-1 py-1 px-3 rounded-md text-gray-100 font-medium text-center bg-gradient-to-r from-gray-600 to-gray-400 hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 transition-colors duration-400">
            Cancelar</button>
          <button type="submit" className="border-1 py-1 px-3 rounded-md text-gray-100 font-medium text-center bg-gradient-to-r from-blue-600 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 transition-colors duration-400">
            Salvar</button>
        </div>
        <div className="flex flex-col relative">
            <label className="absolute -translate-3.5 left-5 bg-white"
            htmlFor="tipoSave">Salvar em:</label>
            <select className="border-1 py-2 rounded-md px-2 w-full"
            name="tipoSave" id="tipoSave" value={TipoSave} onChange={(e)=>setTipoSave(e.target.value)}>
                <option value="LocalStorage">LocalStorage</option>
                <option value="JSON Server" disabled>JSON Server</option>
                <option value="Firebase" disabled>Firebase</option>
                <option value="DB Server" disabled>DB Server</option>
            </select>
        </div>
        <div>

        </div>
      </form>
    </Menu>
  )
}
