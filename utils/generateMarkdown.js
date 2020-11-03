// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![${data.license} license badge](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This application is covered under the ${data.license} license.

  ## Contributing
  ${data.contribute}

  ## Testing
  ${data.tests}

  ## Questions
  For questions regarding this application please visit my Github profile:
  [${data.github}](https://github.com/${data.github})

  To contact the developer directly, please email me:
  [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
