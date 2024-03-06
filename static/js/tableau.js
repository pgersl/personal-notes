const selectors = document.querySelectorAll('.selector')
const allElements = document.querySelectorAll('.element')
const blockSelectors = document.querySelectorAll('.block-selector')

selectors.forEach(selector => {
    selector.addEventListener('click', function() {
        const targetClass = this.id.replace('-selector', '')
        const elements = document.querySelectorAll('.' + targetClass)
        if (!(this.classList.contains('active'))) {
            allElements.forEach(allElement => {
                allElement.classList.remove('active')
            })
            selectors.forEach(one => {
                one.classList.remove('active')
            })
            blockSelectors.forEach(one => {
                one.classList.remove('active')
            })
            this.classList.add('active')
            elements.forEach(element => {
                element.classList.add('active')
            })
        } else {
            allElements.forEach(allElement => {
                allElement.classList.remove('active')
            })
            selectors.forEach(one => {
                one.classList.remove('active')
            })
        }
    })
})

blockSelectors.forEach(blockSelector => {
    blockSelector.addEventListener('click', function() {
        const targetId = this.id.replace('-selector', '')
        const blockElements = document.querySelectorAll('#' + targetId + ' .element')
        console.log(targetId)
        if (!(this.classList.contains('active'))) {
            allElements.forEach(allElement => {
                allElement.classList.remove('active')
            })
            blockSelectors.forEach(one => {
                one.classList.remove('active')
            })
            selectors.forEach(one => {
                one.classList.remove('active')
            })
            this.classList.add('active')
            blockElements.forEach(blockElement => {
                blockElement.classList.add('active')
                const heliumElement = document.getElementById('helium')
                if (targetId == 's-block') {
                    heliumElement.classList.add('active')
                }
                else if (targetId == 'p-block') {
                    heliumElement.classList.remove('active')
                }
            })
        } else {
            allElements.forEach(allElement => {
                allElement.classList.remove('active')
            })
            blockSelectors.forEach(one => {
                one.classList.remove('active')
            })
        }
    })
})