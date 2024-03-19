const yyy = (y) => {
    if (y < 2) {
      return false;
    } else {
      for (let index = 2; index < y; index++) {
        if (y % index === 0) {
          return false;
        }
      }
      return true;
    }
  };

  module.exports = {
    yyy
  }