import React,{useContext,useState} from 'react';
import { AppContext } from '../../State';
import { ellipsisVertical, removeCircleOutline } from 'ionicons/icons';

import { person, compass, alarm,star } from 'ionicons/icons';
import {  
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonPopover,
    IonContent,
    IonList,
    IonLabel,
    IonItem
} from '@ionic/react';
import './header.css'

const Header = (props) =>{
  const { state,dispatch } = useContext(AppContext);
  const [showUserMenuEvent, setShowUserMenuEvent] = useState(null);
  const doLogout = () => {    
    setShowUserMenuEvent(null);
    dispatch({type:'SET_USER',value:''});       
  };
  
  const page = props.page;
    return (
        <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{page}</IonTitle>
            <IonButtons slot="end">
              <IonButton fill="clear" onClick={e => { e.persist(); setShowUserMenuEvent(e) }}>
                <IonIcon icon={ellipsisVertical} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonPopover
            event={showUserMenuEvent}
            isOpen={!!showUserMenuEvent}
            onDidDismiss={() => setShowUserMenuEvent(null)}>
          <IonContent>
            <IonList>
              <IonItem onClick={e => { e.preventDefault(); doLogout()}} detail={true} href="">
                <IonLabel>LOGOUT</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>{state.user}</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
          </IonPopover> 
        </>
    )
}

export default Header;