class PageBar extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.setAttribute("class", "pagination pagination-lg justify-content-center mb-3")
    }

    empty(){
        this.innerHTML = ``;
    }

    render(jumlahHalaman,respon){
        this.empty();
        this.innerHTML = `
            <page-item class="page-item">
                <a class="page-link" href="#"><<</a>
            </page-item>`    
        if(jumlahHalaman === 11){
            this.innerHTML += `
            <page-item class="page-item">
                <a class="page-link" id="changePage" href="#">${1}</a>
            </page-item>
            `
        }else{
            for (let i = 1; i < jumlahHalaman+1; i++) {
                this.innerHTML += `
                <page-item class="page-item">
                    <a class="page-link" href="#">${i}</a>
                </page-item>`
            }
        }
        this.innerHTML += `
            <page-item class="page-item">
                <a class="page-link" href="#">>></a>
            </page-item>`
        const dataDigimon = respon;
        const pageLink = document.querySelectorAll(".page-link")
        let pageAktif = 1;
        for (const paging of pageLink) {
            
            paging.addEventListener("click",()=>{
                if(paging.textContent == ">>"){
                    if(pageAktif >= jumlahHalaman){
                        pageAktif = jumlahHalaman;
                    }else{
                        pageAktif = (pageAktif + 1);
                    }
                }else if(paging.textContent == "<<"){
                    pageAktif = (pageAktif - 1);
                    if(pageAktif === 0){
                        pageAktif = 1
                    }
                }else{
                    pageAktif = Number.parseInt(paging.textContent);
                }

                if(jumlahHalaman === 11){
                    document.querySelector("#changePage").textContent = pageAktif;
                }

                let currentPage = pageAktif * 10;
                if(currentPage === 10){
                    currentPage = 0;
                }
                document.querySelector("digi-item").tampilDigimon(currentPage,dataDigimon)
            })
        }    
    }

}

customElements.define("page-bar",PageBar)