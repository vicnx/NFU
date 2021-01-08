import React from 'react';

import {
    IonButton,
    IonRow, 
    IonCol,
    IonItem
  
  } from '@ionic/react';

const Item = (props) =>{
    const slideOpts = {
        slidesPerView: 'auto', 
        zoom: false, 
        grabCursor: true,       
        virtual: true, 
      }; 

     function handleClick(start,inc){
        alert("start:"+start+ " End:"+(start+inc));    
      }

    return (
        <>
            <IonRow>
                <IonCol size="2">
                    IMAGE
                </IonCol>
                <IonCol size="5">
                    <IonRow>
                        TITLE
                    </IonRow>
                    <IonRow>
                        Description
                    </IonRow>
                </IonCol>

                <IonCol size="1">
                    1/5
                </IonCol>
                <IonCol size="1">
                    <IonButton color="primary">JOIN</IonButton>
                </IonCol>
            </IonRow>
        </>
    )
}

export default Item;