describe('Post Detail Page', () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  beforeEach(() => {
    cy.visit(`${baseUrl}/blog`);
    cy.get('[data-testid="slider-card"]')
      .find('a')
      .contains(/Read More/i)
      .click();
  });

  it('should display the post detail page', () => {
    cy.get('.relative > img').should('be.visible');
    cy.get('h1').should('be.visible');
  });
  it('should display the breadcrumbs and the toggle theme switcher', () => {
    cy.get('.fixed > .flex').should('be.visible');
    cy.get('#flexSwitchCheckDefault').should('be.visible');
  });
  it('should display the title, date and author', () => {
    cy.get('.text-2xl').should('be.visible');
    cy.get('[data-testid="post-date"]').should('be.visible');
    cy.get('[data-testid="post-author"]').should('be.visible');
    cy.get('[data-testid="post-author"]').find('a').should('have.attr', 'href');
  });
  it('should display the CTA buttons, browse more posts and contact', () => {
    cy.get('.px-4')
      .find('button')
      .contains(/Browse more Posts/i);
    cy.get('.-z-50 > .justify-center')
      .find('button')
      .contains(/Contact/i);
  });
  it('should redirects to the blog page when clicking on the browse more posts button', () => {
    cy.get('.px-4')
      .find('button')
      .contains(/Browse more Posts/i)
      .click();
    cy.url().should('include', '/blog');
  });
  it('should redirects to the contact page when clicking on the contact button', () => {
    cy.get('.-z-50 > .justify-center')
      .find('button')
      .contains(/Contact/i)
      .click();
    cy.url().should('include', '/contact');
  });
  it('should display the author name, author image and social links', () => {
    cy.scrollTo('bottom');
    cy.get('[data-testid="profile-picture"]').should('be.visible');
    cy.get('h3').should('be.visible');
    cy.get('[data-testid="social-icon"]').should('have.length', 3);
    cy.get('.px-4 > .items-center').find('a').should('have.attr', 'href');
  });
});
