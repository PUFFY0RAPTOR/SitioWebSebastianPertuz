function darkmode(){

    let fondo = document.getElementsByTagName('body')[0];
    let color = fondo.style.getPropertyValue('--fondopage');
    console.log(color);

    if(color !== 'black'){
        fondo.style.setProperty('--fondopage', 'black');
        fondo.style.setProperty('--colorletra', 'white');
        fondo.style.setProperty('--fondonav', 'tomato');
    }else{
        fondo.style.setProperty('--fondopage', 'white');
        fondo.style.setProperty('--colorletra', 'black');
        fondo.style.setProperty('--fondonav', 'skyblue');
    }

}