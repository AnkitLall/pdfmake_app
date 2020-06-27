http = require('http');
const pdfmake = require('./pdfmake/js/Printer');
const pdfgenerator = require('./generatePdf');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var fonts = {
        Roboto: {
          normal: 'fonts/Nicholia.ttf',
          bold: 'fonts/Nicholia.ttf',
          italics: 'fonts/Nicholia.ttf',
          bolditalics: 'fonts/Nicholia.ttf'
        }
    };
    let docDefinition = pdfgenerator.generate();
    let printer = new pdfmake.default(fonts);
    let pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream('test.pdf'));
    pdfDoc.end();
    res.end();
}).listen(8080);
  
