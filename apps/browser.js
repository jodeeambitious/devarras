registerApp("Browser", () => {
  return `
    <input placeholder="Enter URL"
      onkeydown="if(event.key==='Enter'){this.nextElementSibling.src=this.value}">
    <iframe style="width:100%;height:90%" src="https://example.com"></iframe>
  `;
});
