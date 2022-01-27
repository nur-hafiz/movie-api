import { shallowMount } from "@vue/test-utils";
import Pagination from "@/components/Pagination.vue";

describe("Pagination.vue", () => {
  it("Shows current page number", () => {
    const page = 33;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page,
      },
    });
    expect(wrapper.find(".pagination__page").text()).toMatch(String(page));
  });

  it("Hides previous-page button on first page", () => {
    const page = 1;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page,
      },
    });
    expect(wrapper.find(".pagination__button--previous").classes()).toContain(
      "pagination__button--disabled"
    );
  });

  it("Hides first-page button on first page", () => {
    const page = 1;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page,
      },
    });
    expect(wrapper.find(".pagination__button--first").classes()).toContain(
      "pagination__button--disabled"
    );
  });

  it("Shows previous-page button after first page", () => {
    const page = 2;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page,
      },
    });
    expect(wrapper.find(".pagination__button--previous").classes()).toContain(
      "pagination__button--enabled"
    );
  });

  it("Shows first-page button after first page", () => {
    const page = 2;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page,
      },
    });
    expect(wrapper.find(".pagination__button--first").classes()).toContain(
      "pagination__button--enabled"
    );
  });

  it("Hides next-page button on last page", () => {
    const page = 2;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page,
      },
    });
    expect(wrapper.find(".pagination__button--next").classes()).toContain(
      "pagination__button--disabled"
    );
  });

  it("Hides last-page button on last page", () => {
    const page = 2;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page,
      },
    });
    expect(wrapper.find(".pagination__button--last").classes()).toContain(
      "pagination__button--disabled"
    );
  });

  it("Shows next-page button before last page", () => {
    const page = 2;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page - 1,
      },
    });
    expect(wrapper.find(".pagination__button--next").classes()).toContain(
      "pagination__button--enabled"
    );
  });

  it("Shows last-page button before first page", () => {
    const page = 2;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page - 1,
      },
    });
    expect(wrapper.find(".pagination__button--last").classes()).toContain(
      "pagination__button--enabled"
    );
  });

  it("Shows last-page button before first page", () => {
    const page = 2;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page - 1,
      },
    });
    expect(wrapper.find(".pagination__button--last").classes()).toContain(
      "pagination__button--enabled"
    );
  });

  it("Should call goToPage(1) when first-page button is clicked", async () => {
    const page = 5;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page,
      },
    });

    const goToPage = jest.spyOn(wrapper.vm, "goToPage");

    await wrapper.find(".pagination__button--first").trigger("click");
    expect(goToPage).toHaveBeenCalledWith(1);
  });

  it("Should call goToPage(page - 1) when previous-page button is clicked", async () => {
    const page = 5;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: page,
      },
    });

    const goToPage = jest.spyOn(wrapper.vm, "goToPage");

    await wrapper.find(".pagination__button--previous").trigger("click");
    expect(goToPage).toHaveBeenCalledWith(4);
  });

  it("Should call goToPage(maximum) when last-page button is clicked", async () => {
    const page = 1;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: 5,
      },
    });

    const goToPage = jest.spyOn(wrapper.vm, "goToPage");

    await wrapper.find(".pagination__button--last").trigger("click");
    expect(goToPage).toHaveBeenCalledWith(5);
  });

  it("Should call goToPage(page + 1) when next-page button is clicked", async () => {
    const page = 1;
    const wrapper = shallowMount(Pagination, {
      props: {
        page,
        maximum: 5,
      },
    });

    const goToPage = jest.spyOn(wrapper.vm, "goToPage");

    await wrapper.find(".pagination__button--next").trigger("click");
    expect(goToPage).toHaveBeenCalledWith(2);
  });
});
