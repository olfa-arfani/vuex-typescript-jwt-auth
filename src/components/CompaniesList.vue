<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Companys List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(Company, index) in Companys"
          :key="index"
          @click="setActiveCompany(Company, index)"
        >
          {{ Company.title }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentCompany">
        <h4>Company</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentCompany.name }}
        </div>
        <div>
          <label><strong>Email:</strong></label> {{ currentCompany.email }}
        </div>
        <div>
          <label><strong>Website:</strong></label> {{ currentCompany.website}}
        </div>
        <div>
          <label><strong>Website:</strong></label> {{ currentCompany.website}}
        </div>
        <router-link :to="'/company/' + currentCompany.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Company...</p>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyDataService from "../services/CompanyDataService";

export default {
  name: "Companys-list",
  data() {
    return {
      Companys: [],
      currentCompany: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveCompanys() {
      CompanyDataService.getAll()
        .then(response => {
          this.Companys = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveCompanys();
      this.currentCompany = null;
      this.currentIndex = -1;
    },

    removeAllCompanys() {
      CompanyDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    }

  },
  mounted() {
    this.retrieveCompanys();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
