# decoder

alphabet = "abcdefghijklmnopqrstuvwxyz"
punctuation = ".,?'! "
message = "xuo jxuhu! jxyi yi qd unqcfbu ev q squiqh syfxuh. muhu oek qrbu je tusetu yj? y xefu ie! iudt cu q cuiiqwu rqsa myjx jxu iqcu evviuj!"
translated_message = ""

for character in message:
    if character in alphabet:
        character_value = alphabet.find(character)
        translated_message += alphabet[(character_value + 10) % 26]
    else:
        translated_message += character

print(translated_message)

# coder

alphabet = "abcdefghijklmnopqrstuvwxyz"
punctuation = ".,?'! "
message = "how fun! i was able to decode it, but it was very challenging!"
coded_message = ""

for character in message:
    if character in alphabet:
        character_value = alphabet.find(character)
        coded_message += alphabet[(character_value - 10) % 26]
    else:
        coded_message += character
        
print(coded_message)