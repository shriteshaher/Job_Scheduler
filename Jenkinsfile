pipeline{
  agent any
  
  parameters{
    choice(name:"versiont",choices:["Shritesh" ,"Aher"],descreption:"")
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
