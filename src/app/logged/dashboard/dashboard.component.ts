import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  dataWeek: any[];
;
  public newClientsRequest: Partial<ChartOptions>;

  dropDatas = '7 dias';

  totalProducts: string = '';
  totalProductsFiltered: string = '';
  totalClients: string = '';

  daysFilter: number = 7
  todos: any;
  getWeekDaysName: any;

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {

    this.newClientsRequest = {
      series: [
        {
          name: "Clientes",
          data: [10, 41, 35, 51, 49, 62, 69]
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

  }
  ngOnInit(): void {
    this.getProducts();
    this.getClients();
    this.getAllProductsFiltered(this.daysFilter);
  }

  changeDatas(value: string) {
    if (value === '7days') {
      this.dropDatas = '7 dias'
      this.daysFilter = 7;
      this.getAllProductsFiltered(this.daysFilter);
    } else if (value === '15days') {
      this.dropDatas = '15 dias'
      this.daysFilter = 15;
      this.getAllProductsFiltered(this.daysFilter);
    } else if (value === '1month') {
      this.dropDatas = '1 mês'
      this.daysFilter = 30;
      this.getAllProductsFiltered(this.daysFilter);
    }
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(
      success => {
        console.log(success, 'fwfoewif')
        this.getWeekDaysName = success.products.map(item => item.updatedAt);

        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.dataWeek = [];
        weekdays.forEach(day => {
          this.dataWeek.push(this.getWeekDaysName.filter(item => {
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
        this.productRequest.series[0].data === this.dataWeek;
        this.totalProducts = success.count.toString();
        console.log('Produtos Cadastrados', success.count);
      },
      error => { console.error(error, 'Erro ao recuperar dados') }
    )
  }

  getClients() {
    this.userService.getAllClients().subscribe(
      success => {
        this.totalClients = success.length.toString();
        console.log('Total de clientes', success.length);
      },
      error => { console.error(error, 'Erro ao recuperar dados') }
    )
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
}
