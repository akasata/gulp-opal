class HogeClass
  attr_accessor :text

  def initialize(text)
    @text = text
  end

  def print_text
    puts @text
  end
end

hoge = HogeClass.new('Hello Opal World!')
hoge.print_text

