import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  constructor(private HTTP: HttpClient) {}
  token = { Authorization: `Bearer ${localStorage.getItem('token')}` };

  getAllUnits(): Observable<any> {
    return this.HTTP.get(
      `https://university-manager-beta.onrender.com/departments/all`
    );
  }
  getUnitById(id: string): Observable<any> {
    return this.HTTP.get(
      `https://university-manager-beta.onrender.com/department/${id}`
    );
  }
  deleteUnit(id: number): Observable<any> {
    return this.HTTP.delete(
      `https://university-manager-beta.onrender.com/department/delete/${id}`,
      { headers: this.token }
    );
  }
  ubdateUnit(id: number, body: object): Observable<any> {
    return this.HTTP.patch(
      `https://university-manager-beta.onrender.com/department/update/${id}`,
      body,
      {
        headers: this.token,
      }
    );
  }

  addUnit(body: object): Observable<any> {
    return this.HTTP.post(
      `https://university-manager-beta.onrender.com/department/add`,
      body,
      {
        headers: this.token,
      }
    );
  }
}
