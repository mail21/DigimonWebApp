class ContainerForm extends HTMLElement{
    constructor(){
        super()
        this.setAttribute("class", "row mt-4 ml-2 mr-2")
    }
}

customElements.define("container-form",ContainerForm)