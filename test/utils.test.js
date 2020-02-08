const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });

  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
});

test("returns 118.8 when passed 99", () => {
  expect(utils.addVAT(99)).toBe(118.8);
});

describe("utils.getFullName", () => {
  test("returns Huruki Murakami when passed Huruki Murakami", () => {
    expect(utils.getFullName("Huruki", "Murukami")).toBe("Huruki Murukami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns £5.00 when passed £10.00", () => {
    expect(utils.makeHalfPrice("£10")).toBe("£5.00");
  });
});

test("returns £7 when passed £3.50", () => {
  expect(utils.makeHalfPrice("£7")).toBe("£3.50");
});

test("returns £3.10 when passed £6.20", () => {
  expect(utils.makeHalfPrice("£6.20")).toBe("£3.10");
});

test("returns £0.10 when passed £0.20", () => {
  expect(utils.makeHalfPrice("£0.20")).toBe("£0.10");
});

test("returns £0.00 when passed £0.00", () => {
  expect(utils.makeHalfPrice("£0.00")).toBe("£0.00");
});

describe("utils.countBooks", () => {
  test("returns 3 when passed ['Harry Potter', 'I-Robot', 'The Dice Man']", () => {
    expect(utils.countBooks(['Harry Potter', 'I-Robot', 'The Dice Man'])).toBe(3);
  });
});

test("returns 3 when passed ['I-Robot', 'The Dice Man']", () => {
  expect(utils.countBooks(['I-Robot', 'The Dice Man'])).toBe(2);
});

test("returns true if the title is in stock", () => {
  const book = {
    title: "Artemis Fowl",
    author: "Eoin Colfer",
    yearOfPublication: 1991,
    quantity: 3
  };
  expect(utils.isInStock(book)).toBe(true);
});

test("returns true if the title is in stock", () => {
  const book = {
    title: "Artemis Fowl",
    author: "Eoin Colfer",
    yearOfPublication: 1991,
    quantity: 0
  };
  expect(utils.isInStock(book)).toBe(false);
});

test("It should return the total price with VAT applied", () => {
  expect(utils.getTotalOrderPrice(18, 2)).toBe(43.2);
})

test("It should return the total price with VAT applied", () => {
  expect(utils.getTotalOrderPrice(8, 10)).toBe(96);
})