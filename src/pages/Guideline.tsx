import {
    IonButton,
    IonCard,
    IonCardHeader,
    IonContent,
    IonHeader,
    IonLabel,
    IonPage,
    IonSlide,
    IonSlides,
    IonText,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
import inventory from '../images/Inventory.png'
import home from '../images/zethome.png'
import report from '../images/report.png'
import summary from '../images/zetsummary.png'
import mngt from '../images/zetmngt.png'
import AppTabs from '../AppTabs';

const GettingStarted: React.FC = () => {
return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
        <IonTitle>Guideline</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding-top" fullscreen>
        <IonSlides>
            <IonSlide>
                <IonCard className="ion-padding ion-padding-vertical">
                    <img src={home}></img>
                    <div className="ion-text-left ion-margin-top">
                        <IonText class='power-info' color="medium">
                            In home page, click the plus symbol in the blue circled icon when you want to
                            add new items in the app. The pie chart is to display the statistic of items that were created.
                        </IonText>                  
                    </div><br/>
                    <IonLabel class="swipe">Swipe left to continue</IonLabel>
                </IonCard>
            </IonSlide>
            <IonSlide>
                <IonCard className="ion-padding ion-padding-vertical">
                    <img src={summary}></img>
                    <div className="ion-text-left ion-margin-top">
                        <IonText class='power-info' color="medium">
                            In the same home page, the summary of items will be displayed whenever new items are added.
                            You are to click any of them whenever you want to view | update | delete an item, so that it 
                            will link you to management page.
                        </IonText>
                    </div><br/>
                    <IonLabel class="swipe">Swipe left to continue</IonLabel>
                </IonCard>
            </IonSlide>
            <IonSlide>
                <IonCard className="ion-padding ion-padding-vertical">
                    <img src={mngt}></img>
                    <div className="ion-text-left ion-margin-top">
                        <IonText class='power-info' color="medium">
                            In category page, you will manage the items accordingly. You are to type the word in the 
                            search bar when you want to search an item. The three icons represent three different modules. 
                            Eye icon is to view the details of an item, writing icon is to update an item, and garabe 
                            icon is to delete an item. Clicking different icon will open different modal. 
                        </IonText>
                    </div><br/>
                    <IonLabel class="swipe">Swipe left to continue</IonLabel>
                </IonCard>
            </IonSlide>
            <IonSlide>
                <IonCard className="ion-padding ion-padding-vertical">
                    <img src={report}></img>
                    <div className="ion-text-left ion-margin-top">
                        <IonText class='power-info' color="medium">
                            In report page, the form is provided to contact with the developer when there is any 
                            technical issue with the app,
                        </IonText>
                    </div><br/>
                    <IonLabel class="swipe">Swipe left to continue</IonLabel>
                </IonCard>
            </IonSlide>
            <IonSlide>
                <IonCard className="ion-padding ion-padding-vertical">
                    <img className="welcome-img" src={inventory} height='280px'/>
                    <IonButton color="primary" expand="block" href="/home">Let's Go</IonButton>
                </IonCard>                
            </IonSlide>         
        </IonSlides>
    </IonContent>
    <IonToolbar>
        <AppTabs/>
    </IonToolbar>
    </IonPage>
    );
};

export default GettingStarted;
  