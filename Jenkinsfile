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
                bat 'npx playwright test'
                bat 'npx allure generate allure-results --clean'
                step([$class: 'AllureReportPublisher', results: [[path: 'allure-results']]])

            }
        }
    }
}
