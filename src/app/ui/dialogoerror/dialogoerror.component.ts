import {Component, Input, OnInit} from '@angular/core';
import {DialogRole, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogoerror',
  templateUrl: './dialogoerror.component.html',
  styleUrls: ['./dialogoerror.component.css']
})
export class DialogoerrorComponent implements OnInit {
  mensajeError: 'Correo electrónico no registrado';
  constructor(private dialogoRef: MatDialogRef<DialogoerrorComponent>) { }
  ngOnInit(): void {
  }
  cerrarVentana(): void{
    this.dialogoRef.close();
  }
}
