pipeline {
    agent any
    tools{
        nodejs "NodeJs"
    }

    stages {
        stage('prepare'){
            steps {
                echo 'preparing'
                sh 'git fetch'
                sh 'npm install'
            }
            
        }
    }
}