import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { MatchService } from './match.service';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private fns: AngularFireFunctions,
    private matchService: MatchService
  ) { }

  public async sendInvites(): Promise<void> {
    const matchPath = this.matchService.currentMatchDocument.ref.path;
    const updateStatsPayload = { matchPath: matchPath, config: {} };
    await this.fns.httpsCallable('updatePlayerStats')(updateStatsPayload).toPromise();
  }
}
