export function handleError(res) {
  return function (error) {
    res.send(500, { error: error.message });
  };
}
