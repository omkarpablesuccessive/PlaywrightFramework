pipeline {
   agent any
   stages {
      stage('Install Playwright') {
         steps {
            // Depends on your language / test framework
            bat 'npm i -D @playwright/test'
            bat 'npx playwright install'
         }
      }
      stage('test') {
         steps {
          bat 'npx playwright test'
        
         } }
   }
}
