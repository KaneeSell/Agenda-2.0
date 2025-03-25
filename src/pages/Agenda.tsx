import Header from "../components/Header";
import Menu from "../components/Menu";
import RenderEventos from "../components/RenderEventos";

export default function Agenda() {

  return (
    <Menu local="Agenda">
      <Header titulo="Agenda" botao="Novo Evento"/>
      <RenderEventos/>
    </Menu>
  )
}
