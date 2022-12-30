import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IzdelkiComponent} from './seznami/izdelki.component';
import {IzdelekPodrobnostiComponent} from './seznami/izdelek-podrobnosti.component';
import { IzdelekDodajComponent } from './seznami/izdelek-dodaj.component';

const routes: Routes = [
    {path: '', redirectTo: '/izdelki', pathMatch: 'full'},
    {path: 'izdelki/dodaj', component: IzdelekDodajComponent},
    {path: 'izdelki', component: IzdelkiComponent},
    {path: 'izdelki/:id', component: IzdelekPodrobnostiComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
