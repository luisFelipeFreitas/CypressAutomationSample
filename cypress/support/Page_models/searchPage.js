import ProductPage from "./productPage";


class SearchPage{
    acessarItemEncontrado(){
        cy.contains("More").click();
        return new ProductPage;
    }
}

export default SearchPage