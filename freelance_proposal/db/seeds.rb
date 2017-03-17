# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' } { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke' movie: movies.first)
Proposal.delete_all

10.times do |proposal|
  Proposal.create!(
      customer: "Customer #{proposal}",
      portfolio_url: 'https://www.linkedin.com/in/pavlos-macdonald-kosmidis-0501a1136/',
      tools: "ruby on rails angular2 postgresql",
      estimated_hours: (80 + proposal),
      hourly_rate: 120,
      weeks_to_complete: 40,
      client_email: "macdonaldtrading888@gmail.com"
  )
end
