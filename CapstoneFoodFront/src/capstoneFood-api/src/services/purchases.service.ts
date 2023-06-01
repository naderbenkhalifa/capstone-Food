/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Purchase } from '../models/purchase';
@Injectable({
  providedIn: 'root',
})
class PurchasesService extends __BaseService {
  static readonly findAllPath = '/CapstoneFood/purchases/all';
  static readonly savePath = '/CapstoneFood/purchases/create';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des achats
   *
   * Cette methode permet de chercher et renvoyer la liste des achats qui existent dans la BDD
   * @return La liste des achats / Une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<Purchase>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CapstoneFood/purchases/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Purchase>>;
      })
    );
  }
  /**
   * Renvoi la liste des achats
   *
   * Cette methode permet de chercher et renvoyer la liste des achats qui existent dans la BDD
   * @return La liste des achats / Une liste vide
   */
  findAll(): __Observable<Array<Purchase>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<Purchase>)
    );
  }

  /**
   * Enregistrer un achat
   *
   * Cette methode permet d'enregistrer un achat
   * @param body undefined
   * @return L'objet achat crée
   */
  saveResponse(body?: Purchase): __Observable<__StrictHttpResponse<Purchase>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/CapstoneFood/purchases/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Purchase>;
      })
    );
  }
  /**
   * Enregistrer un achat
   *
   * Cette methode permet d'enregistrer un achat
   * @param body undefined
   * @return L'objet achat crée
   */
  save(body?: Purchase): __Observable<Purchase> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as Purchase)
    );
  }
}

module PurchasesService {
}

export { PurchasesService }
