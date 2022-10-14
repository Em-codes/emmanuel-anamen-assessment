<template>
   <section :class="{'mobile-display': toggleNavView}">
      <div class="sidebar-wrapper">
        <div class="sidebar">
          <h1 class="logo">Job Finder</h1>
        
          <div class="avatar-wrapper">
            <div class="avatar-img"><img src="../assets/images/avatar.jpg" alt="avatar"></div>
            <div  class="view-profile">
              <button>View Profile</button>
            </div>
          </div>

          <nav>
            <a href="#">
              <div class="nav-link">
                <img src="../assets/images/dashboard.png" alt="dashboard">
                <h6>Dashboard</h6>
              </div>
              <div class="nav-link">
                <img src="../assets/images/dashboard.png" alt="dashboard">
                <h6>Find Jobs</h6>
              </div>
              <div class="nav-link">
                <img src="../assets/images/dashboard.png" alt="dashboard">
                <h6>Settings</h6>
              </div>
            </a>
           
          </nav>
        </div>
      </div>
    </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name: 'SideNav',
data() {
  return {
  }
},

  computed: {
    windowWidth() {
      return window.innerWidth
    },

    ...mapGetters({
      toggleNavView: ['mobileNavState']
    })
  },

  watch: {
  },

  mounted() {  
    window.addEventListener('resize', () => {
    window.innerWidth <= 767 ? this.$store.commit('SET_NAVBAR', true) : this.$store.commit('SET_NAVBAR', false)
    })
  }
}
</script>

<style scoped>
.sidebar-wrapper { position: fixed; left: 0; top: 0; background: hsl(228, 28%, 20%); color: #fff; height: 100vh; max-width: 300px; width: 100%; border-top-right-radius: 30px;}
.sidebar-wrapper .sidebar { max-width: 200px; width: 100%; margin: 40px auto 0 auto; }
.sidebar-wrapper .sidebar .logo { text-align: center; }
.sidebar-wrapper .sidebar .avatar-wrapper { margin: 60px 0 40px 0; }
.sidebar-wrapper .sidebar .avatar-wrapper .avatar-img { max-width: 80px; height: 80px; border: 3px solid #fff; border-radius: 50%; margin: 0 auto; }
.sidebar-wrapper .sidebar .avatar-wrapper .avatar-img > img { width: 100%; border-radius: 50%; }
.sidebar-wrapper .sidebar .avatar-wrapper .view-profile { display: flex; align-items: center; justify-content: center; margin-top: 20px; }
.sidebar-wrapper .sidebar .avatar-wrapper .view-profile > button { all: unset; padding: 5px 16px; margin: 0 auto; cursor: pointer; border-radius: 10px; background: hsl(228, 34%, 66%); }


.sidebar-wrapper .sidebar nav > a { text-decoration: none; }
.sidebar-wrapper .sidebar nav .nav-link { display: flex; align-items: center; padding: 5px 16px; margin: 0 auto; cursor: pointer; border-radius: 10px; margin-bottom: 20px;}
.sidebar-wrapper .sidebar nav .nav-link:hover { background: hsl(228, 34%, 66%);  }
.sidebar-wrapper .sidebar nav .nav-link > img { width: 26px; margin-right: 12px; }
.sidebar-wrapper .sidebar nav .nav-link > h6 { color: #fff; font-size: 16px; font-family: 'Source Sans Pro', sans-serif;}

.mobile-display {display: none}

  /* MEDIA QUERIES */
  /* @media (max-width: 767px) {
    .sidebar-wrapper { display: none;}
  } */
</style>