# frozen_string_literal: true

# 標準入力へ入力を促す
puts "N_1, N_2, N_3\nX\nの形式で文字を入力してください\n\n>"
inputs = readlines

raise ArgumentError('inputs is empty') if inputs.empty?
raise ArgumentError('inputs is only one') if inputs.size == 1

# 標準入力から文字を取得
input_list = inputs[0].chomp
input_sum = inputs[1].chomp
input_list_array = input_list.split(',')

# [[N_1, N_2], [N_1, N_3]...]の二次元配列を作成
tbl = []
input_list_array.each do |a|
  input_list_array.each do |b|
    # 同一の値の場合はスキップ
    next if a.strip.to_i == b.strip.to_i

    # 2つの値を配列化し外側の配列にpushする
    data_list = [a.strip.to_i, b.strip.to_i].sort
    tbl.push(data_list) unless tbl.include?(data_list)
  end
end

# input_sumと一致する組み合わせのみを算出
ifnone = proc { raise ArgumentError, 'item not found' }
result = tbl.find(ifnone) { |t| t.sum == input_sum.to_i }

puts result.join(',')
