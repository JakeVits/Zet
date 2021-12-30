import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import inventory from '../images/Inventory.png'

const GettingStarted: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonCard className="ion-padding ion-padding-vertical">
          <IonCardHeader className='welcome-title'>Zet</IonCardHeader>
          <img className="welcome-img" src={inventory} height='200px'></img>
          <div className="ion-text-center ion-margin-top">
            <IonText class='power-info' color="medium">Powered by Sven Gates</IonText>
          </div>
        </IonCard>
        <IonButton color="primary" expand="block" href="/guideline" className="ion-margin-top">Start</IonButton>
      </IonContent>
    </IonPage>
  );
};
export default GettingStarted;
