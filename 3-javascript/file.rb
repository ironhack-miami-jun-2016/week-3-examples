# file.rb

#                   0        1         2         3          4
colors_array = [ "indigo", "black", "purple", "indigo", "chartreuse", "indigo", "indigo", "magenta", "chartreuse", "scarlet" ]


def count_colors(color, the_array)
  color_occurances = 0

  the_array.each do |color_from_array|
    if color_from_array == color
      color_occurances += 1
    end
  end

  color_occurances
end


puts "Testing count_colors method"


p count_colors("indigo", colors_array) == 4

p count_colors("chartreuse", colors_array) == 2

p count_colors("black", colors_array) == 1

p count_colors("pink", colors_array) == 0



upper_case_colors = colors_array.map do |color_from_array|
  color_from_array.upcase
end

p upper_case_colors
