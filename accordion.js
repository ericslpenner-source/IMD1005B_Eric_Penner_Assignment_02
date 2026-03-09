const accordionElements = document.getElementsByTagName("details");
const accordion = document.getElementById("accordion");
for (let faqOption of accordionElements){
    faqOption.addEventListener("toggle", accordionClose)
}
//accordion.addEventListener("toggle", accordionClose)
function accordionClose(event){
    for (let elementContent of accordionElements) {
        if(event.target != elementContent && event.newState == "open"){
                elementContent.open = false;
        }
    }
}
