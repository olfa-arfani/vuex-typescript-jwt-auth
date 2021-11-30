import http from "@/http-common";

class CompanyDataService {
  getAll() {
    return http.get("/company/list");
  }

  get(name: string) {
    return http.get(`/company/${name}`);
  }

  create(data: JSON) {
    return http.post("/company/create", data);
  }

  update(name: string, data: JSON) {
    return http.post(`/company/update/${name}`, data);
  }

  delete(name: string) {
    return http.delete(`/company/delete/${name}`);
  }

}

export default new CompanyDataService();
