import { ref } from "vue";
import { submitSupportRequest } from "../services/supportRequestService";

export function useSupportRequestStore() {
  const loading = ref(false);
  const success = ref(false);
  const error = ref<string | null>(null);

  async function sendRequest(name: string, email: string, message: string) {
    loading.value = true;
    success.value = false;
    error.value = null;

    try {
      await submitSupportRequest({
        name,
        email,
        message,
      });


      success.value = true;
    } catch {
      error.value = "Failed to submit support request.";
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    success,
    error,
    sendRequest,
  };
}