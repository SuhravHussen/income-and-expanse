const addButton = document.getElementById("button");

// delete items
const deleteItem = id => {
 const incomeRow = document.getElementById('income')
 const expanseROW = document.getElementById('expanse')
  ;
    const incomeInfo = JSON.parse(localStorage.getItem('informations'))
    const expanseInfo = JSON.parse(localStorage.getItem('informationsE'))
    const remainingIssuesI = incomeInfo.filter( item => item.id != id )
  
    
   let myBudget = 0
   
    const remainingIssuesE = expanseInfo.filter( item => item.id!=id )
    localStorage.setItem('informationsE', JSON.stringify(remainingIssuesE))
    localStorage.setItem('informations', JSON.stringify(remainingIssuesI))
    incomeRow.innerHTML =""
    remainingIssuesI.forEach(info => {
                myBudget = myBudget + parseInt (info.value)
                const {item ,value,id} = info
                incomeRow.innerHTML +=`
                <tr>
                <th scope="row">${item}</th>
                <td>${value}</td>
                <td><i class="fa fa-trash" aria-hidden="true" onclick="deleteItem(${id})"></i></td>
              </tr> 
                `
            });
          
           localStorage.setItem('balance', JSON.stringify(myBudget))
           document.getElementById('balance').innerText = myBudget

            
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

// evemt listner
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
  newBalance()
  newIncome()
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
    newExpanse()
}
 printInformation(plusMinus)
});

// print Informations
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

// add balance, income ,expanse
let totalBalance = parseInt(document.getElementById('balance').innerText)




function newBalance(){
  const value = parseInt(document.getElementById("value").value) ;

  
 let balance = 0
    if(localStorage.getItem('balance')){
       balance = JSON.parse(localStorage.getItem('balance'))
       
    }
    balance = balance + value
  
  
    
    localStorage.setItem('balance', JSON.stringify(balance))
    document.getElementById('balance').innerText = balance

}


function newIncome(){
  const value = parseInt(document.getElementById("value").value) ;
  let totalIncome =parseInt (document.getElementById('incomee').innerText)
let income = 0
 income = totalIncome+ value
 console.log(income)
 document.getElementById('incomee').innerText = income
}

function newExpanse(){
  let totalExpanse =parseFloat( document.getElementById('expansee').innerText)
  const value = parseInt(document.getElementById("value").value) ;
  let expanse = 0
  expanse = totalExpanse+ value
  document.getElementById('expansee').innerText = expanse
  
  let myBalance = parseInt(localStorage.getItem('balance')) 
  myBalance = myBalance - value
  localStorage.setItem('balance', JSON.stringify(myBalance))
  document.getElementById('balance').innerText = myBalance
}










window.onload = function(){
  let array =[]
  localStorage.setItem('informations', JSON.stringify(array))
  localStorage.setItem('informationE', JSON.stringify(array))
  
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
let myBalance = parseInt(localStorage.getItem('balance'))
document.getElementById('balance').innerText = myBalance
  
        }
}
