import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonTextarea,
  IonToast,
} from "@ionic/react";
import React, { useState } from "react";
import AppTabs from "../AppTabs";
import emailjs from 'emailjs-com'
import {personOutline, mail, createOutline} from "ionicons/icons";
import '../theme/report.css'

const Report: React.FC = () => {
  const [network, setNetwork] = useState({isOpened: false, color: '', message: ''})
  function sendEmail(e:any){
      e.preventDefault()    
      emailjs.sendForm('09250432059', 'template_mqzfodz', e.target, 'user_oQ5tsYdAt8YmjW6fB20Ut')
      .then((result) => {         
          setNetwork({...network, isOpened: true, color: 'success', message: 'Email is sent successfully'})
          console.log(result.text);
      },(error) => {
          console.log(error.text);
          setNetwork({...network, isOpened: true, color: 'danger', 
          message: 'Email is not sent. Please check your connection and try again.'})
      })
      var form:any = document.querySelector('.report-form') || null
      form.reset()
      var textarea:any = document.querySelector('.text-area') || null
      textarea.value = ''
      setTimeout(() => setNetwork({...network, isOpened: false, color: '', message: ''}), 3000)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Report</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <AppTabs/>
        <IonCard className='report-update'>
          <div className="ion-text-center ion-margin-top ion-padding-vertical">
            <img alt="setting" src="./assets/svg/undraw_personal_settings_re_i6w4.svg" height="70px"/>
          </div>       
          <IonText style={{color: 'lightgray'}} class='info-update'>Latest update on Dec 28, 2021</IonText>
        </IonCard>     
        <IonCard>
          <IonLabel class="bug-info">Found any technical issue?</IonLabel>
          <form onSubmit={sendEmail} className="report-form">
            <IonItem id='first-report-input' className='report-input'>
              <IonLabel position='floating'>Name</IonLabel>
              <IonIcon class="report-icon" icon={personOutline} slot="end"></IonIcon>
              <IonInput required placeholder='Full-Name' type='text' name="sender"/>
            </IonItem>
            <IonItem className='report-input'>
              <IonLabel position='floating'>Email Address</IonLabel>
              <IonIcon class="report-icon" icon={mail} slot="end"></IonIcon>
              <IonInput required placeholder='Email Address' type='email' name="sender_email"/>
            </IonItem>
            <IonItem className='report-input'>
              <IonLabel position='floating'>Message</IonLabel>
              <IonIcon class="report-icon" icon={createOutline} slot="end"></IonIcon>
              <IonTextarea required className='text-area' name="message"></IonTextarea>
            </IonItem>
            <IonButton className='btn' type='submit'>Report</IonButton>
          </form>       
        </IonCard>       
        <IonToast color={network.color} position='bottom' isOpen={network.isOpened} message={network.message}/>
      </IonContent>
    </IonPage>
  );
};

export default Report;
