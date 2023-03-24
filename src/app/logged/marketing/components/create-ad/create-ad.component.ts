import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss']
})
export class CreateAdComponent implements OnInit {

  form: FormGroup;
  notImage = true;
  selectFile: any = [];
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      status: [''],
      description: [''],
      img: [''],
    })
  }
  ngOnInit(): void {
  }
  exit() {
    this.modalService.dismissAll()
  }
  confirm() {
    window.alert('confirm ')
  }
  onSelectFile(event) {
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
}
