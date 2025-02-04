import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, home, people, addCircle } from 'ionicons/icons';
import Home from './pages/Home';
import Events from './pages/Events';
import Tab3 from './pages/Tab3';
import Details from './pages/Details.js';
import Create from './pages/create/Create';


//translations
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    {/* <I18nextProvider i18n={i18n}> */}
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/events" component={Events} exact={true} />
          <Route path="/create" component={Create} />
          <Route path="/event/:id" component={Details}/>
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>HOME</IonLabel>
          </IonTabButton>
          <IonTabButton tab="events" href="/events">
            <IonIcon icon={people} />
            <IonLabel>EVENTS</IonLabel>
          </IonTabButton>
          <IonTabButton tab="create" href="/create">
            <IonIcon icon={addCircle} />
            <IonLabel>Añadir evento</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      {/* </I18nextProvider> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
