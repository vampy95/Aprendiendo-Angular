import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  public formulario:  FormGroup;
  public enviado:boolean = false;

  constructor(private formBuilder:  FormBuilder) {

  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  onSubmit(formulario){
    console.log(formulario);
    this.enviado = true;
  }

}
