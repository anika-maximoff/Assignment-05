

const currentbalance = document.getElementById('current_balance').innerText;
const currentBalance = parseFloat(currentbalance);

function closeModal() {
    document.getElementById("success-modal").classList.add("hidden");
}

function blogpage(){
    window.location = "/blog.html";
    
}


window.onscroll = function() {
    const header = document.getElementById('header');
    // const banner = document.getElementById('banner')
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('backdrop-blur-xl');
        // banner.classList.add('backdrop-blur-lg');
    } else {
        header.classList.remove('backdrop-blur-xl');
        // banner.classList.remove('backdrop-blur-lg');
    }
};

// common function for the new balance

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
        document.getElementById('noakhali_amount').innerText = noakhali_new_amount;
        new_total_balance = donation(donation_11)
        document.getElementById('current_balance').innerText = new_total_balance
       
        document.getElementById("success-modal").classList.remove("hidden");


        donation_1.value = '';    

    }
    else{
        alert('failed to donate , please check if the amount is correct or if it exceeds the current balance.')
    }


});

//donate money for feni 

// donate money for quota movement

