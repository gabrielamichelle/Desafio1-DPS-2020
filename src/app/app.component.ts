import { Component } from '@angular/core';
import { ClientComponent } from './models/client.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clientArray: ClientComponent[] = [
    {id: 1, visit: 1, name: 'Beyonce', dui: 25008696, pet: 'firulais', treatment: 'Inyecciones', medicine: 'Penicelina', discount: 0, cost: 83},
    //{id: 2, visit: 1, name: 'waby', dui: 26, pet: 'firulais', treatment: 'mimos', medicine: 'love', discount: 0, cost: 0.26},
    //{id: 3, visit: 1, name: 'gaby', dui: 27, pet: 'firulais', treatment: 'mimos', medicine: 'love', discount: 0, cost: 0.27}
  ];

  selectedClient: ClientComponent = new ClientComponent();

  addClientOrEdit() {
    // this.selectedClient.visit = this.clientArray.length + 1;
    let visit: number;
    let discount: number;
    let total: number;
    if (this.selectedClient.id === 0) {
      this.selectedClient.id = this.clientArray.length + 1;
      this.selectedClient.visit = 1;
      this.clientArray.push(this.selectedClient);
    } else {
      visit = this.selectedClient.visit;
      visit = visit + 1;
      this.selectedClient.visit = visit;
      if (visit > 4) {
        discount = this.selectedClient.cost * 0.1;
        total = this.selectedClient.cost - discount;
        this.selectedClient.discount = discount;
        this.selectedClient.cost = total;
        this.selectedClient.cost.toFixed(2);
      }else if (visit >= 2 || visit <= 4) {
        discount = this.selectedClient.cost * 0.05;
        total = this.selectedClient.cost - discount;
        this.selectedClient.discount = discount;
        this.selectedClient.cost = total;
        this.selectedClient.cost.toFixed(2);
      }
    }
    this.selectedClient = new ClientComponent();
  }

  showData(client: ClientComponent) {
    this.selectedClient = client;
  }
}
