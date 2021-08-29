import HomePage from '../Page_models/frontPage'
import SearchPage from '../Page_models/searchPage'
import ProductPage from '../Page_models/productPage';
import CheckoutPage from '../Page_models/checkoutPage';

const homePage = new HomePage;
let searchPage;
let productPage;
let checkoutPage;

Given("que estou na homepage da loja",()=>{
    homePage.acessarHomePage();
})

When("Pesquisar por 'faded short sleeve'",()=>{
    searchPage =homePage.procurarPorItem("faded short sleeve");

})

And("adicionar ela ao meu carrinho",()=>{
    productPage = searchPage.acessarItemEncontrado();
    productPage.adicionarAoCarrinho();
})

And("ir a pagina de checkout",()=>{
    checkoutPage = productPage.checkoutAposAddCarrinho();
})

And("terei exatamente uma 'Faded short sleeve T-shirt' no cart.",()=>{
    checkoutPage.verificaQtd(1);
    checkoutPage.verificaNome("Faded Short Sleeve T-shirts");
})