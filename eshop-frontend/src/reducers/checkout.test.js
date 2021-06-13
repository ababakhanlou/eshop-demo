import { reducer } from "./checkout";

describe("reducer", () => {
  const initialState = {
    selectedCategory: "",
    basket: [],
  };

  describe("ADD_TO_BASKET", () => {
    it("should return the new basket with added item", () => {
      const newState = reducer(initialState, {
        type: "ADD_TO_BASKET",
        payload: { item: "White Desk Fan" },
      });
      expect(newState).toStrictEqual({
        ...initialState,
        basket: [{ item: "White Desk Fan", qty: 1 }],
      });
      expect(
        reducer(newState, {
          type: "ADD_TO_BASKET",
          payload: { item: "White Desk Fan" },
        })
      ).toStrictEqual({
        ...newState,
        basket: [{ item: "White Desk Fan", qty: 2 }],
      });
    });
  });

  describe("REMOVE_FROM_BASKET", () => {
    it("should return new basket with removed item", () => {
      const state = {
        ...initialState,
        basket: [{ item: "White Desk Fan", qty: 2, price: 200 }],
      };
      expect(
        reducer(state, {
          type: "REMOVE_FROM_BASKET",
          payload: "White Desk Fan",
        })
      ).toStrictEqual({ ...state, basket: [] });
    });
  });

  describe("DEDUCT_FROM_BASKET", () => {
    it("should return new basket with deducted 1 from qty on selected item", () => {
      const state = {
        ...initialState,
        basket: [{ item: "White Desk Fan", qty: 2, price: 200 }],
      };
      const newState = reducer(state, {
        type: "DEDUCT_FROM_BASKET",
        payload: "White Desk Fan",
      });
      expect(newState).toStrictEqual({
        ...state,
        basket: [{ item: "White Desk Fan", qty: 1, price: 200 }],
      });
      expect(
        reducer(newState, {
          type: "DEDUCT_FROM_BASKET",
          payload: "White Desk Fan",
        })
      ).toStrictEqual({
        ...state,
        basket: [],
      });
    });
  });
});
