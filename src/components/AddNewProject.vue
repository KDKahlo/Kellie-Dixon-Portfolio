<template>
  <form class="add-new-project-form">
    <h3>Add New Project</h3>
    <div class="add-new-project-title">
      <h4>Title:</h4>
      <input type="text" v-model="title" />
    </div>
    <div class="add-new-project-repository">
      <h4>repository:</h4>
      <input type="text" v-model="repository" />
    </div>
    <div class="add-new-project-snapshot">
      <h4>Snapshot:</h4>
      <input type="img" v-model="repository" />
    </div>
    <div class="add-new-project-description">
      <h4>Description:</h4>
      <textarea v-model="description"></textarea>
    </div>
    <div>
      <h4>Skills:</h4>
    </div>
    <div class="skill-set">
      <skill-set-btn @add-skillset="addSkillset"></skill-set-btn>
    </div>
    <button
      class="add-new-project-btn"
      @click.prevent="portfolio.addNewProject(title, repository, description, skills)"
    >
      Add Project
    </button>
  </form>
</template>

<script>
import '../assets/main-styles.css'
import '../assets/add-new-project.css'
import portfolioKellieDixon from '../portfolio-info'

export default {
  props: {
    authenticated: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '',
      repository: '',
      description: '',
      skills: [],
      portfolio: portfolioKellieDixon
    }
  },
  methods: {
    addSkillset(skill) {
      this.skills.push(skill)
    }
  }
}
</script>
