local foo
local function reverse_words(str)
  local out = ""
  for word in string.gmatch(str, "%w+") do
    out = word .. " " .. out
  end
  out = out:sub(1, -2)
  print(out:len())
  return out
end

print(reverse_words "foo bar baz")
