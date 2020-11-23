import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as Excel from "exceljs/dist/exceljs.min.js";


@Injectable({
  providedIn: 'root'
})
export class ExcelgenerateService {

  blobType: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  constructor() { }

   excels(data:any,excelname){
     
    var footer = ["Manicur - Mp"];
    var header = ["Facturas Da Tabla de Clientes"];

    var keys = [
      { key: 'nome', width:50, style: { font: { name: 'Calibri' } } },
      { key: 'description', width: 70 },
      { key: 'fulldescription', width: 70 },
      { key: 'price', width: 20 },
      { key: 'avatar', width:  40 },
      { key: 'date', width: 40 }
    ];
    var Cols = ['Nome','DescriÃ§Ã£o','DescriÃ§Ã£o longa', 
    'PreÃ§o','Imagem', 'Data De CriaÃ§Ã£o'] 
        
      var workbook = new Excel.Workbook();
      workbook.creator = 'Web';
      workbook.lastModifiedBy = 'Web';
      workbook.created = new Date();
      workbook.modified = new Date();
      workbook.addWorksheet('Facturas Da Tabla de Clientes', { views: [{ state: 'frozen', ySplit: 6, xSplit: 2, activeCell: 'C2', showGridLines: true }] })
      var sheet = workbook.getWorksheet(1);
       
      sheet.addRow(header);
      sheet.getCell('A2').value = "Estado: "
      sheet.getCell('A3').value = "Nome Cliente: "
      sheet.getCell('A4').value = "DirecÃ§Ã£o: "
      
      sheet.getCell('A1').font = { family: 4, name: 'Calibri', size: 25, bold: true, underline: true, locked:false };
      sheet.addRow("");
      sheet.getRow(6).values = Cols;
      sheet.columns = keys;
      sheet.getRow(6).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'cac9c7' },
      }
       sheet.addRows(data);


      sheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
        row.eachCell(function (cell, colNumber) {
          cell.font = {
            name: 'Arial',
            family: 2,
            bold: false,
            size: 12,
  
          };
          cell.alignment = {
            vertical: 'left', horizontal: 'left'
          };
          if (rowNumber <= 6) {
            row.height = 20;
            cell.font = {
              bold: true
            };
          }
          
          if (rowNumber >= 6) {
  
  
            cell.alignment = {
              vertical: 'left', horizontal: 'left'
            };
            for (var i = 1; i < 7; i++) {
             
              if (rowNumber == 6) {
                cell.font = {
                  color: { argb: '8a2be2' },
                  bold: true,
                  size:12
                };
                row.height = 25;
                row.getCell(i).fill = {
                  type: 'pattern',
                  pattern: 'solid',
                  fgColor: { argb: 'ffe484' }
                };
              }
              row.getCell(i).border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
              };
            }
          }
        });
      }); 
      sheet.addRow(''); 
      sheet.addRow(footer); 
      //gera-o no formato execel
      workbook.xlsx.writeBuffer().then(Data => {
        var blob = new Blob([Data], { type: this.blobType });

        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = excelname;
        a.click();
      });
   }
}
