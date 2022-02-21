const highlight = [
    {
        id: 0,
        img: '../img/vivo-shopping-eletrodom.png',
        description: 'Eletrodomésticos com até 40% OFF',
    },
    {
        id: 1,
        img: '../img/vivo-shopping-audio-e-som.jpg',
        description: 'Áudio e som com até 60% OFF',
    },
    {
        id: 2,
        img: '../img/vivo-shopping-organizacao-e-decoracao.png',
        description: 'Itens de organização e decoração com até 60% OFF',
    },
    {
        id: 3,
        img: '../img/vivo-shopping-smart-tvs.jpg',
        description: 'Smart TVs com até 40% OFF',
    }
]

highlightsGrid = () => {
    let containerHilights = document.getElementById('grid--highlights')
    highlight.map((items) => {
        containerHilights.innerHTML += `
            <div class="highlights">
                <img src="`+items.img+`" alt="a52">
                <div class="description">
                    <p>`+items.description+`</p>
                    <a href="`+items.id+`">Saiba mais</a>
                </div>
            </div>
        `
    })
}

highlightsGrid()