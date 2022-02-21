const serviceClients = [
    {
        id: 0,
        img: '../img/vivo-smartphone-conta-purpura.svg',
        description: '2ª via de conta móvel',
    },
    {
        id: 1,
        img: '../img/vivo-fixo-conta-rosa-esquerda.svg',
        description: '2ª via de conta fixa',
    },
    {
        id: 2,
        img: '../img/vivo-arquivo-cifrao-purpura-esquerda.svg',
        description: 'Consulta de saldo',
    },
    {
        id: 3,
        img: '../img/vivo-smartphone-vivinho-esquerda.svg',
        description: 'App Vivo',
    },
    {
        id: 4,
        img: '../img/vivo-computador-conta-laranja-centro.svg',
        description: 'Ative a Conta Digital',
    },
    {
        id: 5,
        img: '../img/vivo-calendario-cifrao-purpura-esquerda.svg',
        description: 'Ative o débito automático',
    },
    {
        id: 6,
        img: '../img/vivo-cartao-credito-purpura.svg',
        description: 'Pague a conta com cartão',
    },
    {
        id: 7,
        img: '../img/vivo-recompensa-cifrao-purpura-rosa-esquerda.svg',
        description: 'Conheça o Vivo Valoriza',
    },
]

serviceClient = () => {
    let containerProducts = document.getElementById('grid--service--client')
    serviceClients.map((items) => {
        containerProducts.innerHTML += `
            <div class="service--client">
                <img src="`+items.img+`" alt="a52">
                <p>`+items.description+`</p>
            </div>
        `
    })
}

serviceClient()