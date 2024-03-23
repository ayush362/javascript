const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newnums = nums.map((num) => num * 2);
// console.log(newnums);

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

const NameCategory = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
});
console.log(NameCategory);

const companyYears = companies.map((company) => {
    return {
        name: company.name,
        lasted: company.end - company.start,
    };
});
console.log(companyYears);
