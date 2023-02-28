import { catsData } from "./data.js";
const emotionRadios = document.getElementById('emotion-radios')

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
