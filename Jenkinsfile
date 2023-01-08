pipeline{
  agent any
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
        withCredentials(usernamePassword(credentials:'Server_creadintial',usernameVarialble:USER)){
          sh "some script ${USER}"
      }
      }
  }
  
  
  
}
}
