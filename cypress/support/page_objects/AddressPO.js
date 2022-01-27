class AddressPO{
    footerArea(){
        const addressArea = cy.get('[style="line-height: 2;"]');
        addressArea.contains('628, Middle Badda, Badda, Dhaka');
    }
}
export default AddressPO;