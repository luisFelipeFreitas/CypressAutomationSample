const url = "http://automationpractice.com/"

class HomePage{
    acessarHomePage(){
        cy.visit(url);

    }
    
    procurarPorItem(itemName){
        cy.get("input.search_query").type(itemName).type("{enter}");
    }
}

export default HomePage