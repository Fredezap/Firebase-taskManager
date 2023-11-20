export class Contact {
    name = '';
    surname = '';
    email = '';
    state = false;

    constructor(name, surname, email, state) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.state = state;
    }
}