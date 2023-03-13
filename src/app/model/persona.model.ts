export class persona {
    id?: number;
    name: string;
    lastname: string;
    img: string;

    constructor (name: string, lastname: string, img: string) {
        this.name = name;
        this.lastname = lastname;
        this.img = img;
    }
}