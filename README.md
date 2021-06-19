# Cypress E2E

Cypress end to end testing using TypeScript

## How to use this repo

* Clone this repo  
* Navigate to the project directory in terminal / command prompt  
* Run the specs / cypress tests [placed under cypress/integration folder]  
* To run, type below command

```bash
npm run cypress:open
```
this above will open the Cypress UI and select particular test to run.  

### example

```typescript
// SampleSpec.ts
describe("Reg form test", () => {
    it("enter some value", ()=> {
        cy.visit("https://qavbox.github.io/demo/signup/");
        cy.get("#username").type("qavbox");
        cy.get('input[name=\'home\']').click();
    })
})
```

## Step by step tutorial
Refer [youtube.com/qavbox](https://www.youtube.com/playlist?list=PLPO0LFyCaSo1sEDJb6FR2a1iPl-48FDBL) for more details  
Also refer [qavalidation.com](https://qavalidation.com/category/cypress/) for blog tutorial
