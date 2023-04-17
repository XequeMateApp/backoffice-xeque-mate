import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MarketingRegisterRequestDto } from 'src/app/dto/logged/marketing-register-request.dto';
import { MarketingService } from 'src/services/marketing.service';

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.scss']
})
export class EditAdComponent implements OnInit {

  form: FormGroup;
  notImage = true;
  request: MarketingRegisterRequestDto;
  responseData: any;
  supplierImg: string[];

  selectFile: any = [];
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private marketingService: MarketingService,
    private toastrService: ToastrService,
  ) {
    this.form = this.formBuilder.group({
      title: [''],
      status: [''],
      description: [''],
      img: [''],
    })
  }

  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    this.supplierImg = this.responseData.image;
    this.form.controls['title'].setValue(this.responseData.title);
    this.form.controls['status'].setValue(this.responseData.status);
    this.form.controls['description'].setValue(this.responseData.description);
    this.supplierImg = this.responseData.image;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.supplierImg = [];
          this.responseData.image = this.supplierImg.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  confirm(): void {
    this.request = {
      title:this.form.controls['title'].value,
      status:this.form.controls['status'].value,
      description:this.form.controls['description'].value,
      image: String(this.supplierImg),
    }
    console.log(this.request)
      this.marketingService.editMarketing(this.responseData._id, this.request).subscribe(
        success => {
          this.toastrService.success('Editado com sucesso!', '', { progressBar: true });
          this.modalService.dismissAll();
        },
        error => {
          console.log(error)
          this.toastrService.error('Erro ao editar', '', { progressBar: true });
        }
      )
  }

  exit() {
    this.modalService.dismissAll()
  }

}


