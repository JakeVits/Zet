import {
    IonCard,
    IonText,
    IonContent,
  } from "@ionic/react";
import { key } from "ionicons/icons";
import box from '../images/box.svg'

let item_name = ''
export function getItemID(pk:any){
    item_name = pk
}
const ItemDetail: React.FC = () => {
    let item:any = ''
    if(localStorage.getItem('collection')){
        item = JSON.parse(localStorage.getItem('collection') || '')
        const id = item.findIndex((i:any) => i.name === item_name)
        item = item[id]
    }
    return (
        <IonContent>
            <IonCard key={key} className='view-card'>
                <div className="ion-text-center">
                    <img alt="setting" src={box} height="120px"/>
                </div> 
                <div id="first-item" className="items">
                    <IonText>Name</IonText>
                    <IonText className='item-info'>{item.name}</IonText>
                </div>              
                <div className="items">
                    <IonText>Category</IonText>
                    <IonText className='item-info'>{item.category}</IonText>
                </div>
                <div className="items">
                    <IonText>Created-Date</IonText>
                    <IonText className='item-info'>{item.date}</IonText>
                </div>
                <div className="items">
                    <IonText className='item-desc'>Description</IonText><br/><br/>
                    <IonText>{item.description}</IonText>
                </div>
            </IonCard>   
        </IonContent>       
        );
    };

export default ItemDetail;
  