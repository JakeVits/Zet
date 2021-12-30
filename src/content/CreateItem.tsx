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
// import { Redirect } from "react-router";
import {setUpStorage, createItem} from '../storage'

const CreateItem: React.FC = () => {
  const [item, setItem] = useState<any>({name: "", category: "", date: "", image: "", description: ""});
  const [showToast, setShowToast] = useState({invalid: false, message: '', color: ''})
  function validateForm(e:any){
      e.preventDefault()         
      if(localStorage.getItem('collection')){
          var lists = JSON.parse(localStorage.getItem('collection') || '')
          var result = lists.find((list:any) => list.name === item.name)
          if(result !== undefined){
              setShowToast({invalid: true, message:'Item with this name already existed!', color: 'danger'})             
          }
          else if(!item.category){
              setShowToast({invalid: true, message:'Category field must be selected!', color: 'danger'}) 
          }
          else{
              createItem(item)
              setShowToast({invalid: true, message:'New Item is created!', color: 'success'})
          }     
      }
      else{
          setUpStorage(item)
          setShowToast({invalid: true, message:'New Item is created!', color: 'success'})
      }         
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
              <IonInput required class="input-field" type="text" placeholder="Item" 
                onIonChange={(e) => setItem({...item, name: e.detail.value})}/>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Category:</IonLabel>
              <IonSelect placeholder='Item' class="input-field" interface='action-sheet'
                onIonChange={(e) => setItem({...item, category: e.detail.value})}>
                <IonSelectOption>Outfits</IonSelectOption>
                <IonSelectOption>Books | Documents</IonSelectOption>
                <IonSelectOption>Electronic Assets</IonSelectOption>
                <IonSelectOption>Cleaning Tools</IonSelectOption>
                <IonSelectOption>Furniture</IonSelectOption>
                <IonSelectOption>Food & Drinks</IonSelectOption>
                <IonSelectOption>Others</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel className='select-icon' position="stacked">Date:</IonLabel>
              <IonInput class="input-field" type="date"
                onIonChange={(e) => setItem({...item, date: e.detail.value})} clearInput/>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Description</IonLabel>
              <IonTextarea class="input-field" 
                onIonChange={(e) => setItem({...item, description: e.detail.value})}
                placeholder="Item"></IonTextarea>
            </IonItem>  
            <IonButton type="submit" expand="block" className='add-item-btn'>Create Item</IonButton>
          </IonCard>
        </form>
      <IonToast color={showToast.color} position='bottom' isOpen={showToast.invalid} message={showToast.message}/>
    </IonContent>
  );
};

export default CreateItem;
