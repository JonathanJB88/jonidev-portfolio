describe('Projects Page', () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  beforeEach(() => {
    cy.visit(`${baseUrl}/blog`);
  });

  it('should display the blog page', () => {
    cy.get('[data-testid="slider-card"]').should('be.visible');
    cy.get('[data-testid="slider-card"]').find('img').should('be.visible');
    cy.get('[data-testid="slider-card"]').find('h2').should('be.visible');
    cy.get('[data-testid="slider-card"]').find('p').should('be.visible');
    cy.get('[data-testid="slider-card"]')
      .find('a')
      .should('be.visible')
      .contains(/Read More/i);
  });
  it('should display the filter and sort bar', () => {
    cy.get('[data-testid="filterbar-blogGrid"]').should('be.visible');
  });
  it('should display an infinite scroll component', () => {
    cy.get('.infinite-scroll-component').should('be.visible');
    cy.get('.infinite-scroll-component').within(() => {
      cy.get('img').should('have.length.greaterThan', 1);
    });
  });
  it('should display the footer', () => {
    cy.scrollTo('bottom');
    cy.get('.col-span-full > .flex > .mb-2')
      .should('be.visible')
      .contains(/You've reached the end!/i);
    cy.get('.col-span-full > .flex > .text-xs')
      .should('be.visible')
      .contains(/Stay tuned for more!/i);
  });
  it('should display the CTA button to the contact page', () => {
    cy.get('a > .px-3')
      .should('be.visible')
      .contains(/Contact/i);
    cy.get('a > .px-3').click();
    cy.url().should('include', '/contact');
  });
  it('should redirect to the 404 page and returns to Blog Page when clicking on the CTA button', () => {
    cy.visit(`${baseUrl}/blog/404`);
    cy.url().should('include', '/404');
    cy.get('button')
      .contains(/Browse more Posts/i)
      .click();
    cy.url().should('include', '/blog');
  });
  it('should redirects to the post detail page when clicking on the Read More button', () => {
    cy.get('[data-testid="slider-card"]')
      .find('a')
      .contains(/Read More/i)
      .click();
    cy.url().should('include', '/blog/');
  });
  it('should redirects to the post detail page when clicking on the slider image', () => {
    cy.get('[data-testid="slider-card"]').first().click();
    cy.url().should('include', '/blog/');
  });
  it('should redirects to the post detail page when clicking on any read more cta button', () => {
    cy.get(':nth-child(1) > .flex-col > .mt-auto > a > .px-2').click();
    cy.url().should('include', '/blog/');
    cy.get('.fixed > .flex > :nth-child(3) > a > .transition-colors').click();
    cy.url().should('include', '/blog');
    cy.get(':nth-child(2) > .flex-col > .mt-auto > a > .px-2').click();
    cy.url().should('include', '/blog/');
    cy.get('.fixed > .flex > :nth-child(3) > a > .transition-colors').click();
    cy.url().should('include', '/blog');
    cy.get(':nth-child(3) > .flex-col > .mt-auto > a > .px-2').click();
    cy.url().should('include', '/blog/');
  });
  it('should display the img, title, description and author for each post', () => {
    cy.get('.infinite-scroll-component').within(() => {
      cy.get('[data-testid="postcard-image"]').should('have.length.greaterThan', 1);
      cy.get('h2').should('have.length.greaterThan', 1);
      cy.get('p').should('have.length.greaterThan', 1);
      cy.get('[data-testid="postcard-author-image"]').should('have.length.greaterThan', 1);
      cy.get('[data-testid="postcard-author-name"]').should('have.length.greaterThan', 1);
      cy.get('a').should('have.length.greaterThan', 1);
    });
  });
});
