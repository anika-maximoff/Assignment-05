
// common function for the donation 

const currentbalance = document.getElementById('current_balance').innerText;
const currentBalance = parseFloat(currentbalance);
function donation(donated_amount){
    
    total_balance = currentBalance - donated_amount
    return total_balance
}



// add the noakhali donation

document.getElementById('donate_noakhali_btn').addEventListener('click',function(event){
    event.preventDefault();

    const noakhaliamount = document.getElementById('noakhali_amount').innerText;
    const noakhaliAmount = parseFloat(noakhaliamount);
    const donation_1 = document.getElementById('donation1').value;
    const donation_11 = parseFloat(donation_1);
    // const currentbalance = document.getElementById('current_balance').innerText;
    // const currentBalance = parseFloat(currentbalance);
    if(donation_11 >= 0 && donation_11 < currentBalance) {
        const noakhali_new_amount = noakhaliAmount + donation_11
        console.log(noakhali_new_amount)

    }
    else{
        alert('failed to donate , please check if the amount is correct or if it exceeds the current balance.')
    }

    
    // console.log(noakhaliamount,donation_1);

    // const pininput2 = document.getElementById('inputpin1').value;
    // const cashoutmoney = document.getElementById('cashoutamount').value;
    // if(pininput2 === '123'){
        
    //     const currentbalance = document.getElementById('balance').innerText;
    //     // console.log(currentbalance)
    //     const balancenumber = parseFloat(currentbalance);
    //     const newbalancenumber = parseFloat(cashoutmoney);

    //     //add input money with account balance
    //     const newbalance = balancenumber - newbalancenumber
    //     console.log(newbalance);

    //     //set the new balance in ui
    //     document.getElementById('balance').innerText = newbalance;


    // }

    // //get the current balance
    
    // else{
    //     alert('Failed to cashout')

    // }

});