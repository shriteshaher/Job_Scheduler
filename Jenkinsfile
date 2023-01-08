pipeline{
  agent any
  
  parameters{
   
    choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')

  }
  stages{
    
    stage("build"){
      steps{
         echo "build successfully"
      }
  }
    
      stage("test"){
      steps{
         echo "test successfully"
      }
  }
  
    
    stage("deploy"){
      steps{
         echo "deploy successfully"
        withCredentials([usernamePassword(credentials:'Server_creadintial',usernameVarialble:USER,passwordVarialble:PASSWORD)]){
          sh "some script ${USER}"
      }
      }
  }
  
  
  
}
}
