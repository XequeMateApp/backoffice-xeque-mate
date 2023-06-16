import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';
import { CategoryService } from 'src/services/category.service';
import { CategoryResponseDto } from 'src/app/dto/logged/category-response.dto';
import { Page404Component } from 'src/app/shared/page404/page404.component';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.scss']
})
export class CategorysComponent implements OnInit {
  @Input('data') meals: string[] = [];
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 8,
    currentPage: 1
  };
  response: CategoryResponseDto[] = [];
  ArrayInfoUser: any = [];
  filterTerm!: string;
  user: any;
  officerAdm: string;
  typeCategory = 'Tipo';
  orderby = 'Ordenar por'
  uniqueCategory: string[];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private modalService: NgbModal,
  ) { }
  ngOnInit(): void {
    this.getCategory();
  }


  getCategory() {
    this.categoryService.getCategory().subscribe(
      success => {
        this.response = success;
        console.log(this.response)
      },
      error => {
        this.modalService.open(Page404Component, { centered: true, backdrop: 'static', keyboard: false })
        console.error(error, 'dados não coletados!!') }
    )
  }

  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }


  createOpenModals() {
    const modal = this.modalService.open(CreateCategoryComponent, { centered: true, backdrop: 'static', keyboard: false })
    modal.result.then((result) => {
    }, err => {
      this.getCategory();
    })
  }


  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.responseData, info);
     if (tabName === 'edit') {
      const modal = this.modalService.open(EditCategoryComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getCategory();
      })
    } else if (tabName === 'delete') {
      const modal = this.modalService.open(DeleteCategoryComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getCategory();
      })
    }
  }

  sortListByAlphabeticalOrder(): void {
    this.response.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
    this.orderby = 'Nome A-Z'
  }

  // filtro não funcional (matias)
  removeDuplicates(list: CategoryResponseDto[]) {
    // this.uniqueCategory = [...new Set(list.map(obj => obj.description))];
  }


  // filtro não funcional (matias)
  sortListByType(value: string) {
    // console.log(value)
    // this.typeCategory = value;
    // if (value === 'Material de construção') this.response.sort((a, b) => { return a.category.localeCompare(b.category); });
    // else if (value === 'Material de madeira') this.response.sort((a, b) => { return b.category.localeCompare(a.category); });
  }
}
