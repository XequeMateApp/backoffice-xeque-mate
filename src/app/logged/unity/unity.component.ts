import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import { CategoryResponseDto } from 'src/app/dto/logged/category-response.dto';
import { ProductsRegisterResponseDto } from 'src/app/dto/logged/product-register-response.dto';
import { UnityRequestDto } from 'src/app/dto/logged/unity-request.dto';
import { Page404Component } from 'src/app/shared/page404/page404.component';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { CategoryService } from 'src/services/category.service';
import { ProductService } from 'src/services/products.service';
import { DeleteProductComponent } from '../products/components/delete-product/delete-product.component';
import { EditProductComponent } from '../products/components/edit-product/edit-product.component';
import { EditUnityComponent } from './edit-unity/edit-unity.component';
import { DeleteUnityComponent } from './delete-unity/delete-unity.component';
import { UnityResponsetDto } from 'src/app/dto/logged/uniry-response.dto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.scss']
})
export class UnityComponent implements OnInit {
  ArrayInfoUser: any = [];
  form: FormGroup;
  @Input('data') meals: string[] = [];
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 8,
    currentPage: 1
  };


  response: UnityResponsetDto[] = [];
  request: UnityRequestDto;

  filterTerm!: string;
  OrderBy = 'Ordenar';


  constructor(
    private router: Router,
    private modalService: NgbModal,
    private toastrService: ToastrService,

    private formBuilder: FormBuilder,
    private productService: ProductService,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
    })
  }



  ngOnInit(): void {
    this.getUnity();
  }


  create() {
    this.request = {
      name: this.form.controls['name'].value
    }
    this.productService.unityCreate(this.request).subscribe({
      next: success => {
        this.toastrService.success('Cadastrado com sucesso!', '', { progressBar: true });
    this.getUnity();
      },
      error: error => {
        this.toastrService.error('Erro ao Cadastrar!', '', { progressBar: true });
        console.log(error);
      }
    })
  }


  getUnity() {
    this.productService.unityList().subscribe({
      next: success => {
        this.response = success;
        console.log(this.response, 'lisat de unidades')
      },
      error: error => { console.error(error, 'category not collected') }
    })
  }

  backHome() {
    this.router.navigate(['/logged/dashboard']);
  }


  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.responseData, info);
    if (tabName == 'editunity') {
      const modal = this.modalService.open(EditUnityComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getUnity();
      })
    } else if (tabName == 'deleteunity') {
      const modal = this.modalService.open(DeleteUnityComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getUnity();
      })
    }
  }

  sortListByAlphabeticalOrder(): void {
    this.response.sort((a, b) => {
      return a.name.localeCompare(b.name);
    }
    );
    this.OrderBy = 'Nome A-Z'
  }
}
