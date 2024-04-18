/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronouns = ["la", "nuestra"];
let adjectives = ["gran", "pequeña"];
let nouns = ["fábrica", "empresa"];
let extensions = [".us", ".es", ".com", ".de"];

function generateDomainNames(pronouns, adjectives, nouns, extensions) {
  let domainNames = [];
  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          let domainName = pronoun + adjective + noun + extension;
          domainNames.push(domainName);
        }
      }
    }
  }
  return domainNames;
}

let generatedDomains = generateDomainNames(
  pronouns,
  adjectives,
  nouns,
  extensions
);

for (let domain of generatedDomains) {
  console.log(domain);
}
