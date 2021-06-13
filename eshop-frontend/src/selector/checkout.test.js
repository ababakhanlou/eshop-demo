import { getBasketItemCount, getBasketTotal } from "./checkout";

describe("getBasketItemCount", () => {
  it("should return the number of item inside the basket", () => {
    const state = { basket: [], selectedCategory: "" };
    expect(getBasketItemCount(state)).toBe(0);
    state.basket.push({ item: "White Desk Fan", price: 10, qty: 6 });
    state.basket.push({ item: "Tennis Racket", price: 55, qty: 10 });
    expect(getBasketItemCount(state)).toBe(16);
  });
});

describe("getBasketTotal", () => {
  it("should return the price total of items inside the basket", () => {
    const state = { basket: [], selectedCategory: "" };
    expect(getBasketTotal(state)).toBe("0.00");
    state.basket.push({ item: "White Desk Fan", price: 10, qty: 1 });
    state.basket.push({ item: "Tennis Racket", price: 55, qty: 2 });
    expect(getBasketTotal(state)).toBe("120.00");
  });
});
