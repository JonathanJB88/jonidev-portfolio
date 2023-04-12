describe('Contact Page', () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  beforeEach(() => {
    cy.visit(`${baseUrl}/contact`);
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send').as('contact');
  });

  it('should display the contact page', () => {
    cy.get('h1').should('be.visible');
    cy.get('h1').contains(/Get in Touch/i);
    cy.get('[data-testid="CTA-text"]')
      .should('be.visible')
      .contains(/Feel free to get in touch with me/i);
  });
  it('should display the breadcrumbs and the toggle theme switcher', () => {
    cy.get('.fixed > .flex').should('be.visible');
    cy.get('#flexSwitchCheckDefault').should('be.visible');
  });
  it('should display the contact mail, whatsapp and social links', () => {
    cy.get('.grid > :nth-child(1) > .flex').should('be.visible');
    cy.get('.grid > :nth-child(1) > .flex').contains(/jonajes0288@gmail.com/i);
    cy.get('.grid > :nth-child(2) > .flex').should('be.visible');
    cy.get('.grid > :nth-child(2) > .flex').contains(/34652540974/i);
    cy.get('[data-testid="social-icon"]').should('have.length', 3);
  });
  it('should display the contact form', () => {
    cy.get('form').should('be.visible');
    cy.get('form').find('input').should('have.length', 2);
    cy.get('form')
      .find('input')
      .eq(0)
      .should('have.attr', 'name', 'name')
      .should('have.attr', 'type', 'text')
      .should('have.attr', 'placeholder', 'Your Name');
    cy.get('form')
      .find('input')
      .eq(1)
      .should('have.attr', 'name', 'email')
      .should('have.attr', 'type', 'email')
      .should('have.attr', 'placeholder', 'Your Email');
    cy.get('form').find('textarea').should('have.length', 1);
    cy.get('form')
      .find('textarea')
      .should('have.attr', 'name', 'project')
      .should('have.attr', 'placeholder', 'Tell me about your project');
    cy.get('form').find('button').should('have.length', 1);
    cy.get('form').find('button').contains(/Send/i);
  });
  it('should display the contact form errors', () => {
    cy.get('form').find('button').click();
    cy.get('.mt-2')
      .should('be.visible')
      .contains(/Please fill out all the fields/i);
    cy.get('form').find('input').eq(0).type('John Doe');
    cy.get('form').find('button').click();
    cy.get('.mt-2')
      .should('be.visible')
      .contains(/Please fill out all the fields/i);
    cy.get('form').find('input').eq(1).type('johndoe@google.com');
    cy.get('form').find('button').click();
    cy.get('.mt-2')
      .should('be.visible')
      .contains(/Please fill out all the fields/i);
    cy.get('form').find('input').eq(0).clear().type('John Doe');
    cy.get('form').find('input').eq(1).clear().type('johndoe');
    cy.get('form').find('textarea').type('I want to build a website');
    cy.get('form').find('button').click();
    cy.get('form').find('input').eq(1).should('have.focus');
  });
  it('should display the contact form success', () => {
    cy.get('form').find('input').eq(0).type('John Doe');
    cy.get('form').find('input').eq(1).type('johndoe@google.com');
    cy.get('form').find('textarea').type('I want to build a website');
    cy.get('form').find('button').click();
    cy.get('.max-w-md > .text-sm')
      .should('be.visible')
      .contains(/Sending Message../i);
    cy.wait('@contact').then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);
      expect(cy.get('.max-w-md > .text-sm')).to.contains(/Message Sent/i);
    });
  });
  it('should display the CTA button to blog page', () => {
    cy.get('.px-2').should('be.visible');
    cy.get('.px-2').contains(/Check out my blog/i);
    cy.get('.px-2').click();
    cy.url().should('include', '/blog');
  });
});
