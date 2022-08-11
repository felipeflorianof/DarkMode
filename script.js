function darkmode(){
    var element = document.body;
    var button = document.querySelector('input#botao');
    element.classList.toggle("darkmode");

    if(button.value === 'DarkMode'){
        button.value = 'LightMode';
    }else{
        button.value = 'DarkMode';
    }
}

