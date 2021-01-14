import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Event_List from '../components/Event/Event_List';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1ded</IonTitle>
            
          </IonToolbar>
        </IonHeader>
        <Event_List></Event_List>
      </IonContent>
    </IonPage>
  );
};

export default Home;
