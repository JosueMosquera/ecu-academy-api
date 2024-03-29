pipeline {
    agent any
    environment {
        PROJEC_NAME = "ecu-academy-back"
        TAGS = 'sistemaagil'
        HOME = '.'
    }    
    stages {

        stage("Analisis Sonar"){
            agent {
                docker {
                    label 'integracion'
                    image 'node:16'
                }
            }
            steps{ 
                sh "npm install"
                sh "npm run sonar"  
            }
        }

        stage("Respuesta Sonar"){
            agent {
                docker {
                    label 'integracion'
                    image 'jq:latest'
                    args '--network=service_net' 
                }
            }
            environment {
                SONAR_CREDENTIALS = credentials('sonar-admin')
            }            
            steps{ 
                script {
                    estatus = sh(
                        script: 'curl -u $SONAR_CREDENTIALS_USR:$SONAR_CREDENTIALS_PSW -s http://sonarqube:9000/api/qualitygates/project_status?projectKey=${PROJEC_NAME} | jq .projectStatus.status',
                        returnStdout: true
                    ).trim().toUpperCase().replaceAll("[\n\r]", "")
                    if (estatus == '"ERROR"'){
                        throw new Exception("No supera los estandares de calidad..")

                    }
                    if (estatus.isEmpty()){
                        throw new Exception("Not OK status isEmpty, please check sonarqube report")
                    }
                }
            }
        }

        stage("Despliegue"){
            agent {
                label 'integracion'
            }
            steps{
                sh 'docker build -f devops/Dockerfile -t academy-back:latest .'
                sh 'docker stack rm academy-api'
                sh 'docker stack deploy -c devops/stack.yml academy-api'
                sh 'docker volume create academy_data'
            }    
        }
       
    }
}