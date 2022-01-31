// Create our number formatter.
export const currencyFormatter = new Intl.NumberFormat("en-UK", {
  minimumFractionDigits: 0,
  style: "currency",
  currency: "GBP"

  // Following options are needed to round to whole numbers if required.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as £2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as £2,501)

  // Function call looks like this:currencyFormatter.format(price)

  // currencyFormatter.format(price)

  // See houseProfile component for example of use there
});
