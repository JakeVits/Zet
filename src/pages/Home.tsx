import { IonCard, 
  IonCardHeader, 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonNote, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonFab,
  IonFabButton,
  IonRouterLink,
  IonIcon, IonModal, IonButtons, IonButton
} from '@ionic/react';
import { useState } from 'react';
import AppTabs from '../AppTabs';
import { add } from "ionicons/icons";
import CreateItem from '../content/CreateItem';
import {ResponsiveContainer, PieChart, Pie, Cell} from 'recharts'


const Report: React.FC = () => {
  let collection:any = [];
  let total:number = 0;
  let catalog:any = {}
  const [createBtn, setCreateBtn] = useState(false);
  const data:any = [];
  const colors = ['#4da6ff', '#00C49F', '#FFBB28', '#ff6600', '#ff4d94', '#bdb76b', '#b478ed']

  if(localStorage.getItem('collection')){
      collection = JSON.parse(localStorage.getItem('collection') || '')
      for(var col in collection){
          total += 1
          if(!catalog.hasOwnProperty(collection[col].category)){
              Object.assign(catalog, {[collection[col].category]: 1})  
              data.push({name: collection[col].category, value: 1})     
          }     
          else{
              catalog[collection[col].category] += 1
              var item = data.find((item:any) => item.name === collection[col].category)
              var index = data.indexOf(item)
              data[index]['value'] += 1
          }
      }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ResponsiveContainer className='chart' width='100%' height='35%'>       
          <PieChart style={{fontSize: '15px'}}>
            <Pie isAnimationActive fontSize='10px' dataKey="value" data={data} outerRadius={45} label={(entry)=>entry.name}>
              {data.map((_:any, index:number) => (
                <Cell key={index} fill={colors[index]}/>
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <IonCard>
          <IonCardHeader>You now have {total} items</IonCardHeader>      
        </IonCard>      
        <IonCard>
          <IonList>
            <IonLabel class='inventory-title'>Inventory</IonLabel>
              {Object.keys(catalog).map((key)=>
                <IonRouterLink href={`/category/${key}`} key={key}>
                  <IonItem>
                    <IonLabel style={{color: 'lightgray', fontSize: '13px', letterSpacing: '1px'}}>{key}</IonLabel>
                    <IonNote slot="end" color="secondary">{catalog[key]}</IonNote>
                  </IonItem>
                </IonRouterLink>
              )}
          </IonList>
        </IonCard>
        <IonFab vertical="center" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setCreateBtn(!createBtn)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonModal isOpen={createBtn} swipeToClose={true}>
          <IonHeader translucent>
            <IonToolbar>
              <IonTitle className='crud-title'>Add-Item</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setCreateBtn(!createBtn)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <CreateItem/>
        </IonModal>     
      </IonContent>
      <IonToolbar>
        <AppTabs/>
      </IonToolbar>
    </IonPage>
  );
};

export default Report;

