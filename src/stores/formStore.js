import { createStore } from "solid-js/store";
import { apiFetch } from "api/fetch";

export const [form, setForm] = createStore({
  values: {},
  loading: false,
  error: null,
});

export const setValue = (name, value) => setForm("values", name, value);

export const submit = async (url) => {
  setForm({ loading: true, error: null });
  try {
    console.log(JSON.stringify(form.values));
    // const response = await apiFetch(url, { body: JSON.stringify(form.values) });
    // return response;
  } catch (err) {
    setForm({ error: err.message });
  } finally {
    setForm({ loading: false });
  }
};
