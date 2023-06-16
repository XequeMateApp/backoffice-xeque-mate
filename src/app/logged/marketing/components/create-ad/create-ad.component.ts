import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MarketingRegisterRequestDto } from 'src/app/dto/logged/marketing-register-request.dto';
import { MarketingService } from 'src/services/marketing.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent implements OnInit {
  @ViewChild('createtitle') createtitle: ElementRef;
  @ViewChild('createstatus') createstatus: ElementRef;
  @ViewChild('createdescription') createdescription: ElementRef;
  @ViewChild('createimg') createimg: ElementRef;

  form: FormGroup;
  notImage = true;
  request: MarketingRegisterRequestDto;
  selectFile: any = [];

  tooltip: string = '1459x598';
  left: number = 0;
  top: number = 0;

  alertFieldTitle = false;
  alertFieldStatus = false;
  alertFieldDescription = false;
  alertFieldImg = false;

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

  }


  onSelectFile(event) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      this.form.controls['img'].setValue(fileReader.result.toString());
    };
    if (event.target.files && event.target.files[0]) {
      this.notImage = false;
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.selectFile = [];
          this.selectFile.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }


  verifiField() {
    if (this.form.controls['title'].value === '') {
      this.createtitle.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldTitle = true;
      setInterval(() => {
        this.createtitle.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldTitle = false;
      }, 3000);
    }
    else if (String(this.form.controls['img'].value) === '') {
      this.createimg.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldImg = true;
      setInterval(() => {
        this.createimg.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldImg = false;
      }, 3000);
    }
    else if (String(this.form.controls['description'].value) === '') {
      this.createdescription.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldDescription = true;
      setInterval(() => {
        this.createdescription.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldDescription = false;
      }, 3000);
    }
    else if (String(this.form.controls['status'].value) === '') {
      this.createstatus.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldStatus = true;
      setInterval(() => {
        this.createstatus.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldStatus = false;
      }, 3000);
    }
  }


  confirm(): void {
    this.verifiField();
    this.request = {
      title:this.form.controls['title'].value,
      status:this.form.controls['status'].value,
      description:this.form.controls['description'].value,
      image:this.form.controls['img'].value,
    }
    console.log(this.request)
    if (
      this.form.controls['title'].value !== '' &&
      this.form.controls['status'].value !== '' &&
      this.form.controls['description'].value !== '' &&
      this.form.controls['img'].value !== ''
    ) {
      this.marketingService.register(this.request).subscribe(
        success => {
          this.toastrService.success('Cadastrado com sucesso!', '', { progressBar: true });
          this.modalService.dismissAll();
        },
        error => {
          console.log(error)
          this.toastrService.error('Erro ao cadastrar', '', { progressBar: true });
        }
      )
    }
  }


  exit() {
    this.modalService.dismissAll()
  }

}
