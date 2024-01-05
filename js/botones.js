const botones = document.querySelectorAll('.fila');

    botones.forEach(fila => {

        fila.addEventListener('mouseover' , () => {
            botones.forEach(b => {
                if (b!==fila) {
                    b.classList.add('blurred');
                }
            });
        });

        fila.addEventListener('mouseout' , () => {
            botones.forEach(b => {
                if(b !== fila) {
                    b.classList.remove('blurred');
                }
            });
        });
    });