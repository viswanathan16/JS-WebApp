pipeline {
    agent any
    stages {
        stage('checkout'){
            steps {
                git 'https://github.com/viswanathan16/JS-WebApp.git'
            }
        }
        stage('Install Dependencies'){
            steps {
                sh 'echo Installing Dependencies'
                sh 'npm install'
            }
        }    
        stage('Run Tests'){
            steps {
                sh 'echo Running Tests'
                sh 'npm test'
            }
        }
    post {
            success {
                archiveArtifacts artifacts: '**/test-results.xml', fingerprint: true
                junit 'test-results.xml'
            }
            failure {
                echo 'Tests failed'
                emailext body: 'Some Error occurred. Please check it out', subject: 'Error ', to: 'viswanathanram1607@gmail.com'
            }
        }
    }
 }

