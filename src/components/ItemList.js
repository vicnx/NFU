import React from 'react';
import epgData from '../data/epg.json';
import {
  IonSlides,
  IonSlide,
  IonContent,
  IonRow,  
  IonLabel, 
  IonCol, 
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent

} from '@ionic/react';
import './Item.css';
import Item from './Item.js';

export default class ItemList extends React.Component {

    constructor(props){
      super(props);      
      this.state = { 
        events: epgData.events,
        name:epgData.name,
        title:epgData.title,
      };          
    }

  
    render() {
      console.log("render");
      const events_array = Object.values(this.state.events);
      return (
        <IonContent className="ListItems">
       
          <IonLabel className="my-label">{this.state.name} Title {this.state.title}</IonLabel> 
            <IonGrid>
                <IonRow className="firstrow">
                    <IonCol size="2">
                        <span>IMAGE</span>
                    </IonCol>
                    <IonCol size="5">
                        <span>INFO</span>
                    </IonCol>
                    <IonCol size="1">
                        <span>PLAYERS</span>
                    </IonCol>
                    <IonCol size="1">
                        <span>OPTIONS</span>
                    </IonCol>
                </IonRow>
                {
                    events_array.map((event,index,arr) =>
                        (<Item key={index} item={event} ></Item>)            
                        // (<EpgRow key={index} dayOfWeek={keyByDay} events={this.state.events.get(keyByDay)} />)
                    )
                }  
            </IonGrid>
          {
        //   events_array.map((event,index,arr) =>
        //     (event.spa.name)            
        //     // (<EpgRow key={index} dayOfWeek={keyByDay} events={this.state.events.get(keyByDay)} />)
        //   )
          }  
        </IonContent>
       
      );
    }
}