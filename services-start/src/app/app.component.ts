import {Component, OnInit} from '@angular/core';
import {AccountsService} from "./accounts.service";
import {Account} from "./Models/account";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
    // this.accountsService.statusUpdated.subscribe(
    //   (status: string) => alert('New Status: ' + status)
    // );
  }
}
