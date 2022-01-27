import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Pagination from "@/components/Pagination.vue";

describe("Home.vue", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(Home);
  });

  it("Show searchbar when not showing favourited movies", async () => {
    wrapper.vm.showingFavourites = false;
    const searchbar = wrapper.get('[data-test="searchbar"]');
    const toggler = wrapper.get('[data-test="list-view-toggler"]');
    await toggler.trigger("click");
    expect(searchbar.isVisible()).toBe(false);
  });

  it("Hide searchbar when showing favourited movies", async () => {
    wrapper.vm.showingFavourites = true;

    const searchbar = wrapper.get('[data-test="searchbar"]');
    const toggler = wrapper.get('[data-test="list-view-toggler"]');
    await toggler.trigger("click");
    expect(searchbar.isVisible()).toBe(true);
  });

  it("Show pagination when not showing favourited movies", async () => {
    wrapper.vm.showingFavourites = false;
    const pagination = wrapper.getComponent(Pagination);
    const toggler = wrapper.get('[data-test="list-view-toggler"]');
    await toggler.trigger("click");
    expect(pagination.isVisible()).toBe(false);
  });

  it("Hide pagination when showing favourited movies", async () => {
    wrapper.vm.showingFavourites = true;

    const pagination = wrapper.getComponent(Pagination);
    const toggler = wrapper.get('[data-test="list-view-toggler"]');
    await toggler.trigger("click");
    expect(pagination.isVisible()).toBe(true);
  });
});
