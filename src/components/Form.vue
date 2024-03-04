<template>
  <div>
    <div class="start-btn-container" v-if="!showPopup && !formSubmitted">
      <button class="start-btn" @click.stop="showPopup = true">Начать</button>
    </div>
    <div v-if="showPopup" class="popup" @click.stop>
      <div class="popup-content" @click.stop>
        <h1>Регистрация</h1>
        <div class="flex-container">
          <div><input type="text" v-model="form.name" placeholder="Имя"></div>
          <div><input type="text" v-model="form.surname" placeholder="Фамилия"></div>
          <div><input type="text" v-model="form.age" placeholder="Возраст"></div>
          <div><input type="text" v-model="form.email" placeholder="E-mail"></div>
          <div><input type="text" v-model="form.telegram" placeholder="Telegram"></div>
        </div>
        <button class="send-btn" @click="submit">Отправить</button>
      </div>
    </div>
    <pre v-if="formSubmitted">{{ result }}</pre>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const showPopup = ref(false);
    const formSubmitted = ref(false);
    const form = ref({
      name: '',
      surname: '',
      age: '',
      email: '',
      telegram: ''
    });
    const result = ref(null);

    const submit = () => {
      result.value = JSON.stringify(form.value, null, 2);
      showPopup.value = false;
      formSubmitted.value = true;
    };

    const closePopupOnClickOutside = (event) => {
      if (showPopup.value && !event.target.closest('.popup-content')) {
        showPopup.value = false;
      }
    };

    const closePopupOnEsc = (event) => {
      if (showPopup.value && event.key === 'Escape') {
        showPopup.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('click', closePopupOnClickOutside);
      window.addEventListener('keydown', closePopupOnEsc);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('click', closePopupOnClickOutside);
      window.removeEventListener('keydown', closePopupOnEsc);
    });

    return {
      showPopup,
      formSubmitted,
      form,
      result,
      submit,
      closePopupOnClickOutside,
      closePopupOnEsc
    };
  },
};
</script>

<style>
.start-btn-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.start-btn {
  width: 6rem;
  height: 2.5rem;
  background-color: white;
  color: black;
  border: 2px solid #008CBA;
  transition-duration: 0.4s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.start-btn:hover {
  background-color: #008CBA;
  color: white;
}

.popup {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}


.popup-content {
  background-color: #f7f7f7f7;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
  font-family: Monseratt, sans-serif;
  max-width: 500px;
  border-radius: 0.5rem;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}

.send-btn {
  width: 5rem;
  height: 1.5rem;
  margin-top: 1rem;
  background-color: white;
  border: 2px solid #008CBA;
  border-radius: 0.2rem;
  cursor: pointer;
  transition-duration: 0.2s;
}

.send-btn:hover {
  background-color: #edebeb;
}

.flex-container > div {
  width: 45%;
}

pre {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


@media screen and (max-width: 600px) {
  .flex-container > div {
    width: 100%;
  }
}
</style>
