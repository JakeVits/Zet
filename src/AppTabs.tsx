import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
  IonLabel,
} from '@ionic/react';
import { home, infinite, paperPlane, bookOutline } from 'ionicons/icons';
import React from 'react';

const AppTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet/>
      <IonTabBar translucent slot="bottom">
        <IonTabButton tab="guideline" href="/guideline">
          <IonIcon icon={bookOutline}/>
          <IonLabel>Guideline</IonLabel>
        </IonTabButton>
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home}/>
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="report" href="/report">
          <IonIcon icon={paperPlane}/>
          <IonLabel>Report</IonLabel>
        </IonTabButton> 
     </IonTabBar>
  </IonTabs>
  )
};
export default AppTabs;
