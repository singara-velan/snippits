import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  sampleForm: any;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.sampleForm = this.fb.group(this.generateFormGroup());
  }

  generateFormGroup() {
    const modal = {
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      hide: ''
    };
    return modal;
  }

  resetValidators() {
    if (this.sampleForm.controls.hide) {
      Object.keys(this.sampleForm.controls).forEach(key => {
        this.sampleForm.controls[key].setValidators(null);
        this.sampleForm.controls[key].updateValueAndValidity();
      });
    } else {
      Object.keys(this.sampleForm.controls).forEach(key => {
        this.sampleForm.controls[key].setValidators(this.generateFormGroup[key][1]);
        this.sampleForm.controls[key].updateValueAndValidity();
      });
    }
  }

}
