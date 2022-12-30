import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Izdelek } from './models/izdelek';
import { IzdelkiService } from './services/izdelki.service';

@Component({
    moduleId: module.id,
    selector: 'vsi-izdelki',
    templateUrl: 'izdelki.component.html'
})
export class IzdelkiComponent implements OnInit {
    izdelki: Izdelek[];
    izdelek: Izdelek;

    constructor(private izdelkiService: IzdelkiService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getIzdelki();
    }

    getIzdelki(): void {
        this.izdelkiService
            .getIzdelki()
            .subscribe(izdelki => this.izdelki = izdelki);
    }

    naPodrobnosti(izdelek: Izdelek): void {
        this.izdelek = izdelek;
        this.router.navigate(['/izdelki', this.izdelek.id]);
    }

    dodajIzdelek(): void {
        console.log("dodaj")
        this.router.navigate(['/izdelki/dodaj']);
    }

    delete(izdelek: Izdelek): void {
        this.izdelkiService
            .delete(izdelek.id)
            .subscribe(IzdelekId => this.izdelki = this.izdelki.filter(s => s.id !== IzdelekId));
    }

}
