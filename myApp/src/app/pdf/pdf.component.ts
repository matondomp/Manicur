import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  rodaPe(doc,x,y,pe){
    doc.setDrawColor(255,255,255)
    doc.setFillColor(255, 228, 132)
    doc.rect(0,y+240,1000,pe,'FD')
    doc.textWithLink('unig', x, y+250, { url: 'http://epasln.unig-erp.com/dashboard' });
  }

  border(doc){
    
    doc.setDrawColor(0,0,0)
     // horizontal line 
      doc.setLineWidth(1)
      doc.line(1, 1,209, 1)
      doc.setLineWidth(1)
      doc.line(1, 295, 209, 295)
      
      //vertical
      doc.setLineWidth(1)
      doc.line(209,1, 209, 295)
      doc.setLineWidth(1)
      doc.line(1,1, 1, 295)
  }

  head(doc,top){
    doc.setDrawColor(255,255,255)
    doc.setFillColor(255, 228, 132)
    doc.rect(0,0,1000,20,'FD')

    doc.setDrawColor(255,255,255)
    doc.setFillColor(255, 228, 132)
    doc.rect(0,top,1000,20,'FD')

    doc.setDrawColor(255,255,255)
    doc.setFillColor(255, 228, 132)
    doc.rect(0,top+25,1000,20,'FD')
    
    doc.addFont('Menlo-Regular', 'Menlo-Regular', 'bold')
    doc.setTextColor(138, 43, 226)
    doc.text('Fatura', 80,13)
  }

  pdf(){
    var doc = new jsPDF();
    var x=50,y=80,pe=20,top=25
        
     this.head(doc,top)
    this.rodaPe(doc,x,y-40,pe)
    this.border(doc)
    for(var i=0;i<23;i++){
       doc.setDrawColor(255, 228, 132)
       //doc.setFillColor(0)
       doc.rect(x,y,80,50,'FD')
       if(i>1){
         
         y+=55
        if(i%4==0){
          y=20
         // this.rodaPe(doc,x,y)
          doc.addPage()
         }
          this.rodaPe(doc,x,y+20,pe)
          this.border(doc)
          
        }
       
    }
/* 
    doc.autoPrint(); */
    doc.output("dataurlnewwindow")
  }

 

  public imprimirAutoRecolha() {
    
    var doc = new jsPDF();
    
    var CurrentDate = new Date();
    /* 
    doc.setProperties({
      title: 'Auto_recolha_'+ dados.numeroSerieTpa+'_'+ moment(CurrentDate).format('DD') + "-" + moment(CurrentDate).format('MM') + "-" + moment(CurrentDate).format('YYYY') + " "
      + moment(CurrentDate).format('H') + "-" + moment(CurrentDate).format('m'),
      subject: 'Auto entrega',
      author: 'Itgest'
    });
    */
   var imgData = "data:image/png;base64,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"
   
   var dados ={
     clientefilhos:"770537962 - Angola Prev, Lda. - Filial de",clienteNumero:[100],
     clienteNome:"mp",clienteMorada:"vala",clienteNif:"nv",estabelecimentoNome:"local",
     estabelecimentoMorada:"belas",marcaModelo:"np",numeroSerieTpa:"tpa",
     supervisorNumeroSerie:"ba",simNumeroSerie:"4444",
     
    }
   var kit=[
      {
        marcaModelo:"ola",
        numeroSerieTpa:"lo",
        supervisorNumeroSerie:"ip",
        simNumeroSerie:"uy"
      },
      {
        marcaModelo:"ola",
        numeroSerieTpa:"lo",
        supervisorNumeroSerie:"ip",
        simNumeroSerie:"uy"
      },
      {
        marcaModelo:"ola",
        numeroSerieTpa:"lo",
        supervisorNumeroSerie:"ip",
        simNumeroSerie:"uy"
      },
      {
        marcaModelo:"ola",
        numeroSerieTpa:"lo",
        supervisorNumeroSerie:"ip",
        simNumeroSerie:"uy"
      },
      {
        marcaModelo:"ola",
        numeroSerieTpa:"lo",
        supervisorNumeroSerie:"ip",
        simNumeroSerie:"uy"
      }
   ]

    doc.addImage(imgData, 'JPEG', 150, 8, 33, 18)

    doc.setFontSize(11)
    doc.setFont("Calibri");
    /* doc.setFontType("bold"); */
    doc.text("AUTO DE ENTREGA DE TERMINAL DE PAGAMENTO AUTOMÁTICO", 40, 34);
    doc.text("IDENTIFICAÇÃO EMPRESA", 15, 45);
    var yline = 10
    // Empty square

    //text
    /* doc.setFontType("normal"); */



    if (dados.clienteNumero.length >= 68) {

      doc.rect(90, 50, 90, yline + 5);
      doc.text("" + (dados.clienteNumero == null ? "" : dados.clienteNumero), 92, 57, { maxWidth: 67 });
      doc.text("Nº Cliente", 65, 59);
    } else {
      doc.rect(90, 50, 90, yline);
      doc.text("" + (dados.clienteNumero == null ? "" : dados.clienteNumero), 92, 57);
      doc.text("Nº Cliente", 65, 56);
    }


    if (dados.clienteNumero.length >= 68 || dados.clienteNome.length >= 68 ||
      dados.clienteMorada.length >= 68) {

      doc.rect(90, 70, 90, yline + 5);
      doc.text("Denominação Social", 49, 77);
      doc.text("" + (dados.clienteNome == null ? "" : dados.clienteNome), 92, 77, { maxWidth: 67 });
    } else {
      doc.rect(90, 65, 90, yline);
      doc.text("" + (dados.clienteNome == null ? "" : dados.clienteNome), 92, 72);
      doc.text("Denominação Social", 49, 72);
    }


    if (dados.clienteNumero.length >= 68 || dados.clienteNome.length >= 68 ||
      dados.clienteMorada.length >= 68) {
      /* doc.setFontType("normal"); */

      doc.rect(90, 90, 90, yline + 5);
      doc.text("Morada", 69, 100)
      doc.text("" + (dados.clienteMorada == null ? "" : dados.clienteMorada), 92, 100, { maxWidth: 67 })
    } else {
      /* doc.setFontType("normal"); */
      doc.rect(90, 80, 90, yline);
      doc.text("" + (dados.clienteMorada == null ? "" : dados.clienteMorada), 92, 86)
      doc.text("Morada", 69, 86)
    }

    if (dados.clienteNumero.length >= 68 || dados.clienteNome.length >= 68 ||
      dados.clienteMorada.length >= 68) {
      doc.rect(90, 110, 90, yline);
      doc.text("" + (dados.clienteNif == null ? "" : dados.clienteNif), 75, 117);
      doc.text("NIF", 92, 117)
    } else {
      doc.rect(90, 95, 90, yline);
      doc.text("NIF", 75, 102);
      doc.text("" + (dados.clienteNif == null ? "" : dados.clienteNif), 92, 102)
    }

    // Empty square

    if (dados.estabelecimentoNome.length >= 68 || dados.clienteNumero.length >= 68
      || dados.clienteNome.length >= 68 ||
      dados.clienteMorada.length >= 68) {

      /* doc.setFontType("bold"); */
      doc.text("DADOS DO ESTABELECIMENTO", 15, 130);
      //text
      /* doc.setFontType("normal"); */
      doc.rect(90, 135, 90, yline + 5);

      doc.text("Nome", 70, 142);
      doc.text("" + (dados.estabelecimentoNome == null ? "" : dados.estabelecimentoNome), 92, 142, { maxWidth: 67 });
    } else {

      /* doc.setFontType("bold"); */
      doc.text("DADOS DO ESTABELECIMENTO", 15, 115);
      //text
      /* doc.setFontType("normal"); */
      doc.rect(90, 120, 90, yline);
      doc.text("" + (dados.estabelecimentoNome == null ? "" : dados.estabelecimentoNome), 92, 127);
      doc.text("Nome", 70, 128);
    }

    if (dados.estabelecimentoMorada.length >= 68 || dados.estabelecimentoNome.length >= 68
      || dados.clienteNumero.length >= 68 || dados.clienteNome.length >= 68 ||
      dados.clienteMorada.length >= 68) {
      /* doc.setFontType("normal"); */
      doc.rect(90, 155, 90, yline + 5);

      doc.text("" + (dados.estabelecimentoMorada == null ? "" : dados.estabelecimentoMorada), 92, 162, { maxWidth: 67 });
      doc.text("Morada", 68, 162)
    } else {
     /*  doc.setFontType("normal"); */
      doc.rect(90, 135, 90, yline);
      doc.text("" + (dados.estabelecimentoMorada == null ? "" : dados.estabelecimentoMorada), 92, 142);
      doc.text("Morada", 68, 142)
    }

    var y = 0
    var t, k
    var equipe = 150
    if (dados.clienteNumero.length >= 68 || dados.estabelecimentoNome.length >= 68
      || dados.clienteNome.length >= 68 || dados.clienteMorada.length >= 68) {
      y = 190
      equipe = 183
      k = 189
      t = 190
    } else {
      y = 162
      k = 156
      t = 160
    }

    var x = 20
    var soma = 0

    var index = 0
    //input
    doc.setLineWidth(0.3);
    /* doc.setFontType("bold"); */
    doc.text("EQUIPAMENTO", 15, equipe)
    for (var i = 0; i < kit.length; i++) {
       
      if(i>0){
        y=5
       if(i%2==0){
        k = 10
        t = 15
        y = 0;
        x = 0
        // this.rodaPe(doc,x,y)
        }
        
    
      doc.addPage(); 
      }
      index += 1
      /* doc.setFontType("bold"); */
      doc.text("Kit:" + index, 40, k)

      doc.text("TPA", 70, t)
     /*  doc.setFontType("normal"); */
      doc.rect(90, y, 90, 10);
      doc.rect(90, y + x - 10, 90, 10);
      doc.rect(90, y + 2 * x - 20, 90, 10);
      doc.rect(90, y + 4 * x - x - 25, 90, 10);
      doc.rect(90, y + 8 * x - 4 * x - 30, 90, 10);

      doc.text("Marca:", 70, y + 6);
      doc.text("Modelo:", 68, y + x - 6)
      doc.text("Nº Série:", 68, y + 2 * x - 14)
      doc.text("Cartão Supervisor nº:", 49, y + 4 * x - x - 19)
      doc.text("Sim Card Nº:", 61, y + 8 * x - 4 * x - 24)
      /* doc.setFontType("normal"); */
      doc.text("" + (kit[i].marcaModelo == null ? "" : kit[i].marcaModelo), 92, y + 6);
      doc.text("" + (kit[i].marcaModelo == null ? "" : kit[i].marcaModelo), 92, y + x - 4)
      doc.text("" + (kit[i].numeroSerieTpa == null ? "" : kit[i].numeroSerieTpa), 92, y + 2 * x - 14)
      doc.text("" + (kit[i].supervisorNumeroSerie == null ? "" : kit[i].supervisorNumeroSerie), 92, y + 4 * x - x - 19)
      doc.text("" + (kit[i].simNumeroSerie == null ? "" : kit[i].simNumeroSerie), 92, y + 8 * x - 4 * x - 24)
      footer(x, y)

     
    }

    function footer(x, y) {
      //fim kit
      doc.rect(110, 258, 70, 20);
      doc.rect(20, 258, 70, 20);

      /* doc.setFontType("normal"); */

      doc.text("Entregue por:", 39, 246);
      doc.text("Recebido por:", 130, 246);

      /* doc.setFontType("normal"); */

      doc.text("Data, Assinatura", 128, 275);
      doc.text("Data, Assinatura", 38, 275);


      doc.text("Banco Valor", 35, 288);
      doc.text("Cliente: _____________________", 112, 288);

    }


    doc.output("dataurlnewwindow");
  }


}
