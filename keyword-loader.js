module.exports = function(source) {
  let content = source.replace(/\{\{/g, '<i class="heightlight-word">').replace(/\}\}/g, '</i>')
  return content
}