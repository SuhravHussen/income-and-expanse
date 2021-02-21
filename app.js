const addButton = document.getElementById("button");


const deleteItem = id => {
 const incomeRow = document.getElementById('income')
 const expanseROW = document.getElementById('expanse')
  console.log(id);
    const incomeInfo = JSON.parse(localStorage.getItem('informations'))
    const expanseInfo = JSON.parse(localStorage.getItem('informationsE'))
    const remainingIssuesI = incomeInfo.filter( item => item.id != id )
    console.log(remainingIssuesI);
    
    const remainingIssuesE = expanseInfo.filter( item => item.id!=id )
    localStorage.setItem('informationsE', JSON.stringify(remainingIssuesE))
    localStorage.setItem('informations', JSON.stringify(remainingIssuesI))
    
    
    incomeRow.innerHTML =""
    remainingIssuesI.forEach(info => {
                const {item ,value,id} = info
                incomeRow.innerHTML +=`
                <tr>
                <th scope="row">${item}</th>
                <td>${value}</td>
                <td><i class="fa fa-trash" aria-hidden="true" onclick="deleteItem(${id})"></i></td>
              </tr> 
                `
            });
            expanseROW.innerHTML =""
            remainingIssuesE.forEach(info => {
                const {item ,value,id} = info
                expanseROW.innerHTML +=`
                <tr>
                <th scope="row">${item}</th>
                <td>${value}</td>
                <td><i class="fa fa-trash" aria-hidden="true" onclick="deleteItem(${id})"></i></td>
              </tr> 
                `
            });
  }


addButton.addEventListener("click", (e) => {
  const plusMinus = document.getElementById("select").value;
  if(plusMinus =="plus"){
   
    const item = document.getElementById("item").value;
    const value = document.getElementById("value").value;
    const id = Math.floor(Math.random()*100000000) + ''
    
  let informationsIncome = [];
  let info= {item , value, id};
  if(localStorage.getItem('informations')){
    informationsIncome= JSON.parse(localStorage.getItem('informations'))
  }
  informationsIncome.push(info)
  localStorage.setItem('informations', JSON.stringify( informationsIncome))
}
if(plusMinus =='minus'){
   
const item = document.getElementById("item").value;
const value = document.getElementById("value").value;
const id = Math.floor(Math.random()*100000000) + ''

    let informationsExpance = [];
    let info= {item , value, id};
    if(localStorage.getItem('informationsE')){
        informationsExpance= JSON.parse(localStorage.getItem('informationsE'))
    }
    informationsExpance.push(info)
    localStorage.setItem('informationsE', JSON.stringify(informationsExpance))
}
 printInformation(plusMinus)
});

const printInformation = (incomeOrExpanse) => {
        const infos = JSON.parse(localStorage.getItem('informations'))
        const infosExpanse = JSON.parse(localStorage.getItem('informationsE'))
        const incomeRow = document.getElementById('income')
        const expanseROW = document.getElementById('expanse')

       
        if(incomeOrExpanse == 'plus'){
            incomeRow.innerHTML =""
            infos.forEach(info => {
                const {item ,value,id} = info
                incomeRow.innerHTML +=`
                <tr>
                <th scope="row">${item}</th>
                <td>${value}</td>
                <td><i class="fa fa-trash" aria-hidden="true" onclick="deleteItem(${id})"></i></td>
              </tr> 
                `
            });
        }
        else{
            expanseROW.innerHTML=""
            infosExpanse.forEach(info => {
                const {item , value,id}=info
                expanseROW.innerHTML+=`
                  <tr>
                <th scope="row">${item}</th>
                <td>${value}</td>
                <td><i class="fa fa-trash" aria-hidden="true" onclick="deleteItem(${id})"></i></td>
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
                const {item ,value,id} = info
                incomeRow.innerHTML +=`
                <tr>
                <th scope="row">${item}</th>
                <td>${value}</td>
                <td><i class="fa fa-trash" aria-hidden="true" onclick="deleteItem(${id})"></i></td>
              </tr> 
                `
            });
            expanseROW.innerHTML =""
            expanseInfo.forEach(info => {
                const {item ,value,id} = info
                expanseROW.innerHTML +=`
                <tr>
                <th scope="row">${item}</th>
                <td>${value}</td>
                <td><i class="fa fa-trash" aria-hidden="true" onclick="deleteItem(${id})"></i></td>
              </tr> 
                `
            });
        }

}

