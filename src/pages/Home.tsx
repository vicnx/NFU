import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import ItemList from '../components/ItemList';
import Item from '../components/Item';


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
        <ItemList></ItemList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
