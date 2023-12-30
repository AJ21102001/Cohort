/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let m = new Map();
  for(let i = 0 ; i < transactions.length ; i++){
    if(m.has(transactions[i]["category"]) == false){
      m.set(transactions[i]["category"], transactions[i]["price"]);
    }else{
      let lastAmount = m.get(transactions[i]["category"]);
      m.set(transactions[i]["category"], lastAmount + transactions[i]["price"]);
    }
  }

  let ans = new Array;

  for(let [key, val] of m){
    ans.push({
      category: key,
      totalSpent: val
    })
  }
  
  return ans;
}

module.exports = calculateTotalSpentByCategory;
