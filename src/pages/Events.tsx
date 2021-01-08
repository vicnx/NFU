import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ItemList from '../components/ItemList';
import './Events.css';

const Events: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EVENTS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">EVENTS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ItemList></ItemList>
      </IonContent>
    </IonPage>
  );
};

export default Events;
