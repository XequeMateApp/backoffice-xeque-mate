import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-ad',
  templateUrl: './delete-ad.component.html',
  styleUrls: ['./delete-ad.component.scss']
})
export class DeleteAdComponent implements OnInit {

  userData: any;
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      delete: [''],
    })
  }
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }
  exit() {
    this.modalService.dismissAll()
  }
  delete() {
  }
}
