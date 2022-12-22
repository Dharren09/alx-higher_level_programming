#!/usr/bin/node
exports.esrever = function (list) {
  return list.reduceRight(function (array, current) {
    array.push(current);
    return array;
  }, []);
};
Footer
© 2022 GitHub
