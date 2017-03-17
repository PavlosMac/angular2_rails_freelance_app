FreelanceDocument.delete_all

10.times do |d|
  FreelanceDocument.create(
    title: "document #{d}",
    description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    file_url: "https://en.wikipedia.org/wiki/Ruby_on_Rails",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/8/81/Edinburgh_Castle_-_geograph.org.uk_-_931962.jpg"
    )
end
