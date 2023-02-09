// Example 1:

// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
// Example 2:

// Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// Output: 3

var numUniqueEmails = function (emails) {
  const sortedEmails = emails
    .map((elem) => elem.split('@'))
    .map((elem) => [elem[0].split('+')[0].replaceAll('.', ''), elem[1]])
    .map((elem) => elem.join('@'));

  return new Set(sortedEmails).size;
};

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ])
);
