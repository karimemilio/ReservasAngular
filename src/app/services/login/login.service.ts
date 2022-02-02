import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

// @Injectable()
// export class LoginService {
//     private isUserLoggedIn: boolean;
//     public userLogged: User | undefined;

//     constructor() {
//         this.isUserLoggedIn = false;
//     }

//     isLogged() {
//         return this.isUserLoggedIn;
//     }
    
//     setUserLoggedIn(user:User) {
//         alert("variables en true")
//         this.isUserLoggedIn = true;
//         this.userLogged = user;
//         localStorage.setItem('currentUser', JSON.stringify(user));
//     }
    
//     getUserLoggedIn() {
//         alert("getuserloggedin")
//         console.log(JSON.parse(localStorage.getItem('currentUser') || '{}'))
//         return JSON.parse(localStorage.getItem('currentUser') || '{}');
//     }
// }


@Injectable({ providedIn: 'root' })
export class LoginService {
    private isUserLoggedIn: boolean;
    public userLogged: User | undefined;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.isUserLoggedIn = false;
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    isLogged() {
        return (JSON.parse(localStorage.getItem('currentUser') || '{}')["nombre"] != undefined)
        // return this.isUserLoggedIn;
    }
    
    setUserLoggedIn(user:User) {
        this.isUserLoggedIn = true;
        this.userLogged = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }
    
    getUserLoggedIn() {
        console.log(JSON.parse(localStorage.getItem('currentUser') || '{}'))
        return JSON.parse(localStorage.getItem('currentUser') || '{}');
    }

    logout() {
        // elimino las credenciales del localstorage al deslogearme
        localStorage.removeItem('currentUser');
        window.location.reload();

        // this.currentUserSubject.next(null);
    }
}