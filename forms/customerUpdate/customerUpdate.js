/*
let req = ""
let query = ""
let results = ""
let pw = "BIA375pw"
let userName = "mkp29690"

customerSelect.onshow=function() { 
  drpSelect.clear()
  query = "SELECT name FROM customer" 
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkp29690&pass=" + pw + "&database=mkp29690&query=" + query)
  
  if (req.status == 200) { 
    customerSelect = JSON.parse(req.responseText)
    console.log(drpSelect)
  }
  
  if (customerSelect.length == 0) { 
    console.log("There are no customers found.")
  } else { 
    for (i=0; i<= customerSelect.length - 1; i++)
      drpSelect.addItem(customerSelect[i])
  }
}
      
  drpSelect.onclick=function(s) { 
    if (typeof(s) == "object") 
      return 
    else { 
      console.log(s)
      drpSelect.value = s
      query = `SELECT state FROM customer WHERE name = '${s}'`
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkp29690&pass=" + pw + "&database=mkp29690&query=" + query)
      
      if (req.status == 200) { 
        customerState = JSON.parse(req.responseText)
        console.log(customerState)
      }
      query = `SELECT name FROM customer WHERE state = '${customerState[0]}'`
       req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkp29690&pass=" + pw + "&database=mkp29690&query=" + query)
       
       if (req.status == 200) { 
        customerSameState = JSON.parse(req.responseText) 
        console.log(customerSameState)
      }
      
      
      let userMessage = ""
      for (i=0; i<= customerSameState.length - 1; i++) 
          userMessage = userMessage + customerSameState[i] + "\n"
          txtSelect.value=userMessage
      }
  }
*/