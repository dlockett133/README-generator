// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = `https://img.shields.io/badge/License-${license}-blue.svg`
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = `https://opensource.org/licenses/${license}`
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null) {
    return ""
  } else {
    return `## License`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributions}

## Tests
${data.tests}

## Questions
`;
}

module.exports = generateMarkdown;
