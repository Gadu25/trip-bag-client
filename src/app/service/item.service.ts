import { Injectable } from '@angular/core';
import type { Item } from '../types/item.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiBase } from '../const/server';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  private items:Item[] = [];
  private nextId = 1;

  constructor (private http: HttpClient) {}

  getAll (): Observable<Item[]>{
    return this.http.get<Item[]>(apiBase+'items');
  }

  add (item:Item): Observable<Item> {
    return this.http.post<Item>(apiBase+'item', item);
  }

  update (newItem:Item): Observable<Item> {
    return this.http.put<Item>(`${apiBase}item/${newItem.id}`, newItem);
  }

  remove (id:number): Observable<void> {
    return this.http.delete<void>(`${apiBase}item/${id}`);
  }
}
