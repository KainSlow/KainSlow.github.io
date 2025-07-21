
document.addEventListener("DOMContentLoaded", async()=>{
    let panel = document.querySelector(".panel");

    const requestURL = "/assets/data/info.json"
    const request = new Request(requestURL);
    const response = await fetch(request);
    const myInfo = await response.json();

    let buttons = document.querySelectorAll("button");
    buttons[0].addEventListener("click", (e)=>{
        panel.innerHTML = "";
        displayInfo(panel, myInfo.about);
    });
    buttons[1].addEventListener("click", (e)=>{
        panel.innerHTML = "";
        displayInfo(panel, myInfo.gamedev);
        createSlider(panel, myInfo.gamedevImgs);
    });
    /**
     * 
    buttons[2].addEventListener("click", (e)=>{
        panel.innerHTML = "";
        displayInfo(panel, myInfo.webdev);
    });
    */
    displayInfo(panel, myInfo.about);
})


function displayInfo(panelElem, info){
    let elems = Object.keys(info)
    elems.forEach((elem)=>{
        let newElem;
        info[elem].split(/\r?\n/).forEach((text)=>{
            newElem = document.createElement(elem);
            newElem.appendChild(document.createTextNode(text));
            panelElem.appendChild(newElem);
        })
    })
}

function createSlider(panelElem, urls){
    const wrapper = document.createElement("div");
    wrapper.className = "slider-wrapper";
    const slider = Object.assign(document.createElement("div"), {className: "slider"} );
    const sliderNav = Object.assign(document.createElement("div"), {className: "slider-nav"});
    let newImg;
    let newA;
    urls.forEach((value, i)=>{
        newImg = Object.assign(document.createElement("img"), {src: value, id: "slide-" + i});
        newA = Object.assign(document.createElement("a"), {href: "#slide-" + i});
        slider.appendChild(newImg);
        sliderNav.appendChild(newA);
    });
    
    wrapper.appendChild(slider);
    wrapper.appendChild(sliderNav);
    panelElem.appendChild(wrapper);
}
