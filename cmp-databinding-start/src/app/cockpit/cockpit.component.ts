import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  @ViewChild('serverNameInput', {static: true}) serverNameInput: ElementRef;

  ngOnInit() {
    console.log(this.serverContentInput);
    this.serverNameInput.nativeElement.value = 'New Server Name'; // SHOULD NOT USE IT!
    this.serverContentInput.nativeElement.value = 'New Server Content'; // SHOULD NOT USE IT!
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }
}
