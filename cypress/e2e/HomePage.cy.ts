describe('Home Page', () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const initBtnBgColor = 'rgb(255, 138, 61)';
  const hoverBtnBgColor = 'rgb(255, 138, 61)';
  beforeEach(() => {
    cy.visit(baseUrl);
  });
  it('should display the home page', () => {
    cy.get('h1').should('contain', /Jonathan Bracho/i);
  });
  it('should display the headers', () => {
    cy.get('h1').should('contain', /Jonathan Bracho/i);
    cy.get('h2').should('contain', /Frontend Developer/i);
    cy.get('p').should('contain', /I'm a Frontend Developer, proficient in React, Typescript, Next.js/i);
  });
  it('should display the profile image', () => {
    cy.get('img').should('be.visible');
  });
  it('should display the social media links', () => {
    cy.get('a[href="https://www.linkedin.com/in/jonathanbracho/"]')
      .should('be.visible')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noreferrer')
      .should('have.attr', 'aria-label', 'Visit my LinkedIn');
    cy.get('a[href="https://github.com/JonathanJB88"]')
      .should('be.visible')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noreferrer')
      .should('have.attr', 'aria-label', 'Visit my GitHub');
    cy.get('a[href="https://twitter.com/JonathanDev88"]')
      .should('be.visible')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'rel', 'noreferrer')
      .should('have.attr', 'aria-label', 'Visit my Twitter');
  });
  it('should display the download icon and text', () => {
    cy.get('.shadow-lg').should('be.visible');
    cy.get('a[href="/docs/CV.pdf"]').should('be.visible');
  });
  it('should display dark theme by default', () => {
    cy.get('.inline-block').should('have.attr', 'aria-label', 'dark mode');
    cy.get('html').should('have.class', 'dark');
  });
  it('should display light theme when clicking the toggle switcher', () => {
    cy.get('#flexSwitchCheckDefault').should('be.visible');
    cy.get('html').should('have.class', 'dark');
    cy.get('html').should('not.have.class', 'light');
    cy.get('.inline-block').should('have.attr', 'aria-label', 'dark mode');
    cy.get('.inline-block').should('have.text', '☀️');
    cy.get('#flexSwitchCheckDefault').click();
    cy.get('html').should('not.have.class', 'dark');
    cy.get('html').should('have.class', 'light');
    cy.get('.inline-block').should('have.attr', 'aria-label', 'light mode');
    cy.get('.inline-block').should('have.text', '🌙');
  });
  it('should display the CTA button and redirects to skills page', () => {
    cy.get('button')
      .should('be.visible')
      .contains(/Explore my Skills/i);
    cy.get('button').should('have.css', 'background-color', initBtnBgColor);
    cy.get('button').trigger('mouseover');
    cy.get('button').should('have.css', 'background-color', hoverBtnBgColor);
    cy.get('button').click();
    cy.url().should('include', '/skills');
  });
});
