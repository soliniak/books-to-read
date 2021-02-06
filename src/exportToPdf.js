import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

const exportToPdf = () => {
    const exportBtn = document.querySelector('.export-to-pdf');
    
    exportBtn.addEventListener('click', () => {
        const table = document.querySelector('body');
        const header = table.querySelector('header');
        const main = table.querySelector('main');

        header.style.maxWidth = '100%';
        main.style.maxWidth = '100%';
        table.style.backgroundColor = '#FFFFFF';

        html2canvas(table)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png', 1.0);
                const pdf = new jsPDF();

                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                
                pdf.addImage(imgData, 'JPEG', 10, 0, pdfWidth - 20, pdfHeight - 5);
                pdf.save('lista-ksiazek-do-przeczytania.pdf');
            });

        table.style.backgroundColor = '';
        header.style.maxWidth = '';
        main.style.maxWidth = '';
    });
};

export default exportToPdf;