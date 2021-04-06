import CreateAccount from "../../src/views/CreateAccount.vue";
import { shallowMount } from "@vue/test-utils";

describe("ViewAccount.vue", () => {
  let wrapper = shallowMount(CreateAccount);

  it("create account renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
