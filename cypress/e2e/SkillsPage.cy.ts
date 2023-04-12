import { techSkills, softSkills } from '../../src/data/data';

describe('Skills Page', () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const techSkillsLength = techSkills.length;
  const softSkillsLength = softSkills.length;
  beforeEach(() => {
    cy.visit(`${baseUrl}/skills`);
  });
  it('should display the skills page', () => {
    cy.get('h1').should('contain', /Skills/i);
  });
  it('should display the technical skills', () => {
    cy.get('h2').should('contain', /Technical Skills/i);
    cy.get('.css-1sj2t5c > .grid').find('h2').should('have.length', techSkillsLength);
    cy.get('.css-1sj2t5c > .grid').find('svg').should('have.length', techSkillsLength);
    cy.get('.css-1sj2t5c > .grid')
      .find('h2')
      .each(($el, index) => {
        expect($el.text()).to.equal(techSkills[index].name);
      });
  });
  it('should display the soft skills', () => {
    cy.get('h2').should('contain', /Soft Skills/i);
    cy.get('.css-1bwerz7 > .grid').find('h2').should('have.length', softSkillsLength);
    cy.get('.css-1bwerz7 > .grid').find('svg').should('have.length', softSkillsLength);
    cy.get('.css-1bwerz7 > .grid')
      .find('h2')
      .each(($el, index) => {
        expect($el.text()).to.equal(softSkills[index].name);
      });
  });
  it('should display the breadcrumbs', () => {
    cy.get('.fixed > .flex').should('be.visible');
    cy.get('.fixed > .flex').find('a').should('have.length', 1);
    cy.get('.fixed > .flex').find('a').should('have.attr', 'href', '/');
  });
  it('should display the toggle theme switcher and change the theme', () => {
    cy.get('#flexSwitchCheckDefault').should('be.visible');
    cy.get('html').should('have.class', 'dark');
    cy.get('html').should('not.have.class', 'light');
    cy.get('#flexSwitchCheckDefault').click();
    cy.get('html').should('not.have.class', 'dark');
    cy.get('html').should('have.class', 'light');
  });
  it('should display the CTA button and redirects to projects page', () => {
    cy.get('button')
      .should('be.visible')
      .contains(/Explore my Projects/i);
    cy.get('button').click();
    cy.url().should('include', '/projects');
    cy.get('.text-xl').should('contain', /Projects/i);
  });
});
