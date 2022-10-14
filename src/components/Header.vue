<template>
    <div>
        <div class="header-comps-wrapper">

            <div class="search-bar"  v-if="!$route.path.includes('job-details')">
                <input type="text" name="" id="" placeholder="search jobs...">
            </div>

               <div class="go-back" v-else @click="$router.go(-1)">
                <img class="bell-icon" src="../assets/images/arrow_back.png" alt="arrrow_back_icon">
            </div>

            <div class="cul-wrapper">
                <div class="notification">
                    <img class="bell-icon" src="../assets/images/bell_simple.png" alt="bell_icon">
                </div>
                <div @click="toggleNavBar" class="menu">
                    <img class="menu-icon" src="../assets/images/menu.png" alt="hamburger">
                </div>
                <div class="user">Hi, {{'Emmanuel'}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:'Header',

methods: {
    toggleNavBar() {
        this.$store.commit('TOGGLE_NAVBAR')
    }
}
}
</script>

<style>
.header-comps-wrapper { margin-top: 20px; display: flex; align-items: center; justify-content: space-between; }
.header-comps-wrapper .search-bar { max-width: 600px; }
.header-comps-wrapper .search-bar > input { all: unset; width: 400px; color: hsl(226, 25%, 87%); border: 2px solid hsl(228, 34%, 66%); padding: 10px 6px; border-radius: 10px; }
.header-comps-wrapper .search-bar > input::placeholder { color:hsl(229, 33%, 88%); opacity: 0.7; }

.header-comps-wrapper .go-back {  height: 40px; width: 40px; border-radius: 50%; display: flex; align-items: center; transition: 0.4s; justify-content: center; background: hsl(227, 47%, 96%); }
.header-comps-wrapper .go-back:hover { background: hsl(16, 81%, 61%); cursor: pointer; transition: 0.4s; }
.header-comps-wrapper .go-back > img { width: 30px; }

.header-comps-wrapper .cul-wrapper { display: flex; align-items: center; }
.header-comps-wrapper .cul-wrapper .notification { height: 40px; width: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: hsl(227, 47%, 96%); margin-right: 20px; }
.header-comps-wrapper .cul-wrapper .notification .bell-icon { width: 30px; }

.header-comps-wrapper .cul-wrapper .menu { display: none; height: 40px; width: 40px; border-radius: 50%; align-items: center; justify-content: center; background: hsl(227, 47%, 96%);}
.header-comps-wrapper .cul-wrapper .menu .menu-icon{ width: 30px; }
.header-comps-wrapper .cul-wrapper .user { padding: 8px 16px; margin: 0 auto; cursor: pointer; border-radius: 6px; color:#fff; font-size: 18px; background: hsl(228, 34%, 66%); }


/* MEDIA QUERIES */
@media (max-width: 991px) {
    .header-comps-wrapper .search-bar > input { width: 100%; }
  }
@media (max-width: 767px) {
    .header-comps-wrapper .cul-wrapper .user { display: none; }
    .header-comps-wrapper .cul-wrapper .menu { display: flex;}

    }
</style>