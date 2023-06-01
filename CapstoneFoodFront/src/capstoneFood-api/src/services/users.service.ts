/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
class UsersService extends __BaseService {
  static readonly findByEmailPath = '/CapstoneFood/user/find/{email}';
  static readonly findAllPath = '/CapstoneFood/users/all';
  static readonly savePath = '/CapstoneFood/users/create';
  static readonly deletePath = '/CapstoneFood/users/delete/{iduser}';
  static readonly findByIdPath = '/CapstoneFood/users/find/{id}';
  static readonly findByEmailAndPasswordPath = '/CapstoneFood/users/get/{email}/{password}';
  static readonly addUserLoginPath = '/CapstoneFood/users/login/create';
  static readonly findByPasswordPath = '/CapstoneFood/users/{password}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Chercher la liste des utilisateurs par email
   *
   * Cette methode permet de Chercher la liste des utilisateurs par email
   * @param email undefined
   * @return La liste des utilisateurs /liste vide
   */
  findByEmailResponse(email: string): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CapstoneFood/user/find/${encodeURIComponent(String(email))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Chercher la liste des utilisateurs par email
   *
   * Cette methode permet de Chercher la liste des utilisateurs par email
   * @param email undefined
   * @return La liste des utilisateurs /liste vide
   */
  findByEmail(email: string): __Observable<User> {
    return this.findByEmailResponse(email).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Renvoi la liste des utilisateurs
   *
   * Cette methode permet de chercher et renvoyer la liste des utilisateurs qui existent dans la BDD
   * @return La liste des utilisateurs / Une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CapstoneFood/users/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * Renvoi la liste des utilisateurs
   *
   * Cette methode permet de chercher et renvoyer la liste des utilisateurs qui existent dans la BDD
   * @return La liste des utilisateurs / Une liste vide
   */
  findAll(): __Observable<Array<User>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * Enregistrer un utilisateur
   *
   * Cette methode permet d'enregistrer un utilisateur
   * @param body undefined
   * @return L'objet utilisateur crée
   */
  saveResponse(body?: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/CapstoneFood/users/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Enregistrer un utilisateur
   *
   * Cette methode permet d'enregistrer un utilisateur
   * @param body undefined
   * @return L'objet utilisateur crée
   */
  save(body?: User): __Observable<User> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Supprimer un utilisateur
   *
   * Cette methode permet de supprimer un utilisateur par ID
   * @param iduser undefined
   */
  deleteResponse(iduser: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/CapstoneFood/users/delete/${encodeURIComponent(String(iduser))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Supprimer un utilisateur
   *
   * Cette methode permet de supprimer un utilisateur par ID
   * @param iduser undefined
   */
  delete(iduser: number): __Observable<null> {
    return this.deleteResponse(iduser).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Rechercher un utilisateur par ID
   *
   * Cette methode permet de chercher un utilisateur par son ID
   * @param id undefined
   * @return L'utilisateur a ete trouve dans la BDD
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CapstoneFood/users/find/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Rechercher un utilisateur par ID
   *
   * Cette methode permet de chercher un utilisateur par son ID
   * @param id undefined
   * @return L'utilisateur a ete trouve dans la BDD
   */
  findById(id: number): __Observable<User> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Rechercher un utilisateur par email et password
   *
   * Cette methode permet de chercher un utilisateur par son email et password
   * @param params The `UsersService.FindByEmailAndPasswordParams` containing the following parameters:
   *
   * - `password`:
   *
   * - `email`:
   *
   * @return L'utilisateur a ete trouve dans la BDD
   */
  findByEmailAndPasswordResponse(params: UsersService.FindByEmailAndPasswordParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CapstoneFood/users/get/${encodeURIComponent(String(params.email))}/${encodeURIComponent(String(params.password))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Rechercher un utilisateur par email et password
   *
   * Cette methode permet de chercher un utilisateur par son email et password
   * @param params The `UsersService.FindByEmailAndPasswordParams` containing the following parameters:
   *
   * - `password`:
   *
   * - `email`:
   *
   * @return L'utilisateur a ete trouve dans la BDD
   */
  findByEmailAndPassword(params: UsersService.FindByEmailAndPasswordParams): __Observable<User> {
    return this.findByEmailAndPasswordResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Enregistrer utilisateurlogin
   *
   * Cette methode permet d'enregistrer un utilisateurlogin
   * @param body undefined
   * @return L'objet utilisateurlogin crée
   */
  addUserLoginResponse(body?: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/CapstoneFood/users/login/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Enregistrer utilisateurlogin
   *
   * Cette methode permet d'enregistrer un utilisateurlogin
   * @param body undefined
   * @return L'objet utilisateurlogin crée
   */
  addUserLogin(body?: User): __Observable<User> {
    return this.addUserLoginResponse(body).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Chercher la liste des utilisateurs par password
   *
   * Cette methode permet de Chercher la liste des utilisateurs par password
   * @param password undefined
   * @return La liste des utilisateurs /liste vide
   */
  findByPasswordResponse(password: string): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CapstoneFood/users/${encodeURIComponent(String(password))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Chercher la liste des utilisateurs par password
   *
   * Cette methode permet de Chercher la liste des utilisateurs par password
   * @param password undefined
   * @return La liste des utilisateurs /liste vide
   */
  findByPassword(password: string): __Observable<User> {
    return this.findByPasswordResponse(password).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module UsersService {

  /**
   * Parameters for findByEmailAndPassword
   */
  export interface FindByEmailAndPasswordParams {
    password: string;
    email: string;
  }
}

export { UsersService }
