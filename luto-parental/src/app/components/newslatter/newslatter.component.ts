import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/core/request.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newslatter',
  templateUrl: './newslatter.component.html',
  styleUrls: ['./newslatter.component.scss']
})
export class NewslatterComponent implements OnInit {

  constructor(
    private requestService: RequestService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  newsForm!: FormGroup;

  ngOnInit() {
    this.newsForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  // ================= Verifica se o formulário foi preenchido =================
  formPreenchido(): boolean{
    const formNews = this.newsForm.value;
    return formNews.nome, formNews.email;
  }

  openSnackBar(text: string, panelClass: string) {
    this.snackBar.open(text, '', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 8 * 1000,
      panelClass: [panelClass],
    });
  }

  // ================= Enviar Newsletter =================
  enviar(formNews: FormGroup) {

    const nome = formNews.get('nome')?.value;
    const email = formNews.get('email')?.value;
    const form = formNews;


    this.requestService.enviarNewsletter(nome, email).subscribe(
      (response) => {
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

}
