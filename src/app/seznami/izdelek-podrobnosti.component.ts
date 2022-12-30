import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import { switchMap } from 'rxjs/operators';

import {Izdelek} from './models/izdelek';
import {IzdelkiService} from './services/izdelki.service';

@Component({
    moduleId: module.id,
    selector: 'izdelek-podrobnosti',
    templateUrl: 'izdelek-podrobnosti.component.html'
})
export class IzdelekPodrobnostiComponent implements OnInit {
    izdelek: Izdelek;

    constructor(private izdelekService: IzdelkiService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.izdelekService.getIzdelek(+params['id'])))
            .subscribe(izdelek => this.izdelek = izdelek);
    }

    nazaj(): void {
        this.router.navigate(['izdelki']);
    }
}
