export default interface Eventos{
    nome: string
    situacao: 'Aberto' | 'Finalizado' | 'Expirado'
    data?: string
    recorrencia?: 'Diária' | 'Semanal' | 'Mensal' | 'Não Repete'
    prioridade: 'Baixa' | 'Média' | 'Alta' | 'Urgente'
    descricao: string
    id?: string
}