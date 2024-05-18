/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RequestService } from 'src/app/core/request.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Estados, Historia } from 'src/app/interfaces';

@Component({
  selector: 'app-modal-historias',
  templateUrl: './modal-historias.component.html',
  styleUrls: ['./modal-historias.component.scss']
})
export class ModalHistoriasComponent implements OnInit {

  historiaForm!: FormGroup;
  estados: Estados[] = [];
  estadoSelecionado = '';
  arquivoSelecionado: File | undefined;
  historia!: Historia;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ModalHistoriasComponent>,
    private formBuilder: FormBuilder,
    private requestService: RequestService
  ) {
  this.dialogRef.afterOpened().subscribe(() => {
    setTimeout(() => {
      console.log('Formulário aberto');
    })
  })
}

ngOnInit(){
  // ================= Criação dos campos do fomulário =================
  this.historiaForm = this.formBuilder.group({
    nome: [''],
    estado: ['', [Validators.required]],
    genero: ['', [Validators.required]],
    titulo: [''],
    texto: ['', [Validators.required]],
    historiaImg: [''],
  })
  this.mostrarEstados();
}

// ================= Verifica se o formulário foi preenchido =================
formPreenchido(): boolean{
  const formHistorias = this.historiaForm.value;
  return formHistorias.estado, formHistorias.genero, formHistorias.texto;
}

// ================= Fecha o Modal =================
fecharModal(){
  this.dialogRef.close();
  console.log('Formulário fechado');
}

// ================= Envia os dados para API =================
enviar(formHistorias: FormGroup){

  // Chama a função para transformar a imagem selecionada do usuário para bytes
  // const imagemBinaria = this.transformarImagemEmBinario(formHistorias.get('historiaImg')?.value);

  // Armazena o valor dos bytes no campo do form
  // this.historiaForm.get('historiaImg')?.setValue(imagemBinaria);

  const estadoSelecionado = formHistorias.get('estado')?.value;
  const idEstado = this.mapearEstados(estadoSelecionado);
  formHistorias.get('estado')?.setValue(idEstado);

  this.requestService.enviarHistorias(this.historiaForm.value).subscribe(
    (historiaForm) => {
      this.historia = historiaForm;
      console.log('História enviada com sucesso!', this.historia)
      this.fecharModal()
    },
    (error) => {
      console.log('Erro ao enviar histórico', error)
    }
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
onFileSelected(event: any) {
  this.arquivoSelecionado = event.target.files[0];
}


// ================= Transforma imagem em binário =================
transformarImagemEmBinario(imagem: File) {

  // Ler o conteúdo do arquivo selecionado pelo usuário
  const render = new FileReader();

  render.onload = (event) => {
    try {
      const resultadoBinario: string | ArrayBuffer | null = event.target?.result ?? null;

      // Utilizando um switch para os diferentes tipos de resultados
      switch (typeof resultadoBinario) {
        case 'string':
          // Se for uma string, é uma URL de dados (data URL), podemos usar diretamente se necessário
          console.log('Resultado binário:', resultadoBinario);
          break;
        case 'object':
          // Se for um objeto (ArrayBuffer), converte em binário
          // const arrayDeBytes = new Uint8Array(resultadoBinario as ArrayBuffer);
          // console.log('Resultado binário (ArrayBuffer):', arrayDeBytes);
          break;
        default:
          console.error('Resultado binário inválido');
      }

    } catch (error) {
      console.log('Erro ao tentar transformar imagem em binário', error)
    }
  };
  // Ler o conteúdo do arquivo como uma URL de dados (data URL)
  render.readAsDataURL(imagem);
}

mostrarEstados(){
  this.requestService.buscarEstados().subscribe(
    (estado) => {
      this.estados = estado;
      console.log('Estados', this.estados);
    },
    (error) => {
      console.log('Erro ao buscar estados', error)
    }
  )
}

mapearEstados(estado: string){
  const estadoSelecionado = this.estados.find(estados => estados.nome === estado);

  if(estado) {
    const idEstado = estadoSelecionado?.id;
    console.log('ID do estado seleciondado: ', idEstado);
    return idEstado;
  }
  return null;
}

  // ================= Pega os campos do formulário =================
  get nome(){
    return this.historiaForm.get('nome')!;
  }

  get estado(){
    return this.historiaForm.get('estado')!;
  }

  get genero(){
    return this.historiaForm.get('genero')!;
  }

  get titulo(){
    return this.historiaForm.get('titulo')!;
  }

  get texto(){
    return this.historiaForm.get('texto')!;
  }

  get historiaImg(){
    return this.historiaForm.get('historiaImg')!;
  }
}

