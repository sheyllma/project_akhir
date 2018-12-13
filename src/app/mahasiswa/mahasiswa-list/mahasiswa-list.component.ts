import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Mahasiswa } from '../mahasiswa.model';
import { MahasiswaService } from '../mahasiswa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mahasiswa-list',
  templateUrl: './mahasiswa-list.component.html',
  styleUrls: ['./mahasiswa-list.component.css']
})
export class MahasiswaListComponent implements OnInit {
  // @Output() mahasiswaWasSelected=new EventEmitter<mahasiswa>();
  mahasiswas:Mahasiswa[];

  constructor(private mahasiswaService:MahasiswaService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(){
    this.mahasiswas= this.mahasiswaService.getMahasiswas();
  }

  // onMahasiswaSelected(mahasiswa:Mahasiswa){
  //   this.mahasiswaWasSelected.emit(mahasiswa);
  // }
  onNewMahasiswa(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
