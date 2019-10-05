import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  personList: any;
  name: any;
  age: any;
  delPersons: any;
  adPerson: any;
  showPersons: any;
  pieChartLabels:string[];
  pieChartData:number[];
  pieChartType:string;
  constructor() { 
  }

  ngOnInit() { 
    this.showPersons = [
      {"fname":"A", "lname": "B", "age":2},
      {"fname":"A", "lname": "C", "age":21},
      {"fname":"B", "lname": " C", "age":62}
    ];
    localStorage.setItem("people", JSON.stringify(this.showPersons));
    this.personList = JSON.parse(localStorage.getItem("people"));

    
    this.pieChartLabels = ['0 - 18', '18 - 60', '> 60'];
    this.pieChartType = 'pie';

    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    //Findout out the age of the people in the list as per the age groups
    for(var i = 0; i < this.showPersons.length; i++) {
      if(this.showPersons[i].age >=0 && this.showPersons[i].age <=18) {
        c1 = c1 + 1;
      }
      else if(this.showPersons[i].age >18 && this.showPersons[i].age <=60) {
        c2 = c2 + 1;
      }
      else if(this.showPersons[i].age >60) {
        c3 = c3 + 1;
      }
    }

    
    this.pieChartData = [c1, c2, c3];
  }

  addPerson(first, last, ages) {
    this.adPerson = JSON.parse(localStorage.getItem("people"));
    if(this.adPerson.length <= 10) {
      var element = {};
    element["fname"] = first;
    element["lname"] = last;
    element["age"] = parseInt(ages);
    this.adPerson.push(element);
    this.name = this.age = "";
    localStorage.setItem("people", JSON.stringify(this.adPerson));
    this.personList = JSON.parse(localStorage.getItem("people"));

    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    //Findout out the age of the people in the list as per the age groups
    for(var i = 0; i < this.adPerson.length; i++) {
      if(this.adPerson[i].age >=0 && this.adPerson[i].age <=18) {
        c1 = c1 + 1;
      }
      else if(this.adPerson[i].age >18 && this.adPerson[i].age <=60) {
        c2 = c2 + 1;
      }
      else if(this.adPerson[i].age >60) {
        c3 = c3 + 1;
      }
    }
    
    this.pieChartData = [c1, c2, c3];



    }
    else
      alert("There is a limit of adding only 10 records");
  }

  deletePerson(first, last, ages) {
    this.delPersons = JSON.parse(localStorage.getItem("people"));
    for(var i = 0; i < this.delPersons.length; i++) {
      if(this.delPersons[i].fname == first && this.delPersons[i].lname == last && this.delPersons[i].age == ages) {
        this.delPersons.splice(i, 1);
        localStorage.setItem("people", JSON.stringify(this.delPersons));
        this.personList = JSON.parse(localStorage.getItem("people"));
      }
    }

    var c1 = 0;
    var c2 = 0;
    var c3 = 0;
    //Findout out the age of the people in the list as per the age groups
    for(var i = 0; i < this.delPersons.length; i++) {
      if(this.delPersons[i].age >=0 && this.delPersons[i].age <=18) {
        c1 = c1 + 1;
      }
      else if(this.delPersons[i].age >18 && this.delPersons[i].age <=60) {
        c2 = c2 + 1;
      }
      else if(this.delPersons[i].age >60) {
        c3 = c3 + 1;
      }
    }
    
    this.pieChartData = [c1, c2, c3];
  }

}
