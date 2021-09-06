const selectSubmitButtons = () => {
    return document.querySelectorAll("button[type=submit]")
}

var submit = selectSubmitButtons()[0]
var submitText = submit.textContent

const main = () => {
    var selects = document.querySelectorAll('select[name="data.LanguageId"]')
    if (!selects.length) {
        return;
    }
    
    var select = selects[0]
    var lang = select.options[select.selectedIndex].textContent
    submit.textContent = submitText + " | " + lang
}


setInterval(main, 500)
