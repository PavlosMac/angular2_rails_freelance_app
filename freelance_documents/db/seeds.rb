FreelanceDocument.delete_all

10.times do |d|
  FreelanceDocument.create(
    title: "document #{d}",
    description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    file_url: "https://en.wikipedia.org/wiki/Ruby_on_Rails",
    image_url: "https://drive.google.com/file/d/0BzTl7BoZ2RrnaHBjdU43anJTQUk/view?usp=sharing"
    )
end
