import axios from "axios";

const PROJECT_API_BASE_URL = "http://localhost:8080/api/v1/project"
class ProjectService{

    saveproject(project) { //take employee object as the input parameter
    
            return axios.post(PROJECT_API_BASE_URL,project)  //here we are passing the entire object to the localhost url 
    
    
    }

    
}

export default new ProjectService();