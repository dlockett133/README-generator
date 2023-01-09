// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === null) {
    return ""
  } else {
    let badge = `https://img.shields.io/badge/License-${license}-blue.svg`
    return badge
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === null) {
    return ""
  } else {
    let link = `https://opensource.org/licenses/${license}`
    return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null) {
    return ""
  } else {
    return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered by the ${data.license} License

## Contributing
${data.contributions}

## Tests
${data.tests}

## Questions
Any additional questions? Please contact me via:
- Github: https://github.com/${data.username}
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
