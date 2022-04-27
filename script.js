const blocker=()=>{
    setInterval(()=>{
        for (const button of document.getElementsByClassName("ytp-ad-skip-button")) {
            button.click();
        }
    }, 100);
    setInterval(()=>{
        const adList=
            ["style-scope ytd-display-ad-renderer",
                "style-scope ytd-companion-slot-renderer",
                "yt-simple-endpoint style-scope ytd-action-companion-ad-renderer",
                "style-scope ytd-item-section-renderer sparkles-light-cta"];
        setTimeout(()=>{
            adList.forEach((el)=>{
                let x=document.getElementsByClassName(el);
                for (const ad of x) {
                    ad.style.display='none'
                }
            })
        }, 100)
    }, 100)
    if (document.getElementsByClassName("style-scope ytd-display-ad-renderer") !== null || document.getElementsByClassName("style-scope ytd-display-ad-renderer") !== undefined) {
        let ad=document.createElement("div");
        ad.classList.add("ad");
        document.getElementsByClassName("style-scope ytd-topbar-logo-renderer")[0].appendChild(ad)
        ad.innerHTML='FairPromote'
    }

};
blocker();
