describe('Cadastro Automation Demo Site', () => {
  beforeEach(() => {
    cy.visit('https://demo.automationtesting.in/Register.html')
    
  })
  
  it('Validar cadastro de usuário', () => {
    cy.contains('Automation Demo Site') //Verificando se contém o título como na página
    cy.get('input[placeholder="First Name"]').type('Marcella')
    cy.get('input[placeholder="Last Name"]').type('Araújo')
    cy.get('textarea[rows="3"]').type('Rua Walda Cruz Cordeiro, 174 - Condomínio Montes Claros - Apartamento 01 - Bloco: A')
    cy.get('input[ng-model="EmailAdress"]').type('marcellaacoelho@gmail.com')
    cy.get('input[ng-model="Phone"]').type('0123456789')
    cy.get('input[value="FeMale"]').click()
    cy.get('input[value="Movies"]').click() 
    cy.get('input[value="Hockey"]').click() 
    cy.get('#msdd').click()
    cy.get(':nth-child(8) > .ui-corner-all').click()
    cy.get(':nth-child(29) > .ui-corner-all').click()
    cy.get(':nth-child(35) > .ui-corner-all').click()
    cy.get('#header .row h1').click() 
    cy.get('#Skills').select('Javascript')
    cy.get('#countries') // NÃO ABRE A LISTA DE OPÇÕES - BUG
    cy.get('.select2-selection').click()
    cy.get('#select2-country-results > :nth-child(11)').click() 
    cy.get('#yearbox').select('1985')
    cy.get('select[placeholder="Month"]').select('July')
    cy.get('#daybox').select('17')
    cy.get('#firstpassword').type('testedesenha')
    cy.get('#secondpassword').type('testedesenha')
    cy.get('#submitbtn').click()
    //cy.get('#Button1').click()

  })
})
