import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonModal,
  IonPage,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { trash, eye, createOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import AppTabs from "../AppTabs";
import { deleteItem } from "../storage";
import UpdateItem, {getUpdateItemID} from "../content/UpdateItem";
import ItemDetail, {getItemID} from '../content/ViewItem'
import { useParams } from "react-router";

const Home: React.FC = () => {
  const [deleteBtn, setDeleteBtn] = useState({isOpen: false, name: ''});
  const [viewBtn, setViewBtn] = useState({isOpen: false, name: ''});
  const [updateBtn, setUpdateBtn] = useState({isOpen: false, name: ''});
  const [search, setSearch] = useState('')
  const {name}:any = useParams()
  let collection:any = [];
  
  if(localStorage.getItem('collection')){
      var items = JSON.parse(localStorage.getItem('collection') || '')
      items.forEach((item:any) => {
          if(item.category === name){
              collection.push(item)
          }
      })
  }
  // function to call pass the selected ID to item-details page & open view modal
  function viewModal(pk:string){
      getItemID(pk)
      setViewBtn({...viewBtn, isOpen: !viewBtn.isOpen})  
  } 
  // function to call pass the selected ID to item-update page & open view modal
  function updateModal(pk:string){
      getUpdateItemID(pk)
      setUpdateBtn({...updateBtn, isOpen: !updateBtn.isOpen})   
  }   
  // function to call the delete fuction and close the modal
  function getDeleteItem(pk:string){
      deleteItem(pk)
      setDeleteBtn({...deleteBtn, isOpen: !deleteBtn.isOpen})
  }
  // to handle search filter
  useEffect(()=>{
    const searchbar = document.getElementById('searchbar')
    searchbar?.addEventListener('keyup', (e:any)=>{
        const term = e.target.value.toLowerCase()
        const blocks = document.querySelectorAll('.blocks')
        blocks.forEach((block:any)=>{
            const item_name = block.firstElementChild.textContent
            if(item_name.toLowerCase().indexOf(term) != -1){
                block.style.display = 'block'
            }
            else{
                block.style.display = 'none'
            }
        })
      })
  }, [search])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List-Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>      
          <IonSearchbar showCancelButton="never" id="searchbar" onKeyDown={()=>setSearch('')}/>     
          {/******************************* iterate all the items from LS ************************************/}
          <div className="item-list">
            {collection.map((item:any, index:number) => (
              <IonCard key={index} className='blocks'>  
                  <IonText className='item-name'>{item.name}</IonText>
                  <div className="control">
                    <IonButton className='controlBtn' slot="end" fill="clear" onClick={() => viewModal(item.name)}>
                        <IonIcon class='eye' icon={eye}/>
                    </IonButton>
                    <IonButton className='controlBtn' slot="end" fill="clear" onClick={() => updateModal(item.name)}>
                        <IonIcon class='write' icon={createOutline}/>
                    </IonButton>
                    <IonButton className='controlBtn' slot="end" fill="clear" onClick={() => 
                        setDeleteBtn({...deleteBtn, isOpen: !deleteBtn.isOpen, name: item.name})}>
                        <IonIcon class='trash' icon={trash}/>
                    </IonButton>
                  </div>
              </IonCard>
            ))}
          </div>
          {/******************************* modal to open view item ************************************/}
          <IonModal isOpen={viewBtn.isOpen} swipeToClose={true}>
            <IonHeader translucent>
              <IonToolbar>
                <IonTitle className='crud-title'>View-Item</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() =>setViewBtn({...viewBtn, isOpen: !viewBtn.isOpen})}>Close</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <ItemDetail/>
          </IonModal> 
          {/******************************* modal to open update item ************************************/}         
          <IonModal isOpen={updateBtn.isOpen} swipeToClose={true}>
            <IonHeader translucent>
              <IonToolbar>
                <IonTitle className='crud-title'>Update-Item</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => 
                      setUpdateBtn({...updateBtn, isOpen: !updateBtn.isOpen})}>Close
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <UpdateItem/>
          </IonModal>      
          {/******************************* modal to open delete item ************************************/}
          <IonModal isOpen={deleteBtn.isOpen} swipeToClose={true}>
            <IonHeader translucent>
              <IonToolbar>
                <IonTitle className='crud-title'>Delete-Item</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => 
                      setDeleteBtn({...deleteBtn, isOpen: !deleteBtn.isOpen})}>Close
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonCard className='confirm-card'>          
                <IonLabel className='confirm-message'>Are you sure to delete this item?</IonLabel>            
                <IonButton className='confirm-btn' onClick={() => getDeleteItem(deleteBtn.name)} 
                  color='danger'>Confirm</IonButton>
              </IonCard>  
            </IonContent>
          </IonModal>      
      </IonContent>  
      <IonToolbar>
        <AppTabs/>
      </IonToolbar>
    </IonPage>
  );
};

export default Home;
