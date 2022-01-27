class SearchPO{
    clickOnSearch(data){
        const search = cy.get('.whb-col-mobile > .woodmart-search-form > .searchform > .s');
        search.click();
        search.clear();
        search.type(data);
        return this;
    }
}
export default SearchPO;