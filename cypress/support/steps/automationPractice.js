import HomePage from '../Page_models/frontPage'
import SearchPage from '../Page_models/searchPage'
import ProductPage from '../Page_models/productPage';
import CheckoutPage from '../Page_models/checkoutPage';

const homePage = new HomePage;
const searchPage = new SearchPage;
const productPage = new ProductPage;
const checkoutPage = new CheckoutPage;

Given("que estou na homepage da loja",()=>{
    homePage.acessarHomePage();
})

When("Pesquisar por 'faded short sleeve'",()=>{
    homePage.procurarPorItem("faded short sleeve");
})

And("adicionar ela ao meu carrinho",()=>{
    searchPage.acessarItemEncontrado();
    productPage.adicionarAoCarrinho();
})

And("ir a pagina de checkout",()=>{
    productPage.checkoutAposAddCarrinho();
})

And("terei exatamente uma 'Faded short sleeve T-shirt' no cart.",()=>{
    checkoutPage.verificaQtd(1);
    checkoutPage.verificaNome("Faded Short Sleeve T-shirts");
})