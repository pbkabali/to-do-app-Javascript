import { showProjectForm } from "./projects";

describe("New Project form", () => {
  test("shows empty form for projects", () => {
    const wrapper = document.createElement("div");
    wrapper.id = "wrapper";
    document.body.appendChild(wrapper);
    showProjectForm();
    expect(
      wrapper.firstChild.classList.contains("font-weight-bold")
    ).toBeTruthy();
  });
});
