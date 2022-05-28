// QA_HQ
// QA_SHIP1
// QA_SHIP2 
// QA2_HQ
// QA2_SHIP1
// QA2_SHIP2
// INIT_HQ
// INIT_SHIP1
// PERF_HQ
// PERF_SHIP1
// PERF_SHIP2

class EnvVariable {
    getShipID(testEnv) {
      if (  testEnv === "--env=QA_HQ") {
        return {
          ship1: "64f91ae289ab11e8be3dfa2819c4da71",
          ship2: "8dcc009689ab11e8be3dfa2819c4da71",
          vship: "6918f495c89711e8b5efceba97ca71e1"
        };
      } else if (  testEnv === "--env=INIT_HQ") {
        return {
          ship1: "64f91ae289ab11e8be3dfa2819c4da71",
        };
      } else if (  testEnv === "--env=QA2_HQ") {
        return {
          ship1: "64f91ae289ab11e8be3dfa2819c4da71",
        };
      }
    }
    getElasticHost(testEnv) {
      if (  testEnv === '--env=QA_HQ') {
        return 'http://shore-qa.otaliodev.com:9200/'
      } 
      else if (  testEnv === '--env=QA_SHIP1') {
        return 'http://ship1-qa.otaliodev.com:9200/'
      } 
      else if (  testEnv === '--env=QA_SHIP2') {
        return 'http://ship2-qa.otaliodev.com:9200/'
      } 
      else if (  testEnv === '--env=INIT_HQ') {
        return 'http://shore-qa-init.otaliodev.com:9200/'
      } 
      else if (  testEnv === '--env=INIT_SHIP1') {
        return 'http://ship1-qa-init.otaliodev.com:9200/'
      } 
      else if (  testEnv === '--env=QA2_HQ') {
        return 'http://shore-qa2.otaliodev.com:9200/'
      } 
      else if (  testEnv === '--env=QA2_SHIP1') {
        return 'http://ship1-qa2.otaliodev.com:9200/'
      } 
      else if(  testEnv === '--env=QA2_SHIP2') {
        return 'http://ship2-qa2.otaliodev.com:9200/'
      }
    }
  }

  module.exports = new EnvVariable();