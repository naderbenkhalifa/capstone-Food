/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PurchaseItem } from '../models/purchase-item';
@Injectable({
  providedIn: 'root',
})
class PurchaseitemsService extends __BaseService {
  static readonly findAllPath = '/CapstoneFood/purchaseitems/all';
  static readonly savePath = '/CapstoneFood/purchaseitems/create';

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
  findAllResponse(): __Observable<__StrictHttpResponse<Array<PurchaseItem>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CapstoneFood/purchaseitems/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PurchaseItem>>;
      })
    );
  }
  /**
   * Renvoi la liste des achats
   *
   * Cette methode permet de chercher et renvoyer la liste des achats qui existent dans la BDD
   * @return La liste des achats / Une liste vide
   */
  findAll(): __Observable<Array<PurchaseItem>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<PurchaseItem>)
    );
  }

  /**
   * Enregistrer un achat
   *
   * Cette methode permet d'enregistrer un achat
   * @param body undefined
   * @return L'objet achat crée
   */
  saveResponse(body?: PurchaseItem): __Observable<__StrictHttpResponse<PurchaseItem>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/CapstoneFood/purchaseitems/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PurchaseItem>;
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
  save(body?: PurchaseItem): __Observable<PurchaseItem> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as PurchaseItem)
    );
  }
}

module PurchaseitemsService {
}

export { PurchaseitemsService }
