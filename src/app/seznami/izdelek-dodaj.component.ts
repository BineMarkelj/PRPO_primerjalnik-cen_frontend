import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import {IzdelkiService} from './services/izdelki.service';
import { Izdelek } from './models/izdelek';
import { Kategorija } from './models/kategorija';
import { Trgovina } from './models/trgovina';
import { switchMap } from 'rxjs/operators';

@Component({
    moduleId: module.id,
    selector: 'dodaj-izdelek',
    templateUrl: 'izdelek-dodaj.component.html'
})
export class IzdelekDodajComponent implements OnInit {

    kategorija: Kategorija = new Kategorija;
    trgovina: Trgovina = new Trgovina;
    izdelek: Izdelek = new Izdelek;

    kategorije: Kategorija[];
    trgovine: Trgovina[];

    nova_kategorija: Boolean = true;
    nova_trgovina: Boolean = true;

    kategorija_value = 'Dodaj novo kategorijo';
    trgovina_value ='Dodaj novo trgovino';

    // private sub: any;

    constructor(private izdelkiService: IzdelkiService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.izdelek.id = 0;
        this.izdelek.kategorija = this.kategorija;
        this.izdelek.trgovina = this.trgovina;
        this.izdelek.kategorija.id = 0
        this.izdelek.trgovina.id = 0

        this.getKategorije()
        this.getTrgovine()

        console.log("IZDELEK:" + JSON.stringify(this.izdelek))

      }

    ngOnDestroy() {
        // this.sub.unsubscribe();
    }

    submitForm(): void {
        // console.log(this.kategorije)
        // console.log(this.trgovine)
        this.izdelkiService.create(this.izdelek)
            .subscribe(() => this.router.navigate(['/izdelki']));
    }

    nazaj(): void {
        this.router.navigate(['/izdelki']);
    }

    getKategorije(): void {
        this.izdelkiService
            .getKategorije()
            .subscribe(kategorije => this.kategorije = kategorije);
    }

    getTrgovine(): void {
        this.izdelkiService
            .getTrgovine()
            .subscribe(trgovine => this.trgovine = trgovine);
    }

    onChangeKategorija(event: any) {
        // console.log(event.target.value)
        if (event.target.value === "Dodaj novo kategorijo") {
            this.nova_kategorija = true;
            this.izdelek.kategorija.id = 0
            this.izdelek.kategorija.ime = ""
        } else {
            this.nova_kategorija = false;
            // console.log(this.kategorije)

            let id;
            let ime;

            for (let i = 0; i < (this.kategorije).length; i++) {
                let tmp = this.kategorije[i]
                // console.log(tmp);
                if (tmp.id == event.target.value) {
                    id = tmp.id;
                    ime = tmp.ime;
                }
            }

            this.izdelek.kategorija.id = id
            this.izdelek.kategorija.ime = ime
        }
    }

    onChangeTrgovina(event: any) {
        // console.log(event.target.value)
        if (event.target.value === "Dodaj novo trgovino") {
            this.nova_trgovina = true;
            this.izdelek.trgovina.id = 0
            this.izdelek.trgovina.ime = ""
        } else {
            let izbrano: number = +(event.target.value)
            this.nova_trgovina = false;
            // console.log(this.trgovine)
            
            let id: number;
            let ime: string;

            for (let i = 0; i < (this.trgovine).length; i++) {
                let tmp = this.trgovine[i]
                if (tmp.id == izbrano) {
                    id = tmp.id;
                    ime = tmp.ime;
                }
            }

            // console.log(id)
            // console.log(ime)
            // console.log(typeof(id))
            // console.log(typeof(ime))

            this.izdelek.trgovina.id = id
            this.izdelek.trgovina.ime = ime
        }
    }

}
