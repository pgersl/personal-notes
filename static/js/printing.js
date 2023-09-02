const printButton = document.getElementById('print-btn')
const printIcon = document.getElementById('print-icon')

printButton.addEventListener('click', () => {
    printIcon.classList.remove('fa-print');
    printIcon.classList.add('fa-check');

    setTimeout(() => {
        printIcon.classList.remove('fa-check');
        printIcon.classList.add('fa-print');
        window.print()
    }, 1000);
})