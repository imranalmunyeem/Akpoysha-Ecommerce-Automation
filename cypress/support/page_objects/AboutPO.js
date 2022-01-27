class AboutPO{
    clickOnAbout(){
        const aboutAkpoysha = cy.get('.elementor-element-fd45c56 > .elementor-widget-container > .elementor-heading-title');
        aboutAkpoysha.contains('About Akpoysha');

        const firstDescription= cy.get('.elementor-element-b554581 > .elementor-widget-container > .elementor-text-editor > :nth-child(1)');
        firstDescription.contains('Akpoysha is an online shop in Dhaka, Bangladesh. Akpoysha is selling variety of Consumer product, Grocery, Kitchen Appliance, Office Stationary, Gift item Etc.');

        const secondDescription = cy.get(':nth-child(2) > strong')
        secondDescription.contains('We ensure fastest delivery with an excellent customer experience through our own delivery team so that customer get a hassle free product at their doorstep with no additional cost.');

        const thirdDescription = cy.get('.elementor-text-editor > :nth-child(3)');
        thirdDescription.contains('We have various payment method including Cash On Delivery, Online Payment, and bKash with all our product. We do our best to meet our customer’s expectation in quality standards and service through continuous improvement and customer interaction.');
    }
}
export default AboutPO;