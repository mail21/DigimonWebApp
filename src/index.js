import "regenerator-runtime";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style/style.css"
import "./script/ContainerButtons.js"
import "./script/ContainerForm.js"
import "./script/ContainerInput.js"
import "./script/ContainerLevel.js"
import "./script/DigiItem.js"
import "./script/PageBar.js"
import Digimon from "./data/Digimon"

const btnCariToggle = document.querySelector(".cariBtn")
const btnLevelToggle = document.querySelector(".levelBtn")
const containerCari = document.querySelector("container-input")
const containerLevel = document.querySelector(".container-level")
const btnAllDigi = document.querySelector(".allDigiBtn")
const digiItem = document.querySelector("digi-item");
const pageBar = document.querySelector("page-bar");
btnAllDigi.addEventListener("click",async () => {
    const data = await Digimon.getAllDigimon();
    let jumlahHalaman = Math.ceil(data.length/20);
    digiItem.tampilDigimon(0,data)
    pageBar.render(jumlahHalaman,data)
})

btnCariToggle.addEventListener("click", ()=>{
    btnCariToggle.classList.add("background-blue")
    btnLevelToggle.classList.remove("background-blue")
    containerCari.classList.remove("none")
    containerLevel.classList.add("none")
})

btnLevelToggle.addEventListener("click", ()=>{
    containerLevel.classList.remove("none")
    containerCari.classList.add("none")
    btnLevelToggle.classList.add("background-blue")
    btnCariToggle.classList.remove("background-blue")
})

const btnSearch = document.querySelector(".search-button")
btnSearch.addEventListener("click",async () => {
    const keyword = document.querySelector(".input-keyword")
    const data = await Digimon.getSearchedDigimon(keyword.value)
    if(!data.ErrorMsg){
        digiItem.tampilDigimon(0,data)
        pageBar.empty()
    }else{
        alert(data.ErrorMsg)
    }
})

const levelPick = document.querySelector(".level-pick")
levelPick.addEventListener("change", async (e)=>{
    const data = await Digimon.getLevelDigimon(e.target.value)
    let jumlahHalaman = Math.ceil(data.length/20);
    digiItem.tampilDigimon(0,data)
    pageBar.render(jumlahHalaman,data)
});