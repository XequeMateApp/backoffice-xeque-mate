import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UnityRequestDto } from 'src/app/dto/logged/unity-request.dto';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-edit-unity',
  templateUrl: './edit-unity.component.html',
  styleUrls: ['./edit-unity.component.scss']
})
export class EditUnityComponent implements OnInit {
  form: FormGroup;
  request: UnityRequestDto;
  responseData: any;

  constructor(
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
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.form.controls['name'].setValue(this.responseData.name)
  }



  confirm() {
    this.request = {
      name: this.form.controls['name'].value,
      description: this.responseData?.description
    }
    console.log(this.request)
    this.productService.unityEdit(this.responseData._id, this.request).subscribe({
      next: success => {
        this.toastrService.success('Editado com sucesso!', '', { progressBar: true });
        this.modalService.dismissAll();
      },
      error: error => {
        console.log(error)
        this.toastrService.error('Erro ao editar', '', { progressBar: true });
      }
    })
  }


  exit() {
    this.modalService.dismissAll()
  }
}
