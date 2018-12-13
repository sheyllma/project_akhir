import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-mahasiswa-edit',
  templateUrl: './mahasiswa-edit.component.html',
  styleUrls: ['./mahasiswa-edit.component.css']
})
export class MahasiswaEditComponent implements OnInit {
id:number;
editMode=false;

  constructor( private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;

        console.log(this.editMode);
      }
    )
  }

}
