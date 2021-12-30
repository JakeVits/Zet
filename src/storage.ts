

export function createItem(new_item: object){
    let collection = localStorage.getItem('collection')
    let items = JSON.parse(collection?collection:'')
    items.push(new_item)   
    localStorage.setItem('collection', JSON.stringify(items))
}
export function updateItem(id:number, item:any){
    let collection = localStorage.getItem('collection')    
    let items = JSON.parse(collection?collection:'')   
    items[id] = item
    localStorage.setItem('collection', JSON.stringify(items))
}
export function deleteItem(item_name:string){
    let collection = localStorage.getItem('collection')
    let items = JSON.parse(collection?collection:'')
    var index:number = items.findIndex((i:any) => i.name === item_name)
    items.splice(index, 1)
    localStorage.setItem('collection', JSON.stringify(items))
}
export function setUpStorage(item:object){
    let box = []
    box.push(item)
    localStorage.setItem('collection', JSON.stringify(box))
    box.pop()
}