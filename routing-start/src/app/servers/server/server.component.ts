import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    // const serverId = +this.route.snapshot.params['id'];
    // this.setServer(serverId);
    //
    // this.route.params.subscribe(
    //   (params) => {
    //     this.setServer(+params['id']);
    //   }
    // );
    this.route.data.subscribe((data) => {
      this.server = data['server'];
    });
  }

  private setServer(id: number) {
    if (!isNaN(id) && isFinite(id)) {
      this.server = this.serversService.getServer(id);
    } else {
      console.error('Invalid or absent server ID');
      // Here, you might want to redirect the user or show an error message
    }
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
