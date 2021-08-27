Feature: Comprar um item especifico da loja.

    Scenario: Comprar uma Faded short sleeve T-shirt
        Given que estou na homepage da loja
        When Pesquisar por 'faded short sleeve'
        And adicionar ela ao meu carrinho
        And ir a pagina de checkout
        Then terei exatamente uma 'Faded short sleeve T-shirt' no cart.
