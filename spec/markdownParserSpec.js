describe('markdownParser', () => {
  describe('bold text', () => {
    it('translates "**text**" to "<strong>text</strong>"', () => {
      let result = markdownParser('**text**');
      expect(result).toBe('<strong>text</strong>');
    });

    it('parses multiple bold phrases', () => {
      let text = "Writing **legible** code is **difficult**.";
      let result = markdownParser(text);
      expect(result).toMatch('<strong>legible</strong>');
      expect(result).toMatch('<strong>difficult</strong>');
    });
  });

  describe('italic text', () => {
    it('translates "_text_" to "<em>text</em>"', () => {
      let result = markdownParser('_text_');
      expect(result).toBe('<em>text</em>');
    });
  });

  describe('headings', () => {
    it('translates "# Heading" to "<h1>Heading</h1>"', () => {
      let result = markdownParser('# Heading');
      expect(result).toBe('<h1>Heading</h1>');
    });

    it('translates "## Heading" to "<h2>Heading</h2>"', () => {
      let result = markdownParser('## Heading');
      expect(result).toBe('<h2>Heading</h2>');
    });
  });

  // describe('links', () => {
  //
  // });
  //
  // describe('images', () => {
  //
  // });
  //
  // describe('blockquotes', () => {
  //
  // });
  //
  // describe('paragraphs', () => {
  //
  // });
  //
  // describe('unordered lists', () => {
  //
  // });
  //
  // describe('ordered lists', () => {
  //
  // });
  //
  // describe('horizontal rules', () => {
  //
  // });
  //
  // describe('inline code', () => {
  //
  // });
  //
  // describe('code blocks', () => {
  //
  // });
});
