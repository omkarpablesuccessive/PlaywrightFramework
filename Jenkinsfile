pipeline {
   agent any
   stages {
      stage('e2e-tests') {
         steps {
            // Depends on your language / test framework
            bat 'npm install'
           // sh 'npx playwright test'
         }
      }
   }
}
