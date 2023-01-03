const t = require("@babel/types");

function purifyExpression(arrowFunctionExpression) {
  if (arrowFunctionExpression == null) {
    return t.nullLiteral();
  }

  if (arrowFunctionExpression.type === "Literal") {
    return arrowFunctionExpression;
  }

  if (arrowFunctionExpression.type === "Identifier") {
    return t.callExpression(arrowFunctionExpression, []);
  }

  return arrowFunctionExpression.body;
}

module.exports = function (opts) {
  return {
    visitor: {
      CallExpression(path) {
        if (path.node.callee.type === "CallExpression") {
          if (path.node.callee.callee.name === "renderIf") {
            path.replaceWith(
              t.expressionStatement(
                t.conditionalExpression(
                  t.callExpression(t.identifier("Boolean"), [
                    path.node.callee.arguments[0],
                  ]),
                  purifyExpression(path.node.arguments[0]),
                  purifyExpression(path.node.arguments[1])
                )
              )
            );
          }
        }
      },
    },
  };
};
