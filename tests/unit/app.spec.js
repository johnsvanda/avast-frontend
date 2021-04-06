import App from "../../src/App.vue";
import { mount } from "@vue/test-utils";

describe("ViewAccount.vue", () => {
  let wrapper = mount(App);
  it("app renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
