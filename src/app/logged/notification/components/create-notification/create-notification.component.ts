import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NotificationRegisterRequestDto } from 'src/app/dto/logged/notification-register-request.dto';
import { Page404Component } from 'src/app/shared/page404/page404.component';
import { NotificationService } from 'src/services/notification.service';


@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss'],
})
export class CreateNotificationComponent implements OnInit {
  @ViewChild('createname') createname: ElementRef;
  @ViewChild('createstatus') createstatus: ElementRef;
  @ViewChild('createcontent') createcontent: ElementRef;
  @ViewChild('createrepetition') createrepetition: ElementRef;
  @ViewChild('createdate') createdate: ElementRef;
  @ViewChild('createtime') createtime: ElementRef;
  @ViewChild('createfilter') createfilter: ElementRef;

  form: FormGroup;
  request: NotificationRegisterRequestDto;

  alertFieldsName = false;
  alertFieldStatus = false;
  alertFieldRepetition = false;
  alertFieldDate = false;
  alertFieldTime = false;
  alertFieldContent = false;
  alertFieldFilter = false;
  alertFieldSpecification = false;


  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      status: [''],
      textarea: [''],
      repetition: [''],
      dateStart: [''],
      time: [''],
      filter: [''],
    })
  }
  ngOnInit(): void {

  }

  verifiField() {
    if (this.form.controls['name'].value === '') {
      this.createname.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldsName = true;
      setInterval(() => {
        this.createname.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldsName = false;
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
    else if (this.form.controls['repetition'].value === '') {
      this.createrepetition.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldRepetition = true;
      setInterval(() => {
        this.createrepetition.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldRepetition = false;
      }, 3000);
    }
    else if (this.form.controls['textarea'].value === '') {
      this.createcontent.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldContent = true;
      setInterval(() => {
        this.createcontent.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldContent = false;
      }, 3000);
    }
    else if (this.form.controls['dateStart'].value === '') {
      this.createdate.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldDate = true;
      setInterval(() => {
        this.createdate.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldDate = false;
      }, 3000);
    }
    else if (this.form.controls['time'].value === '') {
      this.createtime.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldTime = true;
      setInterval(() => {
        this.createtime.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldTime = false;
      }, 3000);
    }
    else if (this.form.controls['filter'].value === '') {
      this.createfilter.nativeElement.classList.add("border-danger", "border", "text-danger");
      this.alertFieldFilter = true;
      setInterval(() => {
        this.createfilter.nativeElement.classList.remove("border-danger", "border", "text-danger");
        this.alertFieldFilter = false;
      }, 3000);
    }
  }


  confirm(): void {
    this.verifiField();
    this.request = {
      name: this.form.controls['name'].value,
      status: this.form.controls['status'].value,
      content: this.form.controls['textarea'].value,
      repetition: this.form.controls['repetition'].value,
      start: this.form.controls['dateStart'].value,
      hour: this.form.controls['time'].value,
      filter: this.form.controls['filter'].value
    }
    console.log(this.request)
    if (
      this.form.controls['name'].value !== '' &&
      this.form.controls['status'].value !== '' &&
      this.form.controls['textarea'].value !== '' &&
      this.form.controls['repetition'].value !== '' &&
      this.form.controls['dateStart'].value !== '' &&
      this.form.controls['time'].value !== '' &&
      this.form.controls['filter'].value !== ''
    ) {
      this.notificationService.register(this.request).subscribe(
        success => {
          this.notificationService.getNotifications().subscribe({
            next: success => {
             
              localStorage.setItem('notifcations', JSON.stringify(success));
              window.location.reload()
              this.modalService.dismissAll();
     
            },
            error: error => {
              this.modalService.open(Page404Component, { centered: true, backdrop: 'static', keyboard: false })
              console.error(error, 'data not collected') }
          });
   
         // this.modalService.dismissAll();
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
