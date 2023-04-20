pipeline {
   agent any
   stages {
      stage('e2e-tests') {
         steps {
            // Depends on your language / test framework
            sh 'npm install'
           // sh 'npx playwright test'
         }
      }
   }
}
