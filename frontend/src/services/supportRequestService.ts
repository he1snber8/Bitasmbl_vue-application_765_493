import api from "../api/client";

export interface SupportRequest {
  name: string;
  email: string;
  message: string;
}

export async function submitSupportRequest(request: SupportRequest) {
  return api.post("/support-requests", request);
}