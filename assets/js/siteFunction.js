const games_btn=["asassin_btn","Cyber_punk_btn","rev_btn","syndicate_btn"
,"Witcher_btn","gta_btn"];

const games_des=["d1","d2","d3","d4","d5","d6"]

function setALBTN(btn_list) {
    for (let index = 0; index <btn_list.length; index++) {
        const element = btn_list[index];
        console.log(element);
        document.getElementById(element).addEventListener("click", saveData);
        //document.getElementById(element)
        console.log("Actionlistener add to : "+element);
    }
    console.log("Actionlistener seted");
}
const games_des_data = new Map();
const games_des_btn = new Map();

function saveData(params) {
         
    //button-link
    for (let index = 0; index < games_btn.length; index++) {
        const element = games_btn[index];
        games_des_btn.set(element,games_des[index])
    }

    for (let index = 0; index < games_des.length; index++) {
        const element = games_des[index];
        games_des_data.set(element,document.getElementById(element).innerHTML);
    }
    console.log(games_des_data);

    var gId =this.id;
    var gDescription = games_des_data.get(games_des_btn.get(gId));//ERROR 
    console.log("id:"+this.id);
    //window.location.href(".../htmls/Gamepage.html?name=k")
    // var GameIdDate = {'gId':k,"des":games_des_data};
    // var DataToStore = [GameIdDate]
    // Set the variable
    localStorage.setItem( 'objectToPass', gId );
    localStorage.setItem('gDescription',gDescription);
    var Data = localStorage.getItem('objectToPass'); 
    // alert(Data+",,,"+DataToStore)
}

console.log("starting page");
setALBTN(games_btn);
console.log("method called");

//-------------------------conect for payment also

function getDataFromHTML() {
    var name = document.getElementById("name").innerHTML;
    var email = document.getElementById("email").innerHTML;
    console.log(name+email);
}