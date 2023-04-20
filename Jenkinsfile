pipeline {
    agent any
    stages {
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
