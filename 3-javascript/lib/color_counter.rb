# lib/color_counter.rb

class ColorCounter
  def count_colors(color, the_array)
    color_occurances = 0

    the_array.each do |color_from_array|
      if color_from_array == color
        color_occurances += 1
      end
    end

    color_occurances
  end
end
