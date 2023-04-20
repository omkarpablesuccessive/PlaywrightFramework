pipeline {
    agent any
    stages {
        stage('Create browsers directory') {
            steps {
                sh 'mkdir -p $WORKSPACE/browsers'
            }
        }
        stage('Install dependencies') {
            steps {
                withEnv(["PLAYWRIGHT_BROWSERS_PATH=$WORKSPACE/browsers"]) {
                    sh 'npm install && npx playwright install'
                }
            }
        }
        stage('Test') {
            steps {
                withEnv(["PLAYWRIGHT_BROWSERS_PATH=$WORKSPACE/browsers"]) {
                    sh 'npx playwright test'
                }
            }
        }
    }
}
