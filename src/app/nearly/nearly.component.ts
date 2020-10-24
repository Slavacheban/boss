import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-nearly',
  templateUrl: './nearly.component.html',
  styleUrls: ['./nearly.component.scss']
})
export class NearlyComponent implements OnInit {
  public nearlyForm: FormGroup;
  public isDrawingSpinner: boolean;
  public number: number;
  public deep: number;
  public deepList = [1,2,3];

  constructor(private formBuilder: FormBuilder) {

    this.nearlyForm = this.formBuilder.group({
      number: [],
      deep: []
    });

  }

  ngOnInit() {
  }

}
