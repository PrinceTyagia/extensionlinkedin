// main ulHeader
let ulHeader = document.querySelector("ul.global-nav__primary-items");

// create a li and add class in li
let liViewPosts = document.createElement("li");
liViewPosts.classList.add("global-nav__primary-item");

// create a a tag and set attributes or add classes 
let aViewPosts = document.createElement("a");
aViewPosts.setAttribute("target", "_blank");
aViewPosts.setAttribute("href", "https://www.linkedin.com/my-items/saved-posts/");
aViewPosts.classList.add("app-aware-link", "global-nav__primary-link");

// create a two div outer and inner div
let divOuter = document.createElement("div");
divOuter.classList.add("ivm-image-view-model", "global-nav__icon-ivm")
let divInner = document.createElement("div");
divOuter.classList.add("ivm-view-attr__img-wrapper", "display-flex");

let img = document.createElement("img");
img.setAttribute("src", chrome.runtime.getURL("images/saved.png"));
img.setAttribute("id","imgSaved")
// append img to divInner
divInner.appendChild(img);
divOuter.appendChild(divInner);
aViewPosts.appendChild(divOuter)

let spanViewPosts = document.createElement("span");
spanViewPosts.classList.add("t-12","break-words","block","t-black--light","t-normalglobal-nav__primary-link-text");
spanViewPosts.innerHTML = "Saved"
// append the new span to the end of the document so that it can be inserted into the document   

//append  divOuter in aViewPosts

aViewPosts.appendChild(spanViewPosts);
//append child in li aViewPost
liViewPosts.appendChild(aViewPosts);
//append child in li li aViewPosts 
ulHeader.appendChild(liViewPosts)


// document.addEventListener("keypress", handleKbd);

// function handleKbd(event) {
//     console.log(event);
//     if (event.shiftKey && event.altKey && event.key === 'o') {
//         aViewPosts.click();
//     }
// }
document.addEventListener("keypress", handleKbd);
function handleKbd(event)  {
    if ( event.code === 'KeyO') {
        // console.log("hello");
        aViewPosts.click();
    }
}






let speechRecognition = new webkitSpeechRecognition(); // Use lowercase 'w'
speechRecognition.continuous = true;
speechRecognition.lang = 'en-in';
speechRecognition.start();

speechRecognition.onresult = (event) => {
    let transcript = event.results[event.results.length - 1][0].transcript; // Corrected index
    if (transcript.trim().toLowerCase().includes("open saved post")) {
        aViewPosts.click();
    }
};