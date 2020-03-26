# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
District.destroy_all
Season.destroy_all
Organization.destroy_all
TeamPerson.destroy_all
Person.destroy_all
Team.destroy_all
RoundSetting.destroy_all

district = District.create({name: "Kansas City", location: "Kansas City metro", time_penalty: 0.5, time_penalty_grace_period: 10, time_penalty_increment: 10, min_team_size: 4, max_team_size: 6})
    RoundSetting.create({number: 1, time_limit: 210, min_poets: 1, max_poets: 4, district: district})
    RoundSetting.create({number: 2, time_limit: 210, min_poets: 1, max_poets: 4, district: district})
    RoundSetting.create({number: 3, time_limit: 210, min_poets: 1, max_poets: 4, district: district})
    RoundSetting.create({number: 4, time_limit: 210, min_poets: 1, max_poets: 4, district: district})

chicago = District.create({name: "Chicago", location: "Chicago metro", time_penalty: 0.5, time_penalty_grace_period: 10, time_penalty_increment: 10, min_team_size: 4, max_team_size: 6})
    RoundSetting.create({number: 1, time_limit: 210, min_poets: 1, max_poets: 1, district: chicago})
    RoundSetting.create({number: 2, time_limit: 210, min_poets: 1, max_poets: 1, district: chicago})
    RoundSetting.create({number: 3, time_limit: 210, min_poets: 1, max_poets: 1, district: chicago})
    RoundSetting.create({number: 4, time_limit: 210, min_poets: 1, max_poets: 1, district: chicago})
    RoundSetting.create({number: 5, time_limit: 210, min_poets: 4, max_poets: 4, district: chicago})

season = Season.create({year: 2019, district: district})

bssouth = Organization.create({name: "Blue Springs South"})
    bssouth19 = Team.create({organization: bssouth, season: season})
    TeamPerson.create({team: bssouth19, person: Person.create({
        first_name: "Ashley",
        last_name: "C"
    }), role: 1})
    TeamPerson.create({team: bssouth19, person: Person.create({
        first_name: "Alexia",
        last_name: "F"
    }), role: 1})
    TeamPerson.create({team: bssouth19, person: Person.create({
        first_name: "Johnny",
        last_name: "B"
    }), role: 1})
    TeamPerson.create({team: bssouth19, person: Person.create({
        first_name: "Matt",
        last_name: "B"
    }), role: 1})

barstow = Organization.create({name: "Barstow School"})
    barstow19 = Team.create({organization: barstow, season: season})
    TeamPerson.create({team: barstow19, person: Person.create({
        first_name: "Maddie",
        last_name: "B"
    }), role: 1})
    TeamPerson.create({team: barstow19, person: Person.create({
        first_name: "Meghana",
        last_name: "L"
    }), role: 1})
    TeamPerson.create({team: barstow19, person: Person.create({
        first_name: "Jia",
        last_name: "T"
    }), role: 1})

turner = Organization.create({name: "Turner High School"})
    turner19 = Team.create({organization: turner, season: season})
    TeamPerson.create({team: turner19, person: Person.create({
        first_name: "Stephanie",
        last_name: "B"
    }), role: 1})
    TeamPerson.create({team: turner19, person: Person.create({
        first_name: "Sam",
        last_name: "G"
    }), role: 1})
    TeamPerson.create({team: turner19, person: Person.create({
        first_name: "Zeke",
        last_name: "A"
    }), role: 1})
    TeamPerson.create({team: turner19, person: Person.create({
        first_name: "Nancy",
        last_name: "C"
    }), role: 1})

lincoln = Organization.create({name: "Lincoln College Preparatory School"})
    lincoln19 = Team.create({organization: lincoln, season:season})
    TeamPerson.create({team: lincoln19, person: Person.create({
        first_name: "Marjai",
        last_name: "N"
    }), role: 1})
    TeamPerson.create({team: lincoln19, person: Person.create({
        first_name: "India",
        last_name: "W"
    }), role: 1})
    TeamPerson.create({team: lincoln19, person: Person.create({
        first_name: "America",
        last_name: "F"
    }), role: 1})
    TeamPerson.create({team: lincoln19, person: Person.create({
        first_name: "Hilary",
        last_name: "P"
    }), role: 1})