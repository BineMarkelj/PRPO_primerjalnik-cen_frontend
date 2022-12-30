import { Kategorija } from './kategorija';
import { Trgovina } from './trgovina';

export class Izdelek {
    id: number;
    ime: string;
    opis: string;
    cena: number;
    kategorija: Kategorija;
    trgovina: Trgovina;
}

