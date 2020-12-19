module.exports = function (name, nunjucks, env) {
  this.tags = [name]

  this.parse = (parser, nodes) => {
    const token = parser.nextToken()
    const args = parser.parseSignature(null, true)
    parser.advanceAfterBlockEnd(token.value)

    return new nodes.CallExtension(this, 'run', args)
  }

  /**
   *
   * @param {Object} context, The context of NJK. Not useful for this,
   * @param {String} moduleIdentifier, the string after the module tag.
   * @param {Object} data, the data passed to the module
   * @param {*} dataOverride, not necessary.
   */
  this.run = (context, moduleIdentifier, data = {}, dataOverride) => {
    // Create module path.
    const modulePath = `${name}/${moduleIdentifier}.njk`

    // Return rendered module.
    return new nunjucks.runtime.SafeString(env.render(modulePath, data))
  }
}
