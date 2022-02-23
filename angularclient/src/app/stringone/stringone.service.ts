import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stringone} from "./stringone";

@Injectable()
export class StringoneService {

  private stringoneUrl: string;

  constructor(private http: HttpClient) {
    this.stringoneUrl = 'http://localhost:8080/stringone';
  }

  public findAll(): Observable<Stringone[]> {
    return this.http.get<Stringone[]>(this.stringoneUrl);
  }

}
