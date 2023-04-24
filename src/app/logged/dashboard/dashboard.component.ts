import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { ProductService } from 'src/services/products.service';
import { UserService } from 'src/services/user.service';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;


  public productRequest: Partial<ChartOptions> = {
    series: [
      {
        name: "Produtos",
        data: []
      }
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    title: {

      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sab",
        "Dom",
      ]
    }
  };

  // null graphics productRequest
  public productNull: Partial<ChartOptions> = {
    series: [
      {
        name: "Produtos",
        data: [ 0,0,0,0,0,0]
      }
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    title: {

      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sab",
        "Dom",
      ]
    }
  };


  public newClientsRequest: Partial<ChartOptions> = {
    series: [
      {
        name: "Clientes",
        data: []
      }
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    title: {

      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sab",
        "Dom",
      ]
    }
  };

  // null graphics newClientsRequest
  public newClientsNull: Partial<ChartOptions> = {
    series: [
      {
        name: "Clientes",
        data: [ 0, 0, 0, 0, 0, 0]
      }
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    title: {

      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sab",
        "Dom",
      ]
    }
  };

  dropDatas = '7 dias';

  totalProducts: string = '';
  totalProductsFiltered: string = '';
  totalClients: string = '';

  daysFilter: number = 7
  todos: any;

  showGraphic = false;
  showGraphic2 = false;


  constructor(
    private productService: ProductService,
    private userService: UserService
  ) { }
  ngOnInit(): void {
    this.getProducts7days();
    this.getClients();
    this.getAllProductsFiltered(this.daysFilter);
  }

  changeDatas(value: string) {
    if (value === '7days') {
      this.dropDatas = '7 dias'
      this.daysFilter = 7;
      this.getProducts7days();
      this.getAllProductsFiltered(this.daysFilter);
    } else if (value === '15days') {
      this.dropDatas = '15 dias'
      this.daysFilter = 15;
      this.getProducts15days();
      this.getAllProductsFiltered(this.daysFilter);
    } else if (value === '1month') {
      this.dropDatas = '1 mês'
      this.daysFilter = 30;
      this.getProducts30days();
      this.getAllProductsFiltered(this.daysFilter);
    }
  }

  getAllProductsFiltered(days: number) {
    this.productService.getAllFilteredProductsByDate(days).subscribe(
      success => {
        this.totalProductsFiltered = success.count.toString();
        console.log('produtos filtrados', success);
      },
      error => { console.error(error, 'Erro ao recuperar dados') }
    )
  }

  getProducts7days() {
    this.productService.getAllProductsDays7().subscribe({
      next: success => {
        const getWeekDaysName = success.products.map(item => item.createdAt);
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let dataWeek = [];
        weekdays.forEach(day => {
          dataWeek.push(getWeekDaysName.filter(item => {
            const datenew = new Date(item);
            switch (day) {
              case 'Monday':
                return datenew.getDay() === 1;
              case 'Tuesday':
                return datenew.getDay() === 2;
              case 'Wednesday':
                return datenew.getDay() === 3;
              case 'Thursday':
                return datenew.getDay() === 4;
              case 'Friday':
                return datenew.getDay() === 5;
              case 'Saturday':
                return datenew.getDay() === 6;
              case 'Sunday':
                return datenew.getDay() === 0;
              default: return false;
            }
          }).length)
        })
        // console.log(dataWeek)
        this.productRequest.series[0].data = dataWeek;
        this.totalProducts = success.count.toString();
        // console.log('Produtos Cadastrados', success.count);
        this.showGraphic = true;
      },
      error: error => { console.error(error, 'Erro ao recuperar dados') }
    })
  }

  getProducts15days() {
    this.productService.getAllProductsDays15().subscribe({
      next: success => {
        const getWeekDaysName = success.products.map(item => item.createdAt);
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let dataWeek = [];
        weekdays.forEach(day => {
          dataWeek.push(getWeekDaysName.filter(item => {
            const datenew = new Date(item);
            switch (day) {
              case 'Monday':
                return datenew.getDay() === 1;
              case 'Tuesday':
                return datenew.getDay() === 2;
              case 'Wednesday':
                return datenew.getDay() === 3;
              case 'Thursday':
                return datenew.getDay() === 4;
              case 'Friday':
                return datenew.getDay() === 5;
              case 'Saturday':
                return datenew.getDay() === 6;
              case 'Sunday':
                return datenew.getDay() === 0;
              default: return false;
            }
          }).length)
        })
        // console.log(dataWeek)
        this.productRequest.series[0].data = dataWeek;
        this.totalProducts = success.count.toString();
        // console.log('Produtos Cadastrados', success.count);
        this.showGraphic = true;
      },
      error: error => { console.error(error, 'Erro ao recuperar dados') }
    })
  }

  getProducts30days() {
    this.productService.getAllProductsDays30().subscribe({
      next: success => {
        const getWeekDaysName = success.products.map(item => item.createdAt);
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let dataWeek = [];
        weekdays.forEach(day => {
          dataWeek.push(getWeekDaysName.filter(item => {
            const datenew = new Date(item);
            switch (day) {
              case 'Monday':
                return datenew.getDay() === 1;
              case 'Tuesday':
                return datenew.getDay() === 2;
              case 'Wednesday':
                return datenew.getDay() === 3;
              case 'Thursday':
                return datenew.getDay() === 4;
              case 'Friday':
                return datenew.getDay() === 5;
              case 'Saturday':
                return datenew.getDay() === 6;
              case 'Sunday':
                return datenew.getDay() === 0;
              default: return false;
            }
          }).length)
        })
        // console.log(dataWeek)
        this.productRequest.series[0].data = dataWeek;
        this.totalProducts = success.count.toString();
        // console.log('Produtos Cadastrados', success.count);
        this.showGraphic = true;
      },
      error: error => { console.error(error, 'Erro ao recuperar dados') }
    })
  }

  getClients() {
    this.userService.getAllClients().subscribe(
      success => {
        const getWeekDaysName = success.map(item => item.createdAt);
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let dataWeek = [];
        weekdays.forEach(day => {
          dataWeek.push(getWeekDaysName.filter(item => {
            const datenew = new Date(item);
            switch (day) {
              case 'Monday':
                return datenew.getDay() === 1;
              case 'Tuesday':
                return datenew.getDay() === 2;
              case 'Wednesday':
                return datenew.getDay() === 3;
              case 'Thursday':
                return datenew.getDay() === 4;
              case 'Friday':
                return datenew.getDay() === 5;
              case 'Saturday':
                return datenew.getDay() === 6;
              case 'Sunday':
                return datenew.getDay() === 0;
              default: return false;
            }
          }).length)
        })
        // console.log(dataWeek)
        this.newClientsRequest.series[0].data = dataWeek;
        this.showGraphic2 = true;

        this.totalClients = success.length.toString();
        // console.log('Total de clientes', success.count, success.length);
      },
      error => { console.error(error, 'Erro ao recuperar dados') }
    )
  }

}
