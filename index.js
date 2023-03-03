import { catsData } from "./data.js";
const emotionRadios = document.getElementById('emotion-radios')
const imageButton = document.getElementById('get-image-btn')
const gifCheckbox = document.getElementById('gifs-only-option')

imageButton.addEventListener('click', getMatchingCatsArray)

function getMatchingCatsArray() {
    const isGif = gifCheckbox.checked
    console.log(isGif)

    if (document.querySelector('input[type="radio"]:checked')) {
        const checkedRadio = document.querySelector('input[type="radio"]:checked').value
        console.log(checkedRadio)
    } 
}

emotionRadios.addEventListener('change', highlightCheckedOption)


function highlightCheckedOption(e){
    const radioItems = document.getElementsByClassName('radio')
    for (let item of radioItems){
        item.classList.remove("highlight")
    } //Clears all highlight field before moving on to another radio item

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getEmotionsArray(cats){
    const emotionArray = [];

    for(let cat of cats){
        for(let emotion of cat.emotionTags){
            if(!emotionArray.includes(emotion)){
                emotionArray.push(emotion)
            }
        }
    }

    return emotionArray
}


function renderEmotionsRadios(cats){
    const emotions = getEmotionsArray(cats)
    let radioItems = '';
    for (let emotion of emotions){
        radioItems += `
            <div class="radio">
                <label for="${emotion}">${emotion}</label>
                <input 
                    type="radio" 
                    value="${emotion}" 
                    id="${emotion}" 
                    name="emotion-choice"
                >
            </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
