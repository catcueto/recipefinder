const { Recipe } = require("../models");

module.exports = {
    loop_latest: (start, end) => {
        for (i = start; i < end; i++) {
            return recipeData.length - i;

        }
    }
}
  