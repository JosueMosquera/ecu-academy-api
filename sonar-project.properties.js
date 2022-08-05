const scanner = require('sonarqube-scanner');

scanner(
    {
      serverUrl : 'https://sonarqube.sistemaagil.net',
      token : "07c4adc89254820c3dfaab89ecb1a9268f6fa303",
      options: {
        'sonar.projectKey':'ecu-academy-back',
        'sonar.projectName': 'ecu-academy-back',
        'sonar.projectDescription': 'Description for "My App" project...',
        'sonar.sourceEncoding':'UTF-8',
        'sonar.sources': 'src',
        'sonar.javascript.lcov.reportPaths': 'coverage/jest/lcov.info'
      }
    },
    () => process.exit()
  )