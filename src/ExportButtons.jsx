import html2canvas from 'html2canvas';
import Icon from '@mdi/react';
import { mdiPrinter } from '@mdi/js';

export default function ExportButtons() {

    const printResume = () => {
        const resume = document.querySelector('.resume');

        html2canvas(resume, { useCORS: true }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const printWindow = window.open('', '', 'height=600,width=800');
            
            const imgElement = new Image();
            imgElement.src = imgData;
    
            // Wait for the image to load before printing
            imgElement.onload = () => {
                printWindow.document.write('<html><head><title>Print Resume</title>');
                printWindow.document.write(`
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            text-align: center;
                            background-color: #fff;
                        }
                        img {
                            width: 100%; 
                            height: auto;
                        }
                        /* Media query for print */
                        @media print {
                            /* Remove all margins and padding */
                            body {
                                margin: 0;
                                padding: 0;
                            }

                            /* Remove any extra page margins or padding */
                            @page {
                                margin: 0;
                            }

                            /* Hide unwanted headers and footers (some browsers still inject them) */
                            header, footer, nav {
                                display: none;
                            }

                            /* Prevent page numbers, date, and other browser defaults in print preview */
                            body, html {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    </style>
                `);
                printWindow.document.write('</head><body>');
                printWindow.document.write(`<img src="${imgData}" style="max-width: 100%; height: auto;" />`);
                printWindow.document.write('</body></html>');
                printWindow.document.close();
                
                // Trigger the print dialog after the content is ready
                setTimeout(() => {
                    printWindow.print();
                    // Close the print window after printing
                    printWindow.close();
                }, 500); // Delay to ensure rendering
            };
        }).catch(error => {
            console.error("Error generating canvas:", error);
        });;
    }

    return (
        <>
            <button 
                className="print-button"
                onClick={() => printResume()}
            >
                <Icon path={mdiPrinter} size={1.5} />
            </button>
        </>
    )
}