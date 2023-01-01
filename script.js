const selectors = {
    threeLinesImg: document.querySelector(".threeLinesImg"),
    displayNone: document.querySelector(".displayNone"),
    displayNoneB: document.querySelector(".displayNoneB"),
    navLinksDivMobile: "",
    backdropFilter: "", 
    x: document.querySelector(".x"),
};

selectors.threeLinesImg.addEventListener("click", ()=>{ 
    selectors.displayNoneB.classList.add("backdropFilter");
    selectors.displayNoneB.classList.remove("displayNoneB"); 
    selectors.displayNone.classList.add("navLinksDivMobile");
    selectors.displayNone.classList.remove("displayNone");
});

selectors.x.addEventListener("click", ()=>{ 
    selectors.navLinksDivMobile = document.querySelector(".navLinksDivMobile"); 
    selectors.backdropFilter = document.querySelector(".backdropFilter");
    selectors.displayNoneB.classList.add("displayNoneB");
    selectors.displayNoneB.classList.remove("backdropFilter");
    selectors.navLinksDivMobile.classList.add("displayNone");
    selectors.navLinksDivMobile.classList.remove("navLinksDivMobile");
});