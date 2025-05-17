pipeline {
    agent {
        docker {
            image 'node:18'  // official Node.js docker image
            args '-v /root/.npm:/root/.npm'  // optional: cache npm modules
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/viswanathan16/JS-WebApp.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        success {
            archiveArtifacts artifacts: '**/test-results.xml', fingerprint: true
            junit 'test-results.xml'
        }
        failure {
            emailext (
                to: 'viswanathanram1607@gmail.com',
                subject: "Jenkins Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Please check the build logs at ${env.BUILD_URL}"
            )
        }
    }
}
