import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignupRequestPayload} from '../signup/signup-request.payload';
import {Observable} from 'rxjs';
import {LoginRequestPayload} from '../login/login.request.payload';
import {LoginResponse} from '../login/login-response.payload';
import {map} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.api;

  // @Output() loggedIn: EventEmmiter<boolean> = new Eventemitter();
  // @Output() username: EventEmmiter<string> = new EventEmmiter();

  constructor(private httpClient: HttpClient,
              private localStorage: LocalStorageService) {

  }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/api/auth/signup`, signupRequestPayload, {responseType: 'text'});
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/api/auth/login`,
      loginRequestPayload).pipe(map(data => {
      this.localStorage.store('authenticationToken', data.authenticationToken);
      this.localStorage.store('username', data.username);
      this.localStorage.store('id', data.id);
      this.localStorage.store('userRole', data.userRole);
      return true;
    }));
  }

  logout(): void {
    this.localStorage.clear();
  }

  getUsername(): string {
    return this.localStorage.retrieve('username');
  }

  getId(): number {
    return this.localStorage.retrieve('id');
  }

  getJwtToken(): string {
    return this.localStorage.retrieve('authenticationToken');
  }

  getUserRole(): string {
    return this.localStorage.retrieve('userRole');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }
}
