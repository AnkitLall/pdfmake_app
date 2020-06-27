

const renderPdf = () =>{
    var dd = {
        content: [
            {text: 'Tables', style: 'header'}
        ]
    }

    createPdfKitDocument(dd);
}