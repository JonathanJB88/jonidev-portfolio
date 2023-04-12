import { journey } from '../../src/data';

describe('Projects Page', () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const experiences = journey.filter((item) => item.category === 'experience');
  const education = journey.filter((item) => item.category === 'education');

  beforeEach(() => {
    cy.visit(`${baseUrl}/journey`);
  });

  it('should display the journey page', () => {
    cy.get('h1').should('contain', /Journey/i);
  });
  it('should display the breadcrumbs and the toggle theme switcher', () => {
    cy.get('.fixed > .flex').should('be.visible');
    cy.get('#flexSwitchCheckDefault').should('be.visible');
  });
  it('should display the experience and education buttons', () => {
    cy.get('[data-testid="experience-button"]').should('be.visible');
    cy.get('[data-testid="education-button"]').should('be.visible');
  });
  it('should display the experience and education sections, experience by default', () => {
    cy.get('.vertical-timeline').find('h3').should('have.length', experiences.length);
    cy.get('[data-testid="education-button"]').click();
    cy.get('.vertical-timeline').find('h3').should('have.length', education.length);
  });
  it('should display the correct icon for each experience', () => {
    cy.get(':nth-child(1) > .vertical-timeline-element-icon > span').should('have.text', '👨‍💻');
    cy.get('[data-testid="education-button"]').click();
    cy.get(':nth-child(1) > .vertical-timeline-element-icon > span').should('have.text', '🎓');
  });
  it('should display the correct title and description for each experience', () => {
    cy.get(':nth-child(1) > .vertical-timeline-element-content > h3').should('have.text', experiences[0].title);
    cy.get(':nth-child(1) > .vertical-timeline-element-content > p').should('have.text', experiences[0].description);
    cy.get('[data-testid="education-button"]').click();
    cy.get(':nth-child(1) > .vertical-timeline-element-content > h3').should('have.text', education[0].title);
    cy.get(':nth-child(1) > .vertical-timeline-element-content > p').should('have.text', education[0].description);
  });
  it('should display the CTA button on the top right down the toggle theme switcher and redirects to the Blog Page', () => {
    cy.get('.absolute > a > .px-3').should('be.visible');
    cy.get('.absolute > a > .px-3')
      .contains(/Visit my Blog/i)
      .click();
    cy.url().should('include', '/blog');
  });
});
