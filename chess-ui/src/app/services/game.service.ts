import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl: string = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  addNewGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.baseUrl + '/api/new-game', game).pipe();
  }

  getGame(gameId: string): Observable<Game> {
    return this.http.get<Game>(this.baseUrl + `/api/game/${gameId}`).pipe();
  }

  updateGame(gameId: string, game: Game): Observable<Game> {
    return this.http.put<Game>(this.baseUrl + `/api/game/${gameId}`, game).pipe();
  }

  deleteGame(gameId: string): Observable<Game> {
    return this.http.delete<Game>(this.baseUrl + `/api/game/${gameId}`).pipe();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
