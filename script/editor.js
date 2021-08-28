const showPreview = () => {
    var htmlCode = document.getElementById('htmlCode').value; 
    var cssCode = `<style> ${document.getElementById("cssCode").value} </style>`; 
    var jsCode = `<script> ${document.getElementById("jsCode").value} </script>`; 

    var frame = document.getElementById('preview-window').contentWindow.document; 

    frame.open(); 
    frame.write(
    `
    <!DOCTYPE html>
    <html>
    <head> 
        <title>cochocco online editor</title> 
        ${cssCode}
    </head>
    <body>
        ${htmlCode}
    </body>
    ${jsCode}
    </html> 
    `
    );
    frame.close(); 
}