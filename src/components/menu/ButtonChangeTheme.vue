<template>
    <div id="ButtonChangeTheme">
      <input id="checkbox_toggle" type="checkbox" class="check" @change="$emit('toggle')">
      <div class="checkbox">
        <label class="slide" for="checkbox_toggle">
          <label class="toggle" for="checkbox_toggle"></label>
          <label class="text" for="checkbox_toggle">☃️</label>
          <label class="text" for="checkbox_toggle">🌷</label>
        </label>
      </div>
    </div>
  </template>
  
<script>
  export default {
  };
</script>

<style scoped>
.checkbox {
width: 223px;
height: 50px;
background-color: #004c9c;
border-radius: 30px;
position: relative;
color: black;
overflow: hidden;
}

#checkbox_toggle {
display: none;
}

.checkbox .toggle {
width: 100px;
height: 40px;
position: absolute;
border-radius: 30px;
left: 7px;
cursor: pointer;
background: linear-gradient(135deg, #8983F7 40%, #A3DAFB);

transition: 0.4s;
box-shadow: 0px 0px 3px rgb(255, 255, 20), 0px 0px 5px rgb(255, 255, 20);
}

.checkbox .slide {
width: 230px;
height: 50px;
display: flex;
align-items: center;
justify-content: space-around;
cursor: pointer;
}

.checkbox .slide .text {
font-size: 30px;
font-weight: 700;
z-index: 100;
cursor: pointer;
}

.check:checked + .checkbox .slide .toggle {
transform: translateX(113px);
background: linear-gradient(150deg, #fbd786 30%, #f7797d 80%);
box-shadow: -0px -0px 10px #fbd786, -0px -0px 3px #fbd786;
}

.check:checked + .checkbox .slide {
background-color: #87D72F;
color: #000;
}
</style>
