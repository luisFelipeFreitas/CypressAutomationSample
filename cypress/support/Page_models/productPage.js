class ProductPage{
    aumentarQuantidade(numeroDeVezes){
        for(let x=0;x<= numeroDeVezes; x++){
            cy.get(".icon-plus").click();
        }
    }
    diminuirQuantidade(numeroDeVezes){
        for(let x=0;x<= numeroDeVezes; x++){
            cy.get(".icon-minus").click();
        }
    }
    adicionarAoCarrinho(){
        cy.get("button.exclusive").click();
    }
    
    checkoutAposAddCarrinho(){
        //Não gosto de colocar os labels dos botões pois estes podem mudar dependendo da Língua do sistema.
        //A melhor saída além disso seria clicar na seta com .icon-chevron-right
        //estou fazendo desta maneira pois este site não muda de lingua
        cy.contains("Proceed to checkout").click();
    }

    continuarComprandoAposAddCarrinho(){
        cy.contains("Continue shopping").click();
    }
}

export default ProductPage