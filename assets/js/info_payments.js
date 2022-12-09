var Data ;

function getData() {
    var title = localStorage['objectToPass'];
    var description = localStorage['gDescription']
    Data = [title, description];
   // localStorage.removeItem( 'objectToPass' ); // Clear the localStorage
    console.log(Data);
}
getData();


const games_btn_config={
    "asassin_btn":"Asassin",
    "Cyber_punk_btn":"Cyber punk",
    "rev_btn":"Resident Evil Village",
    "syndicate_btn":"syndicate",
    "Witcher_btn":"The Witcher",
    "gta_btn":"GTA",
};

function setInformation(Data){

    document.getElementById("GTitle").innerHTML=games_btn_config[Data[0]];
    console.log("Title changed to " + Data);
    document.getElementById("description").innerHTML=Data[1];

}
setInformation(Data)

const imgslideData =[
    'imgSlider1',
    "imgSlider2",
    "imgSlider3",
    "imgSlider4"
]
var parentFolder ="../icons/";
function set_imgData() {
    console.log("parentFolder :" + parentFolder);
    parentFolder = parentFolder+games_btn_config[Data[0]]+"/"
    console.log("parentFolder changed to " + parentFolder);
    for (let index = 1; index <= 4; index++) {
        document.getElementById(imgslideData[index]).src=parentFolder+(index)+".JPG";
    }
}
set_imgData();