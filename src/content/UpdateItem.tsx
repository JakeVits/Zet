import {
    IonButton,
    IonButtons,
    IonCard,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonToast,
  } from "@ionic/react";
import { useState } from "react";
import {updateItem} from '../storage'
 
let item_name = ''

export function getUpdateItemID(pk:string){
    item_name = pk
}

const UpdateItem: React.FC = () => {
  const [showToast, setShowToast] = useState({invalid: false, message: '', color: ''})
  let box = JSON.parse(localStorage.getItem('collection') || '')
  const id:number = box.findIndex((i:any) => i.name === item_name)
  box = box[id]
  const [item, setItem] = useState<any>({name: box.name, category: box.category, date: box.date, 
        description: box.description});
      
  const validateForm = (e:any) =>{
      e.preventDefault()
      let lists = JSON.parse(localStorage.getItem('collection') || '')     
      var result = lists.find((list:any) => list.name !== item_name && list.name === item.name)
      if(result !== undefined){
          setShowToast({invalid: true, message:'Item with this name already existed!', color: 'danger'})     
          return        
      }  
      updateItem(id, item)
      getUpdateItemID(item.name)
      setShowToast({invalid: true, message: 'Item is updated sucessfully!', color: 'success'})             
      setTimeout(() => setShowToast({invalid: false, message: '', color: ''}), 2000)
  }
  return (
    <IonContent>
      <IonCard>
        <div className="ion-text-center ion-margin-top ion-padding-vertical">
            <img alt="setting" src="./assets/svg/undraw_add_information_j2wg.svg" height="80px"/>
        </div>
      </IonCard> 
      <form onSubmit={validateForm}>  
        <IonCard>     
          <IonItem>
            <IonLabel position="stacked">Name:</IonLabel>
            <IonInput required class="input-field" type="text" placeholder="Item" value={item.name}
              onIonChange={(e) => setItem({...item, name: e.detail.value})}/>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Category:</IonLabel>
            <IonSelect placeholder='Item' class="input-field" interface="action-sheet" value={item.category}
              onIonChange={(e) => setItem({...item, category: e.detail.value})}>
              <IonSelectOption>Outfits</IonSelectOption>
              <IonSelectOption>Books | Documents</IonSelectOption>
              <IonSelectOption>Electronic Assets</IonSelectOption>
              <IonSelectOption>Cleaning Tools</IonSelectOption>
              <IonSelectOption>Furniture</IonSelectOption>
              <IonSelectOption>Others</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel className='select-icon' position="stacked">Date:</IonLabel>
            <IonInput class="input-field" type="date" value={item.date}
              onIonChange={(e) => setItem({...item, date: e.detail.value})} clearInput/>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Description</IonLabel>
            <IonTextarea class="input-field" value={item.description}
              onIonChange={(e) => setItem({...item, description: e.detail.value})}
              placeholder="Write down your note here"></IonTextarea>
          </IonItem>  
          <IonButton type="submit" expand="block" className='update-item-btn'>Update Item</IonButton>
        </IonCard>
      </form>
      <IonToast color={showToast.color} position='bottom' isOpen={showToast.invalid} message={showToast.message}/>
    </IonContent>
  );
};

export default UpdateItem;
  