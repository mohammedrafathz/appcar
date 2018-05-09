import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  private req: any;
  private modelReq: any;
  selectedCar = 0;
  selectedModel = 0;

  header = "Cars app";
  model = [];
  car = [];
  carName = [];
  modelName = [];
  allCars = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.req = this.http.get("http://localhost:3003/cars").subscribe(data => {
      this.allCars = data as [any];
    },err =>{
      console.log(err.message);
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }
  onSelectCar(car_id: number) {
    this.selectedCar = car_id;
    this.selectedModel = 0;
    this.car = [];
    this.modelReq = this.http
      .get("http://localhost:3003/models")
      .subscribe(data => {
        this.model = (data as [any]).filter(item => {
          return item.car_id === car_id;
        },err =>{
          console.log(err.message);
        });
      });
  }

  onSelectModel(model_id: number) {
    this.modelName = this.model.filter(item => {
      return item._id === model_id;
    });
  }
}
