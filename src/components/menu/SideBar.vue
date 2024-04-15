<template>
  <div class="SideBar">
    <div class="offcanvas offcanvas-start" id="SideBar" aria-labelledby="SideBarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="SideBarLabel">{{ $t("Text.Titles.menu")}}</h5>
        <button id="CloseSideBar" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <b-nav vertical>
          <b-nav-item href="#Headerview">{{ $t("Text.Titles.accueil")}}</b-nav-item>
          <b-nav-item href="#Introduction">{{ $t("Text.Titles.introduction")}}</b-nav-item>
          <b-nav-item href="#Experience">{{ $t("Text.Titles.experience")}}</b-nav-item>
          <b-nav-item href="#Testimonials">{{ $t("Text.Titles.testimonials")}}</b-nav-item>
          <b-nav-item href="#ContactUs">{{ $t("Text.Titles.contact")}}</b-nav-item>
        </b-nav>
      </div>  
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#SideBarLabel {
  color: #ffffff;
}
#SideBar {
  width: 250px;
  background-color: #000000;
  position:fixed;
}
#CloseSideBar {
  color: #ffffff;
}
</style>