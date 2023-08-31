const printButton = document.getElementById('print-btn')
const printIcon = document.getElementById('print-icon')

printButton.addEventListener('click', () => {
    window.print()
})