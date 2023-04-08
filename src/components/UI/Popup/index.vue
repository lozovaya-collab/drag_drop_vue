<template>
  <div class="popup">
    <div class="popup_wrapper">
      <div class="popup_title">
        <h3>создать задачу</h3>
      </div>
      <div class="popup_content">
        <input type="time" name="" id="" />
        <input type="text" />
        <!-- <slot></slot> -->
      </div>
      <div class="popup_actions">
        <!-- <slot></slot> -->
        <button>cancel</button>
        <button>ok</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.popup {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.331);
  display: flex;
  justify-content: center;
  &_wrapper {
    position: absolute;
    background-color: $white;
    width: 40%;
    max-width: 450px;
    height: auto;
    min-height: 200px;
    top: 15%;
    border-radius: 15px;
  }
}
</style>
