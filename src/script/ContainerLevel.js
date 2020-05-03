class ContainerLevel extends HTMLElement{
    constructor(){
        super()
        this.render();
    }

    connectedCallback(){
        // this.setAttribute("class", "")
    }

    render(){
        this.innerHTML = `
        <select class="form-control level-pick container-level none">
                <option>In Training</option>
                <option>Fresh</option>
                <option>Rookie</option>
                <option>Champion</option>
                <option>Ultimate</option>
                <option>Mega</option>
                <option>Armor</option>
         </select>
        `
    }
}

customElements.define("container-level",ContainerLevel)