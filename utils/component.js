module.exports = function (nunjucks, env) {
  this.tags = ['component']

  this.parse = (parser, nodes) => {
    const token = parser.nextToken()
    const args = parser.parseSignature(null, true)
    parser.advanceAfterBlockEnd(token.value)

    return new nodes.CallExtension(this, 'run', args)
  }

  /**
   *
   * @param {Object} context, The context of NJK. Not useful for this,
   * @param {String} componentIdentifier, the string after the component tag.
   * @param {Object} data, the data passed to the component
   * @param {*} dataOverride, not necessary.
   */
  this.run = (context, componentIdentifier, data = {}, dataOverride) => {
    // Create component path.
    const componentPath = `components/${componentIdentifier}.njk`

    // Return rendered component.
    return new nunjucks.runtime.SafeString(env.render(componentPath, data))
  }
}
