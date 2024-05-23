/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/request.service';
import { Historia, VerificadorQrCode } from 'src/app/interfaces';


@Component({
 selector: 'app-como-ajudar',
 templateUrl: './como-ajudar.component.html',
 styleUrls: ['./como-ajudar.component.scss']
})
export class ComoAjudarComponent implements OnInit {

 ajudaForm!: FormGroup;
 historias: Historia[] = [];
 codigoVerificador = 0;
 codigoInvalido = false;
 codigoVerificado = false;


 constructor(
   private requestService: RequestService,
   private formBuilder: FormBuilder,
   private snackBar: MatSnackBar,
   private router: Router
 ) {}


 ngOnInit() {
    // ================= Criação dos campos do fomulário =================
    this.ajudaForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.email],
      codigo: [{ value: '', disabled: true }, [Validators.required, Validators.pattern(/^[0-9]+$/)]]
    })
   this.mostrarHistorias();
 }

 formPreenchido(): boolean {
  const formAjuda = this.ajudaForm.value;
  return formAjuda.nome, formAjuda.email;
}

openSnackBar(text: string, panelClass: string) {
  this.snackBar.open(text, '', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 8 * 1000,
    panelClass: [panelClass],
  });
}

// ================= Envia os dados para API =================
enviar(formComoAjudar: FormGroup) {

  const nome = formComoAjudar.get('nome')?.value;
  const email = formComoAjudar.get('email')?.value;

  this.requestService.emailVerificador(nome, email).subscribe(
    (response) => {
      console.log(response);

      // Habilita o input do código para que o usuário insira o código que recebeu no email
      this.ajudaForm.get('codigo')?.enable();
      this.openSnackBar('O seu código verificador acabou de ser enviado!', 'green');

      console.log("Verificação do QR Code enviada!");
    },
    (erro) =>{
      this.openSnackBar('Erro ao enviar o código verificador!', 'red')
      console.log("Erro ao enviar verificação", erro);
    }
  )
}

// ================= Verifica o código verificador do usuário e libera o QrCode =================
verificarCodigo() {

  const codigo = this.ajudaForm.get('codigo')?.value;
  const email = this.ajudaForm.get('email')?.value;


  this.requestService.verificadorCodigo(codigo, email).subscribe(
    (response: VerificadorQrCode) => {

      // this.codigoVerificador = response.codigo;
      console.log('Validador do Código: ', response)

      if(response) {
        console.log('Código verificado com sucesso!');
        this.codigoInvalido = false;
        this.codigoVerificado = true;
      } else {
        console.log('Código inválido');
        this.codigoInvalido = true;
        this.codigoVerificado = false;
      }
    },
    (erro) => {
      console.log('Erro ao verificar código', erro)
    }
  )
 }

 mostrarHistorias(){
   this.requestService.buscarHistorias().subscribe(
     (depoimentos) => {
       this.historias = depoimentos;
       console.log('Histórias', this.historias);
     },
     (error) => {
       console.log('Erro ao buscar histórias', error)
     }
   )
 }

 selecionarInformacao(id: number, idTipoInformacao:number, titulo: string | null, texto: string, data: string| Date, img?:string){
  console.log('Chegou no selecionarInformacao', id, titulo, texto, data, img);



  this.router.navigate(['noticia-selecionada/'], {
    queryParams: {
      id: id,
      idTipoInformacao: idTipoInformacao,
      titulo: titulo,
      texto: texto,
      data: data,
      rotaNome: 'Depoimentos',
      secaoAtiva: 'depoimentos',
      img: img,
      title: 'Mural de',
      markTitle: 'histórias',
      descricao: 'Você não está sozinho(a). Receba e ofereça apoio na companhia de outros cuidadores que compreendem a sua dor.',
    }
  })
}

  // ================= Pega os campos do formulário =================
 get nome(){
  return this.ajudaForm.get('nome')!;
}

get email(){
  return this.ajudaForm.get('email')!;
}

get codigo(){
  return this.ajudaForm.get('codigo')!;
}


}
