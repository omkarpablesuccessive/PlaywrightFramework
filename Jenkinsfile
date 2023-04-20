pipeline {
  agent any 
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm install
        '''
      }
    }
    stage('test') {
      steps {
        sh '''
          npm run test:e2e
        '''
      }
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}