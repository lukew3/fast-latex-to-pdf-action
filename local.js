const fs = require("fs");
const { PDFTeX } = require("texlive");
const pdftex = new PDFTeX();

const inPath = 'test.tex';
const outPath = 'out.pdf';
const inData = fs.readFileSync(core.getInput(inPath, "utf8"))
const outData = pdftex.compile(inData).then((pdf) => {
	pdftex.compile(inData).then((pdf) => {
		fs.open(outPath, 'w', (err, fd) => {
			if(err) {
				console.log('Cant open file');
			} else {
				fs.write(fd, pdf, 0, pdf.length, null, function(err,writtenbytes) {
					if(err) {
						console.log('Cant write to file');
					}else {
						console.log(writtenbytes +
						' characters added to file');
					}
				});
			}
		});
	});
})

