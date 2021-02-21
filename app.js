const addButton = document.getElementById("button");


addButton.addEventListener("click", (e) => {
    const plusMinus = document.getElementById("select").value;
  if(plusMinus =="plus"){
   
    const item = document.getElementById("item").value;
    const value = document.getElementById("value").value;
    
  let informationsIncome = [];
  let info= {item , value};
  if(localStorage.getItem('informations')){
    informationsIncome= JSON.parse(localStorage.getItem('informations'))
  }
  informationsIncome.push(info)
  localStorage.setItem('informations', JSON.stringify( informationsIncome))
}
else{
   
const item = document.getElementById("item").value;
const value = document.getElementById("value").value;

    let informationsExpance = [];
    let info= {item , value};
    if(localStorage.getItem('informationsE')){
        informationsExpance= JSON.parse(localStorage.getItem('informationsE'))
    }
    informationsExpance.push(info)
    localStorage.setItem('informationsE', JSON.stringify(informationsExpance))
}
 printInformation(plusMinus)
});

const printInformation = (incomeOrExpanse) =>{
        const infos = JSON.parse(localStorage.getItem('informations'))
        const infosExpanse = JSON.parse(localStorage.getItem('informationsE'))
        const incomeRow = document.getElementById('income')
        const expanseROW = document.getElementById('expanse')
       
        if(incomeOrExpanse == 'plus'){
            incomeRow.innerHTML =""
            infos.forEach(info => {
                const {item ,value} = info
                incomeRow.innerHTML +=`
                <tr>
                <th scope="row">${item}</th>
                <td>${value}</td>
                <td><i class="fa fa-trash" aria-hidden="true" onclick="delete()"></i></td>
              </tr> 
                `
            });
        }
        else{
            expanseROW.innerHTML=""
            infosExpanse.forEach(info => {
                const {item , value}=info
                expanseROW.innerHTML+=`
                  <tr>
                <th scope="row">${item}</th>
                <td>${value}</td>
                <td><i class="fa fa-trash" aria-hidden="true" onclick="delete()"></i></td>
              </tr> 
                `
            });
        }
}

window.onload = function(){
    if(localStorage.getItem('informations') || localStorage.getItem('informationsE') ){
 const incomeInfo = JSON.parse(localStorage.getItem('informations'))
 const expanseInfo = JSON.parse(localStorage.getItem('informationsE'))
 const incomeRow = document.getElementById('income')
 const expanseROW = document.getElementById('expanse')

 incomeRow.innerHTML =""
            incomeInfo.forEach(info => {
                const {item ,value} = info
                incomeRow.innerHTML +=`
                <tr>
                <th scope="row">${item}</th>
                <td>${value}</td>
                <td><i class="fa fa-trash" aria-hidden="true" onclick="delete()"></i></td>
              </tr> 
                `
            });
 

            expanseROW.innerHTML =""
            expanseInfo.forEach(info => {
                const {item ,value} = info
                expanseROW.innerHTML +=`
                <tr>
                <th scope="row">${item}</th>
                <td>${value}</td>
                <td><i class="fa fa-trash" aria-hidden="true" onclick="delete()"></i></td>
              </tr> 
                `
            });
        }

}