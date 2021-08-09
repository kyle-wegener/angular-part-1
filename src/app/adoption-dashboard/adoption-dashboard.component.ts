import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoption-dashboard',
  templateUrl: './adoption-dashboard.component.html',
  styleUrls: ['./adoption-dashboard.component.css']
})
export class AdoptionDashboardComponent implements OnInit {

  availableDogs: string[] = ["Stark", "Buddy", "Nikko"];
  availableCats: string[] = ["Bella", "Annie", "Tiger"];

  constructor() { }

  ngOnInit() {
  }

  addPet(petType: string, petName: string) {
    if (petType === 'dog') {
      this.availableDogs.push(petName);
    } else if (petType === 'cat') {
      this.availableCats.push(petName);
    } else {
      alert('Unrecognized pet type!');
    }
  }

}
