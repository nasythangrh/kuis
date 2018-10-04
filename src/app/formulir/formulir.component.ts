import { Component, OnInit } from '@angular/core';
import { Data } from '../shared/data';
@Component({
  selector: 'app-formulir',
  templateUrl: './formulir.component.html',
  styleUrls: ['./formulir.component.css']
})
export class FormulirComponent implements OnInit {
  daftarData:Data[] = [];
  nim = '';
  nama = '';
  kelas = '';
  data;

  constructor() { }

  ngOnInit() {
  }

  tambahData(){
    this.data = new Data(this.nim, this.nama, this.kelas);
    this.daftarData.push(this.data);
    this.nim='';
    this.nama='';
    this.kelas='';
  }
}