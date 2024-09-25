


//common functions 
function closeModal() {
    document.getElementById("success-modal").classList.add("hidden");
}

function blogpage(){
    window.location = "blog.html";
    
}

function Homepage(){
    window.location = "index.html";
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


// work on donation and history button


document.getElementById('history_btn').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('donation_history').classList.remove('hidden');
    document.getElementById('donation_section').classList.add('hidden');
    
    
})


document.getElementById('donation_btn').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('donation_history').classList.add('hidden');
    document.getElementById('donation_section').classList.remove('hidden');
    
})

//handle button colour
function buttonColor(selectedButton){
    const donationButton = document.getElementById('donation_btn');
    const historyButton = document.getElementById('history_btn');

    if (selectedButton === 'history') {
        historyButton.classList.add('bg-[#B4F461]','text-black');
        historyButton.classList.remove('bg-gray-100');
        donationButton.classList.add('bg-gray-100', 'text-gray-500','border-1','border-gray-300');
        donationButton.classList.remove('bg-[#B4F461]','text-black');



    } else if (selectedButton === 'donation') {
        donationButton.classList.add('bg-[#B4F461]','text-black');
        donationButton.classList.remove('bg-gray-100');
        historyButton.classList.add('bg-gray-100', 'text-gray-500');
        historyButton.classList.remove('bg-[#B4F461]','text-black');
    }
        
    

}



//common function for the donation 

function donation(current_balance,donated_amount,donated_balance,criteria){

    if(donated_amount >= 0 && donated_amount < current_balance) {
        const new_total_balance = current_balance - donated_amount
        const new_donated_balance = donated_balance + donated_amount
        document.getElementById('current_balance').innerText = new_total_balance
        document.getElementById("success-modal").classList.remove("hidden");
        
        donationHistory(donated_amount,criteria);

        return new_donated_balance;
           
        
    }
    else{
        
        alert('failed to donate , please check if the amount is correct or if it exceeds the current balance.')
        return donated_balance;
    }


};


//donation for noakhali

document.getElementById('donate_noakhali_btn').addEventListener('click',function(event){
    event.preventDefault();
    const currentbalance = document.getElementById('current_balance').innerText;
    const currentBalance = parseFloat(currentbalance);

    const noakhaliamount = document.getElementById('noakhali_amount').innerText;
    const noakhaliAmount = parseFloat(noakhaliamount);
    const donation_1 = document.getElementById('donation1').value;
    const donation_11 = parseFloat(donation_1);
    const new_noakhali_balance = donation(currentBalance,donation_11, noakhaliAmount,' Flood at Noakhali, Bangladesh');
    document.getElementById('noakhali_amount').innerText = new_noakhali_balance
    document.getElementById('donation1').value = '';



});



//donation for feni 
document.getElementById('donate_feni_btn').addEventListener('click',function(event){
    event.preventDefault();
    const currentbalance = document.getElementById('current_balance').innerText;
    const currentBalance = parseFloat(currentbalance);

    const feniamount = document.getElementById('feni_amount').innerText;
    const feniAmount = parseFloat(feniamount);
    const donation_2 = document.getElementById('donation2').value;
    const donation_22 = parseFloat(donation_2);
    const new_feni_balance = donation(currentBalance,donation_22, feniAmount,'Flood Relief in Feni,Bangladesh');
    document.getElementById('feni_amount').innerText = new_feni_balance
    document.getElementById('donation2').value = '';
});


//donation for quota movement
document.getElementById('donate_qouta_btn').addEventListener('click',function(event){
    event.preventDefault();
    const currentbalance = document.getElementById('current_balance').innerText;
    const currentBalance = parseFloat(currentbalance);

    const qoutaamount = document.getElementById('qouta_amount').innerText;
    const qoutaAmount = parseFloat(qoutaamount);
    const donation_3 = document.getElementById('donation3').value;
    const donation_33 = parseFloat(donation_3);
    const new_qouta_balance = donation(currentBalance,donation_33, qoutaAmount,'Aid to Injured in the Quota Movement');
    document.getElementById('qouta_amount').innerText = new_qouta_balance
    document.getElementById('donation3').value = '';
});



//common function for history 
function donationHistory(donatedAmount,criteria) {
    const donationHistory = document.getElementById('donation_history');
    const newdiv = document.createElement('div');
    if (donatedAmount >= 0){
        newdiv.classList.add('bg-white','p-5','mb-4','rounded-xl','border-2','border-gray-500');
        newdiv.innerHTML = `
        <p class="">${donatedAmount} Taka is Donated for ${criteria}</p>
        <p class="text-gray-500">Date: ${new Date().toString()}</p>
        `;
    donationHistory.appendChild(newdiv);

    }
}





















