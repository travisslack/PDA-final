### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.

 
def func1 val 
  if val = 1
  return true
  else
  return false
  end
end

<!-- change dif to def -->


dif max a b
  if a > b
      return a 
  else
  b
  end 
end 
end 

<!-- takeaway one end -->
  
def looper 
  for i in 1..10
  puts i
  end
end

<!-- indentation and adding an if statement -->
 
failures = 0 
 
if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
<!-- adding an end -->
 
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
<!-- nothing -->
 
  
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

<!-- nothing -->

  
if failures 
  puts "Test Failed"
else
  puts "Test Passed"
end
<!-- adding in > 0 so it will pass the test -->


