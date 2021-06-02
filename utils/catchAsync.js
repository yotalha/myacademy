module.exports = func => {
  return (req, res, next) => {
    func (req, res, next).catct(next);
  }
}