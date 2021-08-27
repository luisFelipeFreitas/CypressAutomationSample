class SearchPage{
    acessarItemEncontrado(){
        cy.contains("More").click();
    }
}

export default SearchPage