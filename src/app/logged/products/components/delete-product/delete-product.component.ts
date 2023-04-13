import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  responseData: any;
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
  ) {
    this.form = this.formBuilder.group({
      delete: [''],
    })
  }
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
  }

  delete() {
    this.productService.deleteProduct(this.responseData._id).subscribe({
      next: data => {
        this.toastrService.success('Excluido com sucesso!', '', { progressBar: true })
    this.modalService.dismissAll()
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000)
      },
      error: error => {
        console.log(error)
        this.toastrService.error('Erro ao Excluir!', '', { progressBar: true });
      }
    }
    )
  }

  exit() {
    this.modalService.dismissAll()
  }
}
