const products = [
    {
        id: 0,
        img: '../img/samsung-a52.png',
        name: 'Galaxy A52s',
        description: 'Plano Vivo Familia 60GB Anual',
        value: 'R$ 1.499,00',
        installments: '12x de R$ 124,92 s/ juros'
    },
    {
        id: 1,
        img: '../img/apple-iphone-11.png',
        name: 'Iphone 11 128GB',
        description: 'Plano Vivo Familia 60GB Anual',
        value: 'R$ 4.099,00',
        installments: '12x de R$ 341,58 s/ juros'
    },
    {
        id: 2,
        img: '../img/samsung-galaxy-a21s.png',
        name: 'Galaxy A21s',
        description: 'Plano Vivo Controle',
        value: 'R$ 1.199,00',
        installments: '12x de R$ 99,92 s/ juros'
    },
    {
        id: 3,
        img: '../img/vivo_smart_wifi.png',
        name: 'Vivo Smart Wifi',
        description: 'Acessório',
        value: 'R$ 349,00',
        installments: '12x de R$ 29,08 s/ juros'
    }
]

productsGrid = () => {
    let containerProducts = document.getElementById('grid--products')
    products.map((items) => {
        containerProducts.innerHTML += `
            <div class="products">
                <img src="`+items.img+`" alt="a52">
                <div class="description">
                    <p>`+items.name+`</p>
                    <p>`+items.description+`</p>
                    <p>`+items.value+`</p>
                    <p>1`+items.installments+`</p>
                    <a href="`+items.id+`">Compre agora</a>
                </div>
            </div>
        `
    })
}

productsGrid()