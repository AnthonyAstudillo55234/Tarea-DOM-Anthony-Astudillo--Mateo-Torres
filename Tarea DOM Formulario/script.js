function validar() {
    let nm = document.getElementById('nm').value;
    let ap = document.getElementById('ap').value;
    let ed = document.getElementById('ed').value;
    let corr = document.getElementById('corr').value;
    let nm1 = document.getElementById('nm');
    let ap1 = document.getElementById('ap');
    let ed1 = document.getElementById('ed');
    let corr1 = document.getElementById('corr');
    let j1 = document.getElementById('j1');
    let j2 = document.getElementById('j2');
    let j3 = document.getElementById('j3');
    let j4 = document.getElementById('j4');
    let d1 = document.getElementById('d1');
    
    if (nm == "") {
        j1.textContent = 'Nombre vacío';
        nm1.style.border = '2px solid red';
        d1.innerHTML="";
    } else {
        j1.textContent = '';
        nm1.style.border = '2px solid black';
    }
    if (ap == "") {
        j2.textContent = 'Apellido vacío';
        ap1.style.border = '2px solid red';
        d1.innerHTML="";
    } else {
        j2.textContent = '';
        ap1.style.border = '2px solid black';
    }
    if (ed == "") {
        j3.textContent = 'Edad vacía';
        ed1.style.border = '2px solid red';
        d1.innerHTML="";
    } else if (ed < 18) {
        j3.textContent = 'Menor de edad';
        ed1.style.border = '2px solid red';
        d1.innerHTML="";
    } else {
        j3.textContent = '';
        ed1.style.border = '2px solid black';
    }
    if (corr == "") {
        j4.textContent = 'Correo vacío';
        corr1.style.border = '2px solid red';
        d1.innerHTML="";
    } else {
        j4.textContent = '';
        corr1.style.border = '2px solid black';
        
    }
    
    if (nm !== "" && ap !== "" && ed !== "" && ed >= 18 && corr !== "") {
        d1.innerHTML = '<h4>Nombre: ' + nm + '</h4>' +
                       '<h4>Apellido: ' + ap + '</h4>';
    }
}