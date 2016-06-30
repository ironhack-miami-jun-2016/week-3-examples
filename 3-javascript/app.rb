# app.rb

require_relative("lib/color_counter.rb")


#                   0        1         2         3          4
colors_array = [ "indigo", "black", "purple", "indigo", "chartreuse", "indigo", "indigo", "magenta", "chartreuse", "scarlet" ]


my_counter = ColorCounter.new


puts "Testing count_colors method"


p my_counter.count_colors("indigo", colors_array) == 4

p my_counter.count_colors("chartreuse", colors_array) == 2

p my_counter.count_colors("black", colors_array) == 1

p my_counter.count_colors("pink", colors_array) == 0



upper_case_colors = colors_array.map do |color_from_array|
  color_from_array.upcase
end

p upper_case_colors
