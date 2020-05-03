class ContainerButtons extends HTMLElement{
    constructor(){
        super()
        this.render();
    }

    connectedCallback(){
        this.setAttribute("class", "row button-bar mt-3")
    }

    render(){
        this.innerHTML = `
        <button type="button" class="allDigiBtn button-pick btn-outline-info"">All Digimon</button>
        <button type="button" class="cariBtn button-pick btn btn-lg ">Search</button>
        <button type="button" class="levelBtn button-pick btn btn-lg ">Level</button>
        `
    }
}

customElements.define("container-buttons",ContainerButtons)
