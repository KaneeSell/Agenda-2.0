// import axios from "axios";

// export function getURLBase(){
//     const urlBase = localStorage.getItem('urlBase')
//     if(urlBase !== null){
//         return urlBase
//     } else {
//         localStorage.setItem('urlBase', 'http://localhost:5000/empresas')
//         return 'http://localhost:5000/empresas'
//     }
// }
// export async function Remover(eventoId:number) {
//     const urlBase = getURLBase()
//     await axios.delete(`${urlBase}/${eventoId}`);
// }
// export default interface Eventos{
//     nome: string
//     situacao: 'Aberto' | 'Finalizado' | 'Expirado'
//     data?: string
//     recorrencia?: 'Diária' | 'Semanal' | 'Mensal' | 'Não Repete'
//     prioridade: 'Baixa' | 'Média' | 'Alta' | 'Urgente'
//     descricao: string
//     id?: string
// }
// export async function Salvar(eventos: Eventos) {
//     const urlBase = getURLBase()
//     const empresa = { nome, nomeFantasia, email, cep, cnpj, pais, estado, bairro, rua, numero, complemento, contato, cidade };
//     if(id){
//         await axios.put(`${urlBase}/${id}`, empresa)
//     } else {
//         await axios.post(urlBase, empresa);
//     }
// }

// export async function BuscarCliente(id:number){
//     const urlBase = getURLBase()
//     const lista = await ListaDB()
//     return lista.find((e:any) => Number(e.id) === Number(id))
// }

// export async function ListaDB() {
//     return await axios.get(urlBase).then(resp => resp.data);
// }
