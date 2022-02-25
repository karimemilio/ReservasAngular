import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';


@Injectable({ providedIn: 'root' })
export class LoginService {
    private isUserLoggedIn: boolean;
    public userLogged: User | undefined;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.isUserLoggedIn = false;
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    isLogged() {
        return (JSON.parse(sessionStorage.getItem('currentUser') || '{}')["nombre"] != undefined)
        // return this.isUserLoggedIn;
    }
    
    setUserLoggedIn(user:User) {
        this.isUserLoggedIn = true;
        this.userLogged = user;
        const userAutenticado = {"id": user.id,
                                "nombre": user.nombre,
                                "mail": user.mail
                                }
        sessionStorage.setItem('currentUser', JSON.stringify(userAutenticado));
        this.currentUserSubject.next(user);
    }
    
    getUserLoggedIn() {
        return JSON.parse(sessionStorage.getItem('currentUser') || '{}');
    }

    logout() {
        // elimino las credenciales del sessionStorage al deslogearme
        sessionStorage.removeItem('currentUser');
        window.location.reload();

        // this.currentUserSubject.next(null);
    }
}