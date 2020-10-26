req = ""
query = ""
results = ""

customerDelete.onshow=function() { 
  drpDelete.clear()
  query = "SELECT name FROM customer" 
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkp29690&pass=" + pw + "&database=mkp29690&query=" + query)
  
  if (req.status == 200) { 
    customerDelete = JSON.parse(req.responseText)
    console.log(customerDelete)
  }
  
  if (customerDelete.length == 0) { 
    errorMsg.value = "There are no customers to be deleted."
  } else { 
    for (i=0; i<= customerDelete.length - 1; i++)
      drpDelete.addItem(customerDelete[i])
  }
}
      
  drpDelete.onclick=function(s) { 
    if (typeof(s) == "object") 
      return 
    else { 
      drpDelete.value = s
      let deleteCustomer = s 
      let found = false 
      for (i = 0; i <= customerDelete.length - 1; i++) { 
        if (deleteCustomer == customerDelete[i]) { 
          found = true; 
          break; 
          }
        }
     if (found == false)
      txtDelete.value = `That customer is not in the database.${deleteCustomer} \n ${customerDeleteR}`
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = " + '"' + deleteCustomer + '"'
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkp29690&pass=" + pw + "&database=mkp29690&query=" + query)
      
  if (req.status == 200) { 
        if (req.responseText == 500) 
          console.log(`You have successfully deleted the customer named ${customerDelete}`)
        else
          console.log(`There was a problem deleting ${customerDelete} from the database.`)
      } else {
        console.log(`Error: ${req.status}`);
      }
    }
       
    query = `SELECT name FROM customer`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mkp29690&pass=" + pw + "&database=mkp29690&query=" + query)
       
    if (req.status == 200) { 
      customerAfterDelete = JSON.parse(req.responseText)
    } else {
      console.log(`Error: ${req.status}`);
    }
    let customersLeft = ""
    for (i = 0; i <= customerAfterDelete.length - 1; i++)
      customersLeft = customersLeft + customerAfterDelete[i] + "\n"
    txtDelete.value = customersLeft
  }
}

btnNext2.onclick=function(){
  ChangeForm(customerAdd)
}
