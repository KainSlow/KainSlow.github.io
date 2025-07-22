
document.addEventListener("DOMContentLoaded", async()=>{
    
    const requestURL = "/assets/data/info.json"
    const request = new Request(requestURL);
    const response = await fetch(request);
    const info = await response.json();
    
    let panel = document.querySelector(".panel");
    let title = document.querySelector("#title");

    let aboutme = document.querySelector("#aboutme");
    let gamedev_btns = document.querySelectorAll(".gamedev-btn");
    aboutme.addEventListener("click", (e)=>{
        panel.innerHTML = "";
        createAbout(panel, info);
    });

    gamedev_btns[0].addEventListener("click",()=>{
        title.innerHTML = "Generación procedural";
        panel.innerHTML = "";
        createSlider(panel, info.pcgImgs);
        displayInfo(panel, info.pcg);
    });
    gamedev_btns[1].addEventListener("click",()=>{
        title.innerHTML = "Pathfinding";
        panel.innerHTML = "";
        createSlider(panel, info.pathImgs);
        displayInfo(panel, info.pathfinding);
    });
    gamedev_btns[2].addEventListener("click",()=>{
        title.innerHTML = "Prototipos";
        panel.innerHTML = "";
        createSlider(panel, info.protoImgs);
        displayInfo(panel, info.protos);
        addCustomProtoInfo(panel);
    });
    
    createAbout(panel, info);
})


function createAbout(panel, info){
    let title = document.querySelector("#title");
    title.innerHTML = "Sobre mi";
    displayInfo(panel, info.about);
    createSlider(panel, info.pixelartImgs);
    document.querySelector(".slider").style.aspectRatio = "4/3";
}

function addCustomProtoInfo(panel){
    let t1 = document.createElement("h3");
    t1.appendChild(document.createTextNode("Deeper Down (1ra imágen)"));
    panel.appendChild(t1);
    let p1 = document.createElement("p");
    let p1_2 = document.createElement("p");
    p1.appendChild(document.createTextNode("Videojuego en el cuál eres un científico en busca de nuevas especies de seres vivos en un planeta desconocido, tu objetivo es completar misiones mientras te mantienes con vida. Versión jugable disponible en mi página de Itch.io"));
    p1_2.appendChild(document.createTextNode("Para realizar el comportamiento de los peces utilicé el modelo de simulación \"Boids\", el cual permite definir patrones de comportamiento que seguirá un grupo de entidades, usualmente con el objetivo de conseguir un movimiento similar al natural."));
    panel.appendChild(p1);
    panel.appendChild(p1_2);

    let t2 = document.createElement("h3");
    t2.appendChild(document.createTextNode("Humberstone (2da imágen)"));
    panel.appendChild(t2);
    let p2 = document.createElement("p");
    let p2_2 = document.createElement("p");
    p2.appendChild(document.createTextNode("Eres un trabajador de la antigua mina de salitre Humberstone, estás harto de realizar trabajos forzados y recibir tu paga en fichas, sin mencionar los malos tratos de tus jefes, por lo que te propones buscar la manera de escapar. Versión jugable disponible en mi página de Itch.io"));
    p2_2.appendChild(document.createTextNode("El prototipo más \"completo\" que he hecho, tiene sistema de progresión, interacción básica con NPCs, tienda, diferentes escenas, generación procedural simple y un loop completo del juego."));
    panel.appendChild(p2);
    panel.appendChild(p2_2);

    let t3 = document.createElement("h3");
    t3.appendChild(document.createTextNode("2D Soulslike (3ra imágen)"));
    panel.appendChild(t3);
    let p3 = document.createElement("p");
    p3.appendChild(document.createTextNode("Prototipo realizado para aprender a implementar mecánicas populares de videojuegos plataformeros, soulslike y metroidvania, inspirado en Blasphemous. (Pixelart sacado de assets gratuitos)"));
    panel.appendChild(p3);

    let t4 = document.createElement("h3");
    t4.appendChild(document.createTextNode("Snake clon (4ta imágen)"));
    panel.appendChild(t4);
    let p4 = document.createElement("p");
    p4.appendChild(document.createTextNode("Prototipo realizado para aprender. :P"));
    panel.appendChild(p4);
}

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
    urls.forEach((value, i)=>{
        let newImg = Object.assign(document.createElement("img"), {src: value, id: "slide-" + i});
        let newA = Object.assign(document.createElement("a"), {href: "javascript:void(0);"});
        newA.addEventListener("click", ()=>{
            slider.scroll(i * 512, 0);
        })
        slider.appendChild(newImg);
        sliderNav.appendChild(newA);
    });
    
    wrapper.appendChild(slider);
    wrapper.appendChild(sliderNav);
    panelElem.appendChild(wrapper);
}
