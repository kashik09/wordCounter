document.getElementById('textInput').addEventListener('input', function() {
    let text = this.value.trim();
    let wordCount = text.length > 0 ? text.split(/\s+/).length : 0;
    document.getElementById('wordCount').textContent = wordCount;
});
