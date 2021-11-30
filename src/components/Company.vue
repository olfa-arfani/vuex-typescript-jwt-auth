<template>
  <div v-if="currentCompany" class="edit-form">
    <h4>Company</h4>
    <form>
      <div class="form-group">
        <label for="name">name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentCompany.name"
        />
      </div>
      <div class="form-group">
        <label for="email">email</label>
        <input type="text" class="form-control" id="email"
          v-model="currentCompany.email"
        />
      </div>
    </form>


    <button class="badge badge-danger mr-2"
      @click="deleteCompany"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateCompany"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Company...</p>
  </div>
</template>

<script>
import CompanyDataService from "../services/CompanyDataService";

export default {
  name: "Company",
  data() {
    return {
      currentCompany: null,
      message: ''
    };
  },
  methods: {
    getCompany(name) {
      CompanyDataService.get(name)
        .then(response => {
          this.currentCompany = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },


    updateCompany() {
      CompanyDataService.update(this.currentCompany.name, this.currentCompany)
        .then(response => {
          console.log(response.data);
          this.message = 'The Company was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteCompany() {
      CompanyDataService.delete(this.currentCompany.name)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "Companys" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
