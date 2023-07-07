import axios from "axios";

const PROJECT_API_BASE_URL = "http://localhost:8080/api/v1/project"
class ProjectService{

    saveproject(project) { //take employee object as the input parameter
    
            return axios.post(PROJECT_API_BASE_URL,project)  //here we are passing the entire object to the localhost url 
    
    
    }

    getProjects(){
        return axios.get(PROJECT_API_BASE_URL);
    }

    deleteProject(projectId){
        return axios.delete(PROJECT_API_BASE_URL+"/"+projectId);
    }

    updateProject(id, project) {
        return axios.put(PROJECT_API_BASE_URL + '/' + id, project);
    }

    
}

export default new ProjectService();