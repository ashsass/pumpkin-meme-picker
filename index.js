import { catsData } from "./data.js";
const emotionRadios = document.getElementById('emotion-radios')
const imageButton = document.getElementById('get-image-btn')
const gifCheckbox = document.getElementById('gifs-only-option')

imageButton.addEventListener('click', getMatchingCatsArray)

function getMatchingCatsArray() {
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifCheckbox.checked

        const matchingCatArray = catsData.filter(cat => {
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }else {
                return cat.emotionTags.includes(selectedEmotion)
            }
            
        })
        console.log(matchingCatArray)

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
