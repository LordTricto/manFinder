let ham = document.querySelector('.ham');
let navlinks = document.querySelector('.navlinks')

ham.addEventListener('click',e=>{

    
navlinks.classList.toggle('show_nav')

})


// code for showing the user info can be found in
/*
    missingItemDetailPage.html
*/
let toggle_extra_detail_pane_Btn = document.querySelector('#toggle_extra_detail_pane_btn');
let extra_details_pane = document.querySelector('.extra_details_pane');
let close_extra_details_pane = document.querySelector('#close_extra_details_pane')
// show extra_details_pane
toggle_extra_detail_pane_Btn.addEventListener('click',e=>{

    extra_details_pane.classList.add('show_pane')

})

// remove extra_details_pane
close_extra_details_pane.addEventListener('click',()=>{

    extra_details_pane.classList.remove('show_pane')

})