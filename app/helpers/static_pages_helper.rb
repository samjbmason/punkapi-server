module StaticPagesHelper
  def code(language, &block)
    raw_code = capture(&block)
    content = raw_code.encode(Encoding::UTF_8)

    formatter = Rouge::Formatters::HTML.new(css_class: 'code_highlight',
                                            inline_theme: 'github')
    lexer = Rouge::Lexer.find_fancy(language)

    formatter.format(lexer.lex(content)).html_safe
  end
end
