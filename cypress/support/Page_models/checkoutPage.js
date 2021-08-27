class CheckoutPage{
    verificaQtd(num){
        cy.get("td.cart_quantity").children('input').should('have.value',num);
        
    }
    verificaNome(nome){
        cy.contains(nome).should('exist')
    }
}

export default CheckoutPage