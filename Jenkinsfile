pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test:e2e'
                 bat 'npm run posttest:e2e'
            }
        }
    }
}
