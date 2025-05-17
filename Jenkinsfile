pipeline {
    agent any
    stages {
        stage('checkout'){
            steps {
                git url: 'https://github.com/viswanathan16/JS-WebApp.git' ,branch: 'main'
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
   
        }
    }
 

