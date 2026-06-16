pipeline {
    agent any
    environment {
        IMAGE_NAME="vishravi1975/nodejs-demo-app"
        IMAGE_TAG="v1"
    }
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
        // stage('build success'){
        //     steps{
        //         echo "application build successfully"
        //     }
        // }
        stage('build docker image'){
            steps {
                sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
            }
        }
        stage('docker login'){
            steps{
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]){
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    
                    '''
                }
            }
        }
        stage('push docker image'{
            steps{
                sh ' docker push ${IMAGE_NAME}:${IMAGE_TAG}'
            }
        })
    }
    post{
        success{
            echo "docker image pushed successfully"
        }
        failure{
            echo "pipeline failed"
        }
        // always{
        //     echo "pipeline completed"
        // }
    }
}