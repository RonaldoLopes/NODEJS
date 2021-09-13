var pdf = require("html-pdf");
const { Module } = require("module");

class PDFWriter{

    static WritePDF(fileName, html){
        pdf.create(html, {}).toFile(fileName,(err) =>{});
    }

}
module.exports = PDFWriter;