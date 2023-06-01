/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Food } from '../models/food';
@Injectable({
  providedIn: 'root',
})
class FoodsService extends __BaseService {
  static readonly findAllPath = '/CapstoneFood/foods/all';
  static readonly savePath = '/CapstoneFood/foods/create';
  static readonly deletePath = '/CapstoneFood/foods/delete/{idfood}';
  static readonly findByNameContainingPath = '/CapstoneFood/foods/findByNameContaining/{name}';
  static readonly updateFoodPath = '/CapstoneFood/foods/update/{id}';
  static readonly findByIdPath = '/CapstoneFood/foods/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des aliments
   *
   * Cette methode permet de chercher et renvoyer la liste des aliments qui existent dans la BDD
   * @return La liste des aliments / Une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<Food>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CapstoneFood/foods/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Food>>;
      })
    );
  }
  /**
   * Renvoi la liste des aliments
   *
   * Cette methode permet de chercher et renvoyer la liste des aliments qui existent dans la BDD
   * @return La liste des aliments / Une liste vide
   */
  findAll(): __Observable<Array<Food>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<Food>)
    );
  }

  /**
   * Enregistrer un aliment
   *
   * Cette methode permet d'enregistrer un aliment
   * @param body undefined
   * @return L'objet aliment crée
   */
  saveResponse(body?: Food): __Observable<__StrictHttpResponse<Food>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/CapstoneFood/foods/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Food>;
      })
    );
  }
  /**
   * Enregistrer un aliment
   *
   * Cette methode permet d'enregistrer un aliment
   * @param body undefined
   * @return L'objet aliment crée
   */
  save(body?: Food): __Observable<Food> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as Food)
    );
  }

  /**
   * Supprimer un aliment
   *
   * Cette methode permet de supprimer un aliment par ID
   * @param idfood undefined
   */
  deleteResponse(idfood: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/CapstoneFood/foods/delete/${encodeURIComponent(String(idfood))}`,
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
   * Supprimer un aliment
   *
   * Cette methode permet de supprimer un aliment par ID
   * @param idfood undefined
   */
  delete(idfood: number): __Observable<null> {
    return this.deleteResponse(idfood).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Renvoi la liste des alimentsByContaining name
   *
   * Cette methode permet de chercher et renvoyer la liste des alimentsByContainingname qui existent dans la BDD
   * @param name undefined
   * @return La liste des aliments / Une liste vide
   */
  findByNameContainingResponse(name: string): __Observable<__StrictHttpResponse<Array<Food>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CapstoneFood/foods/findByNameContaining/${encodeURIComponent(String(name))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Food>>;
      })
    );
  }
  /**
   * Renvoi la liste des alimentsByContaining name
   *
   * Cette methode permet de chercher et renvoyer la liste des alimentsByContainingname qui existent dans la BDD
   * @param name undefined
   * @return La liste des aliments / Une liste vide
   */
  findByNameContaining(name: string): __Observable<Array<Food>> {
    return this.findByNameContainingResponse(name).pipe(
      __map(_r => _r.body as Array<Food>)
    );
  }

  /**
   * modifier un aliment
   *
   * Cette methode permet de modifier un aliment
   * @param params The `FoodsService.UpdateFoodParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return L'objet aliment a été modifié
   */
  updateFoodResponse(params: FoodsService.UpdateFoodParams): __Observable<__StrictHttpResponse<Food>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/CapstoneFood/foods/update/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Food>;
      })
    );
  }
  /**
   * modifier un aliment
   *
   * Cette methode permet de modifier un aliment
   * @param params The `FoodsService.UpdateFoodParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return L'objet aliment a été modifié
   */
  updateFood(params: FoodsService.UpdateFoodParams): __Observable<Food> {
    return this.updateFoodResponse(params).pipe(
      __map(_r => _r.body as Food)
    );
  }

  /**
   * Rechercher un aliment par ID
   *
   * Cette methode permet de chercher un aliment par son ID
   * @param id undefined
   * @return L'aliment a ete trouve dans la BDD
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<Food>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CapstoneFood/foods/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Food>;
      })
    );
  }
  /**
   * Rechercher un aliment par ID
   *
   * Cette methode permet de chercher un aliment par son ID
   * @param id undefined
   * @return L'aliment a ete trouve dans la BDD
   */
  findById(id: number): __Observable<Food> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as Food)
    );
  }
}

module FoodsService {

  /**
   * Parameters for updateFood
   */
  export interface UpdateFoodParams {
    id: number;
    body?: Food;
  }
}

export { FoodsService }
