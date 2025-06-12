import { create } from "zustand";

interface AuthState {
  token: string | null;
  tenantId: string | null;
  user: {
    id: string;
    name: string;
  } | null;
  setToken: (token: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  tenantId: null,
  user: null,

  setToken: (token) => {
    const fakeDecoded = {
      tenant: "vw-anchieta",
      user_id: "u123",
      name: "buba",
    };

    set({
      token,
      tenantId: fakeDecoded.tenant,
      user: {
        id: fakeDecoded.user_id,
        name: fakeDecoded.name,
      },
    });
  },

  clearAuth: () => {
    set({
      token: null,
      tenantId: null,
      user: null,
    });
  },
}));
