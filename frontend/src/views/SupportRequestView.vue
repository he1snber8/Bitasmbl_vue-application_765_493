<script setup lang="ts">
import { ref } from "vue";
import { useSupportRequestStore } from "../stores/supportRequest";

const name = ref("");
const email = ref("");
const message = ref("");

const { loading, success, error, sendRequest } = useSupportRequestStore();

async function submit() {
  if (!name.value || !email.value || !message.value) {
    return;
  }

  await sendRequest(name.value, email.value, message.value);
}
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="name" placeholder="Name" />
    //
    <input v-model="email" type="email" placeholder="Email" />

    <textarea v-model="message" placeholder="How can we help?" />

    <button type="submit" :disabled="loading">
      {{ loading ? "Sending..." : "Send request" }}
    </button>

    <p v-if="success">Support request submitted successfully.</p>

    <p v-if="error">
      {{ error }}
    </p>
  </form>
</template>
