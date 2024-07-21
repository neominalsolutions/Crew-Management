import { Routes } from '@angular/router';
import { CrewCard } from './components/crew-card/crew-card.component';
import { CrewListComponent } from './components/crew-list/crew-list.component';

export const routes: Routes = [
  {
    path: 'crew/:id',
    component: CrewCard,
  },
  {
    path: '', // ilk açılış
    component: CrewListComponent,
  },
];
