pipeline{
  agent any
  
  parameters{
   
    choice(name: 'Branch', choices: ["Dev","Prod","QA"], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')

  }
  stages{
    
    stage("build"){
      steps{
         echo "build successfully"
      }
  }
    
      stage("test"){
        when {
                expression {
                    params.executeTests
                }

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
