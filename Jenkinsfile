pipeline {
    agent any

    stages {
        stage('checkout') {
            steps {
                echo 'source code checkout'
            }
        }
        stage('install dependencies'){
            steps{
                sh 'npm install'
            }
        }

        stage('run tests'){
            steps{
                sh 'npm test'
            }
        }
        stage('build success'){
            steps{
                echo "application build successfully"
            }
        }
    }
    post{
        success{
            echo "pipeline executed successfully"
        }
        failure{
            echo "pipeline failed"
        }
        always{
            echo "pipeline completed"
        }
    }
}