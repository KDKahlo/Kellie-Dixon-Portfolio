<template>
  <div class="about-me">
    <p class="first-line">Hello! My name is</p>
    <h2 class="second-line" @click="incrementCounter">{{ firstName }} {{ lastName }}</h2>
    <h1 class="third-line">
      I am a <span class="job-title">{{ jobTitle }}</span>
    </h1>
    <p class="about-me-text">
      Full Stack Developer 🚀 | Multilingual US Citizen living and eligible to work in Germany 🇪🇺 |
      Leveraging Educational Expertise to Drive Tech Innovation 📚 | Passionate about Learning and
      Teachnology Integration| Open to All Full Stack Opportunies with a Long-term Goal in EdTech 🎮
      | Embracing New Possibilities of Remote or Hybrid Collaboration Worldwide 🌎
    </p>
    <p class="about-me-text">
      Hi there! I'm a former <span class="white-highlight">soldier</span>,
      <span class="white-highlight">billing supervisor</span>,
      <span class="white-highlight">teacher</span>, and now a
      <span class="white-highlight">full-stack developer</span> based in Berlin. My diverse
      background has shaped me into a versatile team player who thrives on problem-solving and
      innovation. Teaching abroad fueled my passion for technology, inspiring me to develop apps
      like <span class="aqua-highlight">AleYea CraftbeerMe!</span> and
      <span class="aqua-highlight">Homework Homies</span>. Recently, I completed a
      <span class="white-highlight">Fullstack Bootcamp at CodeOp</span>, which deepened my interest
      in backend development and sparked numerous app ideas. I'll be starting
      <span class="white-highlight">AWS Cloud training</span>
      in July and am excited about joining a team where I can grow and contribute as a full-stack
      developer. I'm particularly interested in roles that align with my long-term goal of advancing
      <span class="white-highlight">EdTech</span>, but I am open to exploring all full stack
      opportunities.
    </p>

    <p class="projects-intro">
      <span class="aqua-highlight">Do you want to see my projects? </span>
      <span class="white-highlight">You're already checking out one with this portfolio!</span>
      But there's more to explore - keep scrolling down to discover what else I've been working on.
    </p>
  </div>

  <div class="download-cv-button">
    <a :href="cv" target="_blank">
      <p>Download <span class="cv">CV</span></p>
    </a>
  </div>
</template>

<script>
import '../assets/main-styles.css'
import '../assets/about-me.css'

import portfolioKellieDixon from '../portfolio-info'

export default {
  data() {
    return {
      firstName: portfolioKellieDixon.firstName,
      lastName: portfolioKellieDixon.lastName,
      jobTitle: portfolioKellieDixon.jobTitle,
      cv: portfolioKellieDixon.cv,
      clickCounter: 0
    }
  }
}
</script>
