import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestService } from 'src/app/core/request.service';
import { Noticia, ReceberEmail, Tag } from 'src/app/interfaces';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  contatoForm!: FormGroup;
  noticia: Noticia[] = [];
  tag: Tag[] = [];


  constructor(
    private requestService: RequestService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    // ================= Criação dos campos do fomulário =================
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.email],
      mensagem: ['', Validators.required],
      isChecked: [false]
    })

    this.mostrarNoticias();
    this.mostrarTags();
  }

  // ================= Verifica se o formulário foi preenchido =================
  formPreenchido(): boolean{
    const formContato = this.contatoForm.value;
    return formContato.nome, formContato.email, formContato.mensagem;
  }

  openSnackBar(text: string, panelClass: string) {
    this.snackBar.open(text, '', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 8 * 1000,
      panelClass: [panelClass],
    });
  }

   // ================= Enviar Form Contatos =================
   enviar(formContato: FormGroup) {

    const nome = formContato.get('nome')?.value;
    const email = formContato.get('email')?.value;
    const mensagem = formContato.get('mensagem')?.value;
    const isChecked = formContato.get('isChecked')?.value;
    const form = formContato;

    const emailContato: ReceberEmail ={
      nome: nome,
      email: email,
      mensagem: mensagem,
      isChecked: isChecked
    };


    this.requestService.receberEmail(emailContato).subscribe(
      (response) => {
        console.log(response)
        this.openSnackBar('Newsletter enviada com sucesso! Muito obrigado pela sua assinatura!', 'green')
        console.log('Newsletter enviada com sucesso!')
        form.reset();
      },
      (error) => {
        this.openSnackBar('Erro ao enviar Newsletter', 'red');
        console.log('Erro ao enviar Newsletter', error)
      }
    )
  }

  mostrarTags(){
    this.requestService.buscarTags().subscribe(
      (tags) => {
        this.tag = tags;
        console.log('Tags: ', this.tag);
      },
      (error) => {
        console.log('Erro: ', error)
      }
    );
  }

  mostrarNoticias(){
    this.requestService.buscarNoticias().subscribe(
      (noticias) => {
        this.noticia = noticias;
        console.log('Notícias', this.noticia)
      },
      (error) => {
        console.log( 'Erro ao mostrar notícias', error)
      }
    )
  }


    // ================= Pega os campos do formulário =================
    get nome(){
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.contatoForm.get('nome')!;
    }

    get email(){
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.contatoForm.get('email')!;
    }

    get mensagem(){
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.contatoForm.get('mensagem')!;
    }

    get isChecked(){
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return this.contatoForm.get('isChecked')!;
    }

}
