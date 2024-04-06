import {EventEmitter, Injectable} from '@angular/core';
import {Account} from "./Models/account";
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'TestAccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService ) { }

  addAccount(newAccount: Account) {
    this.accounts.push(newAccount);
    this.loggingService.logStatusChange(newAccount.status);
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
