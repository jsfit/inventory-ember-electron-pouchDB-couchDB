import { helper } from '@ember/component/helper';

export default helper(function totalCal(params/*, hash*/) {
  
  let total = 0;
  let salesTax = 0
  let discount = 0
  let inclusiveSalesTax = 0


  params[0].forEach(d => {
    total += d.get("qty")*d.get("retail_price");
  });

  salesTax = ((total * (params[2]/100)));
  discount = ((total * (params[3]/100)));
  inclusiveSalesTax = salesTax + total;

  switch(params[1]){
    case 'total_retail':
        return total;
      break;

    case 'salesTax':
        return salesTax.toFixed(2) ;
      break;

    case 'inclusive':
        return inclusiveSalesTax.toFixed(2);
      break;

    case 'discount':
        return discount.toFixed(2);
      break;

    case 'netTotal':
        return (total - discount).toFixed(2);
      break;

  }

});
