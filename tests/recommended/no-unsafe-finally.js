let foo = function() {
  try {
      return 1;
  } catch(err) {
      return 2;
  } finally {
      return 3;
  }
};

let bar = function() {
  try {
      return 1;
  } catch(err) {
      return 2;
  } finally {
      throw new Error;
  }
};