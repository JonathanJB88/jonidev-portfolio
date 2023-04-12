import { categories, projects } from '../../src/data';

describe('Projects Page', () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const categoriesLength = categories.length;
  const projectsLength = projects.length;
  const reactProjectsLength = projects.filter((project) => project.category.includes('React')).length;
  const nextProjectsLength = projects.filter((project) => project.category.includes('Next')).length;
  beforeEach(() => {
    cy.visit(`${baseUrl}/projects`);
  });

  it('should display the projects page', () => {
    cy.get('h1').should('contain', /Projects/i);
  });
  it('should display the breadcrumbs and the toggle theme switcher', () => {
    cy.get('.fixed > .flex').should('be.visible');
    cy.get('#flexSwitchCheckDefault').should('be.visible');
  });
  it('should display the correct number of categories', () => {
    cy.get('.-ml-5').find('li').should('have.length', categoriesLength);
    cy.get('.-ml-5 > .grid > :nth-child(1)').should('have.class', 'underline');
    cy.get('.-ml-5 > .grid > :nth-child(2)').should('not.have.class', 'underline');
    cy.get('.-ml-5 > .grid > :nth-child(3)').click();
    cy.get('.-ml-5 > .grid > :nth-child(3)').should('have.class', 'underline');
    cy.get('.-ml-5 > .grid > :nth-child(1)').should('not.have.class', 'underline');
    cy.get('.-ml-5 > .grid > :nth-child(2)').should('not.have.class', 'underline');
  });
  it('should display the correct number of projects', () => {
    cy.get('.flex-grow > .grid').find('p').should('have.length', projectsLength);
    cy.get('.flex-grow > .grid').find('img').should('have.length', projectsLength);
    cy.get('.-ml-5 > .grid > :nth-child(3)').click();
    cy.get('.flex-grow > .grid').find('p').should('have.length', reactProjectsLength);
    cy.get('.flex-grow > .grid').find('img').should('have.length', reactProjectsLength);
    cy.get('.-ml-5 > .grid > :nth-child(5)').click();
    cy.get('.flex-grow > .grid').find('p').should('have.length', nextProjectsLength);
    cy.get('.flex-grow > .grid').find('img').should('have.length', nextProjectsLength);
  });
  it('should display the modal when clicking on a project', () => {
    cy.get('.flex-grow > .grid').find('img').first().click();
    cy.get('img').should('have.attr', 'alt', `Project Image of: ${projects[0].name}`);
  });
  it('should display the github and deploy links', () => {
    cy.get('.flex-grow > .grid').find('img').first().click();
    const links = cy.get('.border-2 > .justify-center').find('a');
    links.should('have.length', 2);
    links.first().should('have.attr', 'href', projects[0].github_url);
    links.first().next().should('have.attr', 'href', projects[0].deployed_url);
  });
  it('should display the correct project name and description', () => {
    cy.get('.flex-grow > .grid').find('img').first().click();
    cy.get('h2').should('contain', projects[0].name);
    cy.get('h3').should('contain', projects[0].description);
  });
  it('should display the correct number of key tech projects', () => {
    cy.get('.flex-grow > .grid').find('img').first().click();
    cy.get('[aria-label="Key Technologies"]').should('have.length', projects[0].key_techs.length);
  });
  it('should close the modal when clicking on the close button', () => {
    cy.get('.flex-grow > .grid').find('img').first().click();
    cy.get('.top-0').click();
    cy.get('[aria-label="Key Technologies"]').should('not.exist');
  });
  it('should display the CTA button and redirects to the journey page', () => {
    cy.get('button')
      .should('be.visible')
      .contains(/Explore my Journey/i);
    cy.get('button').click();
    cy.url().should('include', '/journey');
    cy.get('.mb-6').should('contain', /Journey/i);
  });
});
