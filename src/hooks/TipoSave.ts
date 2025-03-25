export function saveTipoSave(TipoSave: string){
    localStorage.setItem('useTipoSave', TipoSave)
}
export function getTipoSave(){
    const useTipoSave = localStorage.getItem('useTipoSave')
    if(useTipoSave !== null){
        return useTipoSave
    } else {
        localStorage.setItem('useTipoSave', 'LocalStorage')
        return 'LocalStorage'
    }
}