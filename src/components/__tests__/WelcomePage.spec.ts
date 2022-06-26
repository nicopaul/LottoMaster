import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import WelcomePage from "../WelcomePage.vue";

describe("WelcomePage", () => {
  it("renders properly", () => {
    const wrapper = mount(WelcomePage);
    expect(wrapper.findComponent("SupportedLottoGameItem")).toBeTruthy();
  });
});
