function mudaTema(tema) {

    if (tema==='fire') {
        document.body.classList.remove('love');
        document.body.classList.add('fire');
        
    }
    else{
        document.body.classList.remove('fire');
        document.body.classList.add('love');
    }
    
}