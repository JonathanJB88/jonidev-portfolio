describe('Breadcrumbs navigation', () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  it('should navigate between pages', () => {
    cy.visit(`${baseUrl}`);
    cy.get('.px-3')
      .as('skills-btn')
      .contains(/Explore my Skills/i)
      .click();
    cy.get('.px-3')
      .as('projects-btn')
      .contains(/Explore my Projects/i)
      .click();
    cy.get('.px-3')
      .as('journey-btn')
      .contains(/Explore my Journey/i)
      .click();
    cy.get('.absolute > a > .px-3').as('blog-btn').click();
    cy.get('.fixed > .flex')
      .find('a')
      .contains(/Journey/i)
      .click();
    cy.get('.fixed > .flex')
      .find('a')
      .contains(/Projects/i)
      .click();
    cy.get('.fixed > .flex')
      .find('a')
      .contains(/Skills/i)
      .click();
    cy.get('.fixed > .flex').find('a').contains(/Home/i).click();
  });

  it('should navigate between pages', () => {
    cy.visit(`${baseUrl}/blog`);
    cy.get('.fixed > .flex').find('a').contains(/Home/i).click();
    cy.get('.px-3')
      .as('skills-btn')
      .contains(/Explore my Skills/i)
      .click();
    cy.get('.px-3')
      .as('projects-btn')
      .contains(/Explore my Projects/i)
      .click();
    cy.get('.px-3')
      .as('journey-btn')
      .contains(/Explore my Journey/i)
      .click();
    cy.get('.absolute > a > .px-3').click();
    cy.get('[data-testid="slider-card"]').first().click();
    cy.get('.px-3')
      .as('contact-btn')
      .contains(/Contact me/i)
      .click();
    cy.get('.fixed > .flex').find('a').contains(/Blog/i).click();
    cy.get('.fixed > .flex').find('a').contains(/Home/i).click();
  });
});
