let reason = document.getElementById('inp-reason');
let amount = document.getElementById('inp-amount');
let addbtn = document.getElementById('btn-add');
let clrbtn = document.getElementById('btn-clear');
let list = document.getElementById('list');
let tot = 0;
addbtn.addEventListener('click',()=>{
    if(reason.value.length != 0 && amount.value > 0 )
    {
        let ion_item = document.createElement('ion-item');
        ion_item.textContent = reason.value + ": Rs."+amount.value;
        tot += parseInt(amount.value);
        document.getElementById('total').innerHTML = tot;
        list.prepend(ion_item);
        clear();
    }
});

clrbtn.addEventListener('click',()=>{
    clear();
});

function clear()
{
    reason.value = " ";
    amount.value = 0;
}