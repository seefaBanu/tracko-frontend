import axios from "axios";

const TEAM_API_BASE_URL ="http://localhost:8080/api/v1/teams";


class TeamService{

    saveTeam(team) {
        return axios.post(TEAM_API_BASE_URL, team);
      }

      getTeam() {
        return axios.get(TEAM_API_BASE_URL);
      }
    
      deleteTeam(id) {
        return axios.delete(TEAM_API_BASE_URL + "/" + id);
      }
    
      getTeamById(id) {
        return axios.get(TEAM_API_BASE_URL + "/" + id);
      }
    
      updateTeam(team, id) {
        return axios.put(TEAM_API_BASE_URL + "/" + id,team);
      }
}
export default new TeamService();