import { Component, inject, OnInit } from '@angular/core';
import { doc, DocumentSnapshot, Firestore, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  // Injeta ActivatedRoute e Firestore.
  private activatedRoute = inject(ActivatedRoute);
  private firestore: Firestore = inject(Firestore);

  // Armazena id do documento.
  private docId: string = '';

  // Armazena documento.
  private docSnap !: DocumentSnapshot;

  // Armazena dados do documento para a view.
  public thing: any;

  constructor() {

  }
  async ngOnInit() {

    // Recupera o Id da rota.
    this.docId = this.activatedRoute.snapshot.paramMap.get('id') as string

    // Obtém o documento pelo Id.
    this.docSnap = await getDoc(doc(this.firestore, 'things', this.docId));

    // Extrai dados do documento.
    this.thing = this.docSnap.data();
  }

}
