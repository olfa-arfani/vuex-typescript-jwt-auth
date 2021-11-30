<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="company.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          class="form-control"
          id="email"
          v-model="Company.email"
          name="email"
        />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          class="form-control"
          id="phone"
          v-model="Company.phone"
          name="phone"
        />
      </div>

       <div class="form-group">
        <label for="website">Website</label>
        <input
          class="form-control"
          id="website"
          v-model="Company.website"
          name="website"
        />
      </div>

      <button @click="saveCompany" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCompany">Add</button>
    </div>
  </div>
</template>

<script>
import CompanyDataService from "../services/CompanyDataService";

export default {
  name: "add-company",
  data() {
    return {
      company: {
        name: "ACME",
        email: "fox@acme-corp.com",
        phone: "+33404040404",
        website: "www.acme-corp.com"

      },
      submitted: false
    };
  },
  methods: {
    saveCompany() {
      var data = {
        name: this.Company.name,
        email: this.Company.email,
        phone: this.Company.phone,
        website: this.Company.website
      };

      CompanyDataService.create(data)
        .then(response => {
          this.Company.name = response.data.name;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newCompany() {
      this.submitted = false;
      this.Company = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
